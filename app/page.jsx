import Footer from "./components/Footer";
import QuotesCard from "./components/QuotesCard";
import TimerCard from "./components/TimerCard";

export default function Home() {
  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="text-center justify-center items-center flex flex-col  text-white mt-10 ">
        <p className="font-Montserrat text-4xl">
          {" "}
          Monday Motivation for <br />
          <span className="font-Reenie_Beanie ml-3 text-8xl"> Developers</span>
        </p>
        <QuotesCard />
        <TimerCard />
        <Footer />
      </div>
    </div>
  );
}
