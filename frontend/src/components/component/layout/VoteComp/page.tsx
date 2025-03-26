"use client";

import { useState } from "react";
import Image from "next/image";

interface Candidate {
  name: string;
  division: string;
  image: string;
  href: string;
}

const candidates: Candidate[] = [
  { name: "Player 1", division: "Divisi 1", image: "/pino.png", href: "/Voting-Page/candidate/candidate1/" },
  { name: "Player 2", division: "Divisi 2", image: "/player2.png", href: "/Voting-Page/candidate/candidate2/" },
  { name: "Player 3", division: "Divisi 3", image: "/player3.png", href: "/Voting-Page/candidate/candidate3/" },
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
      <h1 className="text-4xl font-bold pt-8 text-center mb-12">
        Ayo Vote! Siapa Pemimpin Nevtik Selanjutnya!
      </h1>

      {/* Candidate Cards */}
      <div className="flex flex-row justify-center items-center mt-4 gap-10 flex-wrap">
        {candidates.map((candidate, index) => (
          <CandidateCard key={index} candidate={candidate} openModal={openModal} />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCandidate && (
        <div className="fixed inset-0 flex z-20 justify-center items-center bg-black/25 bg-opacity-50">
          <div className="bg-white/80 px-12 py-8 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">
              Apakah Anda Yakin Ingin memilih {selectedCandidate.name}?
            </p>
            <p className="text-lg font-thin mb-10">Note: Jangan sampai anda salah pilih</p>
            <div className="flex justify-center gap-12">
              <button onClick={confirmYes} className="bg-green-600 text-white px-10 py-2 rounded cursor-pointer">
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
    <div className="border border-black w-96 border-dashed rounded-4xl text-center">
      <div className="bg-red-500 rounded-4xl rounded-b-md relative z-6 py-4 text-white">
        <h1 className="text-2xl font-sans">{candidate.name}</h1>
        <span className="text-[18px] font-thin">{candidate.division}</span>
      </div>
      <div className="h-[28rem] text-center bg-[#EEEEEE] rounded-b-4xl items-center relative flex flex-col justify-center">
        <div className="absolute bottom-5 z-1">
          <Image src={candidate.image} alt={candidate.name} width={400} height={400} className="mx-auto" />
        </div>

        <button
          onClick={() => openModal(candidate)}
          className="absolute bottom-4 rounded-xl mb-12 z-6 hover:bg-white hover:text-black duration-300 border border-black right-1/4 bg-red-800 px-16 py-3 text-white cursor-pointer"
        >
          Vote Me
        </button>
        <div className="absolute bottom-6 border-1 border-black p-2 rounded-full right-5 hover:text-outline z-12 rotate-190 hover:rotate-360  hover:text-white duration-500 ease-in-out" >
          <a href={candidate.href}><svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className="" viewBox="0 0 512 512"><path fill="currentColor" d="M163 93.2h255.9L325.9.1L0 0l.1 325.9l93.1 93V163l349 349l69.8-69.8z"></path></svg></a>
        </div>
      </div>
    </div>
  );
}
