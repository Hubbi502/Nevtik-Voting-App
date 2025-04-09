import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function CongratsPage () {

  return (
    <>
    <div className="flex justify-center items-center w-full bg-[#F8F2DE] h-screen">
        <div className=" p-12 w-[36rem] text-center top-32 absolute">
                <span className="text-6xl font-mono font-bold absolute z-12 bottom-8 left-8" >Congratulation</span>
                <span className="text-6xl font-mono font-bold text-white absolute bottom-7 left-7 text-shadow text-outline z-6" style={{WebkitTextStroke: "1px black",}}>Congratulation</span>
        </div>
        <div className="relative -top-4 flex ">
            <Image src="/pino.png" alt="confetti" width={500} height={500} className="mx-auto" />
        </div>
    </div>
    

        <div className=" flex justify-center items-center relative">
            <div className=" absolute bottom-40 z-1 h-">
                <svg width="1106" height="119" viewBox="0 0 1106 119" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full ">
                    <path d="M0 0H1106L1053 61L1106 119H0L71.5 61L0 0Z" fill="#D84040"/>
                    <text x="50%" y="35%" className="" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="44" fontFamily="Mono" fontWeight='bold'>Advino Rahmandika Tahir</text>
                    <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="24" fontFamily="Mono" fontWeight='normal'>Division</text>
                </svg>
            </div>
            <div className=" relative bottom-[115px]  flex justify-center items-center flex-row top">
                <div className="absolute border-1 rounded-3xl px-12 py-6 w-[30rem] bg-[#16A34A]/13 flex justify-around border-black/25 text-center">
                    <div className=" ">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 1L32.9042 5.79L41.4513 5.775L44.0761 13.51L51 18.275L48.3437 26L51 33.725L44.0761 38.49L41.4513 46.225L32.9042 46.21L26 51L19.0958 46.21L10.5487 46.225L7.92393 38.49L1 33.725L3.65627 26L1 18.275L7.92393 13.51L10.5487 5.775L19.0958 5.79L26 1Z" stroke="#16A34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.7993 26L23.371 32.25L36.5144 19.75" stroke="#16A34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="text-[#16A34A]/75 text-[20px] pl-3 justify-center items-center flex text-center">
                        Terpilih dengan 100 suara (56.8%)
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-6 left-12  ">
            <div className="p-4 px-12 rounded-xl  hover:bg-white hover:text-black ease-in duration-300 cursor-pointer border-1 border-black bg-red-700 text-white">
                <a href="" className="text-xl  font-mono">Kembali</a>
            </div>
        </div>
  

    </>
  );
};


