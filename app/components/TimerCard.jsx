"use client";
import { useEffect, useState } from "react";

const TimerCard = () => {
  const [timeUntilWeekend, setTimeUntilWeekend] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    partyTime: false,
  });

  useEffect(() => {
    // Function to calculate time until weekend
    function calculateTimeUntilWeekend() {
      const today = new Date();
      const currentDay = today.getDay();
      if (currentDay === 6 || currentDay === 0) {
        return { partyTime: true }; // Set partyTime to true for Saturday or Sunday
      } else {
        const daysUntilWeekend = currentDay === 5 ? 1 : 5 - currentDay;
        const hoursUntilWeekend = 24 - today.getHours();
        const minutesUntilWeekend = 60 - today.getMinutes();
        const secondsUntilWeekend = 60 - today.getSeconds();

        return {
          days: daysUntilWeekend,
          hours: hoursUntilWeekend,
          minutes: minutesUntilWeekend,
          seconds: secondsUntilWeekend,
          partyTime: false,
        };
      }
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
    <div className=" mt-10 md:mt-24 flex items-center justify-center    w-96 md:w-[26rem] mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border border-2-white ">
        <div className="text-lg font-semibold text-white mb-4">
          {timeUntilWeekend.partyTime
            ? "It's Party Time, Enjoy the Weekend! 🎉"
            : `${timeUntilWeekend.days} days and ${timeUntilWeekend.hours} hours left until the next weekend`}
        </div>
        {timeUntilWeekend.partyTime ? (
          ""
        ) : (
          <div className="flex items-center  justify-between">
            <div className="flex items-center space-x-2 text-gray-600 ">
              <div className="bg-gray-200  rounded-md p-2 text-center w-12 h-12">
                <span className="text-xl font-semibold">
                  {formatTime(timeUntilWeekend.hours)}
                </span>
              </div>
              <span className="text-xl">:</span>
              <div className="bg-gray-200  rounded-md p-2 text-center w-12 h-12">
                <span className="text-xl font-semibold">
                  {formatTime(timeUntilWeekend.minutes)}
                </span>
              </div>
              <span className="text-xl">:</span>
              <div className="bg-gray-200  rounded-md p-2 text-center w-12 h-12">
                <span className="text-xl font-semibold">
                  {formatTime(timeUntilWeekend.seconds)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimerCard;
