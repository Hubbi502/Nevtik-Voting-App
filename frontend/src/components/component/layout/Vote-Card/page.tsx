"use client"; // Needed for event handlers in Next.js App Router

import { useState } from "react";
import Image from "next/image";

export default function VoteCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const confirmYes = () => {
    // Redirect user after confirming vote
    window.location.href = "/thank-you"; // Adjust the route based on your Next.js setup
  };

  return (
  <div className="flex w-full h-screen justify-center items-center flex-col bg-[#F8F2DE]">
  <h1 className="text-4xl font-bold pt-8 text-center">
    Ayo Vote! Siapa Pemimpin Nevtik Selanjutnya!
  </h1>

  {/* Candidate Cards */}
  <div className="flex flex-row justify-center items-center mt-10 gap-10 flex-wrap">
    <div className="border border-black w-96 border-dashed rounded-4xl text-center">
      <div className="bg-red-500 rounded-4xl rounded-b-md py-4 text-white">
        <h1 className="text-2xl font-sans">Player 2</h1>
        <span className="text-[18px] font-thin">Divisi</span>
      </div>
      <div className="h-96 text-center bg-[#EEEEEE] rounded-b-4xl items-center relative flex flex-col justify-center">
        <Image
          src="/placeholder.jpg" // Replace with actual image path
          alt="Candidate Image"
          width={200}
          height={300}
          className="mx-auto"
        />
        <button
          onClick={openModal}
          className="absolute bottom-4 rounded-xl hover:bg-white hover:text-black duration-300 border border-black right-1/4 bg-red-800 px-16 py-3 text-white cursor-pointer"
        >
          Vote Me
        </button>
      </div>
    </div>

    <div className="border border-black w-96 border-dashed rounded-4xl text-center">
      <div className="bg-red-500 rounded-4xl rounded-b-md py-4 text-white">
        <h1 className="text-2xl font-sans">Player 2</h1>
        <span className="text-[18px] font-thin">Divisi</span>
      </div>
      <div className="h-96 text-center bg-[#EEEEEE] rounded-b-4xl items-center relative flex flex-col justify-center">
        <Image
          src="/placeholder.jpg" // Replace with actual image path
          alt="Candidate Image"
          width={200}
          height={300}
          className="mx-auto"
        />
        <button
          onClick={openModal}
          className="absolute bottom-4 rounded-xl hover:bg-white hover:text-black duration-300 border border-black right-1/4 bg-red-800 px-16 py-3 text-white cursor-pointer"
        >
          Vote Me
        </button>
      </div>
    </div>

    <div className="border border-black w-96 border-dashed rounded-4xl text-center">
      <div className="bg-red-500 rounded-4xl rounded-b-md py-4 text-white">
        <h1 className="text-2xl font-sans">Player 2</h1>
        <span className="text-[18px] font-thin">Divisi</span>
      </div>
      <div className="h-96 text-center bg-[#EEEEEE] rounded-b-4xl items-center relative flex flex-col justify-center">
        <Image
          src="/placeholder.jpg" // Replace with actual image path
          alt="Candidate Image"
          width={200}
          height={300}
          className="mx-auto"
        />
        <button
          onClick={openModal}
          className="absolute bottom-4 rounded-xl hover:bg-white hover:text-black duration-300 border border-black right-1/4 bg-red-800 px-16 py-3 text-white cursor-pointer"
        >
          Vote Me
        </button>
      </div>
    </div>
  </div>
  



      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/25 bg-opacity-50">
          <div className="bg-white/80 px-12 py-8 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">
              Apakah Anda Yakin Ingin memilih Kandidat ini?
            </p>
            <p className="text-lg font-thin mb-10">
              Note : Jangan sampai anda salah pilih
            </p>
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