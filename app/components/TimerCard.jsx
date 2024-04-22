"use client";
import { useEffect, useState } from "react";

const TimerCard = () => {
  const [timeUntilWeekend, setTimeUntilWeekend] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate time until weekend
    function calculateTimeUntilWeekend() {
      const today = new Date();
      const currentDay = today.getDay();
      const daysUntilWeekend = currentDay === 6 ? 7 : 6 - currentDay;
      const hoursUntilWeekend = 24 - today.getHours();
      const minutesUntilWeekend = 60 - today.getMinutes();
      const secondsUntilWeekend = 60 - today.getSeconds();

      return {
        days: daysUntilWeekend,
        hours: hoursUntilWeekend,
        minutes: minutesUntilWeekend,
        seconds: secondsUntilWeekend,
      };
    }

    // Set initial time until weekend on mount
    setTimeUntilWeekend(calculateTimeUntilWeekend());

    // Update time until weekend every second
    const timer = setInterval(() => {
      setTimeUntilWeekend(calculateTimeUntilWeekend());
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, []);

  // Function to format time units
  function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
  }
  return (
    <div className=" mt-24   dark:bg-gray-700 max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      <img
        className="absolute w-[28rem] -mt-36 -ml-5 "
        src="/image.svg"
        alt="shape"
      />
      <div className="p-6">
        <div className="text-lg font-semibold text-white mb-4">
          {timeUntilWeekend.days === 0
            ? "Party Time!"
            : `${timeUntilWeekend.days} days and ${timeUntilWeekend.hours} hours left until the next weekend`}
        </div>
        <div className="flex items-center  justify-between">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 text-center w-12 h-12">
              <span className="text-xl font-semibold">
                {formatTime(timeUntilWeekend.hours)}
              </span>
            </div>
            <span className="text-xl">:</span>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 text-center w-12 h-12">
              <span className="text-xl font-semibold">
                {formatTime(timeUntilWeekend.minutes)}
              </span>
            </div>
            <span className="text-xl">:</span>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-2 text-center w-12 h-12">
              <span className="text-xl font-semibold">
                {formatTime(timeUntilWeekend.seconds)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerCard;
