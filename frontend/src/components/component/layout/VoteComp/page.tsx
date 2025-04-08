"use client";

import { useState } from "react";
import Image from "next/image";
import Countdown from "@/components/Countdown";

interface Candidate {
  name: string;
  division: string;
  image: string;
  quote: string;
  href: string;
}

const candidates: Candidate[] = [
  { name: "Player 1", division: "Web Dev", image: "/pino.png", quote: '5 years experience in IT leadership', href: "/Voting-Page/candidate/candidate1/" },
  { name: "Player 1", division: "Web Dev", image: "/pino.png", quote: '5 years experience in IT leadership', href: "/Voting-Page/candidate/candidate1/" },
  { name: "Player 1", division: "Web Dev", image: "/pino.png", quote: '5 years experience in IT leadership', href: "/Voting-Page/candidate/candidate1/" },
];

export default function VoteCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const openModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCandidate(null);
  };

  const confirmYes = () => {
    window.location.href = "/thank-you"; // Adjust the route based on your setup
  };

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col bg-[#F8F2DE]">
      <h1 className="text-4xl font-bold pt-20 text-center ">
        Ayo Vote! Siapa Pemimpin Nevtik Selanjutnya!
      </h1>
      <p className="font-thin mt-2 mb-4">Pilih kandidat terbaik untuk memimpin organisasi kita ke depan</p>

      {/* Candidate Cards */}
      <div className="bg-[#FFFFFF] shadow-2xl flex flex-col">
        <div className="flex p-12  justify-center items-center mt-4 gap-20 ">
          {candidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} openModal={openModal} />
          ))}
          
        </div>
        <div className="px-12 items-center flex justify-between mb-4">
          <p>Total Votes : 12345</p>
          <Countdown targetDate="2025-05-01T00:00:00" />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCandidate && (
        <div className="fixed inset-0 flex z-20  justify-center items-center bg-black/25 bg-opacity-50">
          <div className="bg-white/80 px-12 py-8 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">
              Apakah Anda Yakin Ingin memilih {selectedCandidate.name}?
            </p>
            <p className="text-lg font-thin mb-10">Note: Jangan sampai anda salah pilih</p>
            <div className="flex justify-center gap-12">
              <button onClick={confirmYes} className="bg-green-600 hover:bg-white  hover:text-black duration-300 ease-in text-white px-10 py-2 rounded cursor-pointer">
                Iya
              </button>
              <button onClick={closeModal} className="bg-[#E31F1F] text-white px-10 py-2 rounded cursor-pointer">
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CandidateCard({ candidate, openModal }: { candidate: Candidate; openModal: (candidate: Candidate) => void }) {
  return (
    <>   
      <div className=" h-full w-96 text-center flex flex-col flex-wrap">
        <div className="bg-[#E64848] rounded-lg flex justify-between p-7 rounded-b-md  z-6 py-4 text-white">
          <div className="flex justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" className="text-[#f7cccc] "><path fill="currentColor" d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"></path></svg>
            <h1 className="text-xl font-semibold  font-sans text-white pl-3">{candidate.name}</h1>
          </div>
          <span className="text-[18px] font-thin text-white">{candidate.division}</span>
        </div>
        <div className=" text-center pt-3 flex flex-wrap flex-col justify-center">
            <Image src={candidate.image} alt={candidate.name} width={300} height={300} className="mx-auto" />
            <div className="flex items-start px-12">
              <p className="text-lg  font-thin text-black mt-4">{candidate.quote}</p>
              <div className="relative border">
                 <div className="absolute cursor-pointer border hover:rotate-180 duration-300 ease-in-out border-black/25 p-2 rounded-full -top-7 left-5">
                    <a href="/" className=""><svg width="23" height="20" viewBox="0 0 23 20" fill="none" className="" xmlns="http://www.w3.org/2000/svg">
                      <path className="" d="M22.0899 18.9832C22.6391 18.9254 23.0375 18.4333 22.9797 17.884L22.0378 8.93348C21.98 8.38423 21.4879 7.98583 20.9386 8.04363C20.3894 8.10143 19.991 8.59355 20.0488 9.1428L20.8861 17.0989L12.93 17.9362C12.3807 17.994 11.9823 18.4861 12.0401 19.0353C12.098 19.5846 12.5901 19.983 13.1393 19.9252L22.0899 18.9832ZM0.370784 1.77711L21.356 18.7659L22.6144 17.2115L1.62922 0.222647L0.370784 1.77711Z" fill="black"/>
                      </svg>
                    </a>
                 </div>
              </div>
            </div>
          <div className="mt-4 flex justify-between items-center   py-3 px-12">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 512 512" className="text-[#DC2626] mr-2"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M320 458.16S304 464 256 464s-74-16-96-32H96a64 64 0 0 1-64-64v-48a64 64 0 0 1 64-64h30a32.34 32.34 0 0 0 27.37-15.4S162 221.81 188 176.78S264 64 272 48c29 0 43 22 34 47.71c-10.28 29.39-23.71 54.38-27.46 87.09c-.54 4.78 3.14 12 7.95 12L416 205"></path><path fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={32} d="m416 271l-80-2c-20-1.84-32-12.4-32-30s14-28.84 32-30l80-4c17.6 0 32 16.4 32 34v.17A32 32 0 0 1 416 271Zm32 65l-112-2c-18-.84-32-12.41-32-30c0-17.61 14-28.86 32-30l112-2a32.1 32.1 0 0 1 32 32a32.1 32.1 0 0 1-32 32Zm-48 128l-64-3c-21-1.84-32-11.4-32-29s14.4-30 32-30l64-2a32.09 32.09 0 0 1 32 32a32.09 32.09 0 0 1-32 32Zm32-64l-96-2c-19-.84-32-12.4-32-30s13-28.84 32-30l96-2a32.09 32.09 0 0 1 32 32a32.09 32.09 0 0 1-32 32Z"></path></svg>
              <p>124 Votes
            </p>
            </div>

          <button
            onClick={() => openModal(candidate)}
            className="rounded-lg hover:bg-white hover:text-black duration-300 border right-1/4 bg-red-800 px-6 py-2 text-white cursor-pointer"
          >
            Vote Me
          </button>

          </div>
        
        </div>
  
      </div>
    </>   
  );
}
