import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function CongratsPage () {

  return (
    <>
    <div className="flex justify-center items-center  bg-[#F8F2DE] h-screen">
        <div className=" p-12 w-[36rem] text-center top-36 absolute">
                <span className="text-6xl font-mono font-bold absolute z-12 bottom-8 left-8" >Congratulation</span>
                <span className="text-6xl font-mono font-bold text-white absolute bottom-7 left-7 text-shadow text-outline z-6" style={{WebkitTextStroke: "1px black",}}>Congratulation</span>
        </div>
        <div className="relative top-4  flex ">
            <Image src="/pino.png" alt="confetti" width={500} height={500} className="mx-auto" />
        </div>
    </div>
    <div className="flex justify-center items-center relative ">
        <div className=" absolute bottom-24 z-1">
            <svg width="1106" height="119" viewBox="0 0 1106 119" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M0 0H1106L1053 61L1106 119H0L71.5 61L0 0Z" fill="#D84040"/>
            </svg>
        </div>
    
        
    </div>

    </>
  );
};


