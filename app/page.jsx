import Footer from "./components/Footer";
import QuotesCard from "./components/QuotesCard";
import TimerCard from "./components/TimerCard";

export default function Home() {
  return (
    <div class="absolute overflow-y-hidden  top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="text-center  justify-center items-center flex flex-col  text-white mt-9 md:mt-10 ">
        <img src="/logo2.svg" className="w-44" alt="" />
        <p className="font-Reenie_Beanie mt- text-5xl md:text-8xl"> DEVBOOST</p>
        <p className="md:mt-2 mt-4  font-Montserrat text-sm md:text-lg">
          Boost your developer confidence and <br className="" /> make it
          happen.
        </p>
        <QuotesCard />
        <TimerCard />
        <Footer />
      </div>
    </div>
  );
}
