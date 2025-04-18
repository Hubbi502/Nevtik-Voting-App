import Menu from "@/components/Navigation";
import Image from "next/image";

export default function End() {
  return (
    <div className='h-screen bg-[#F8F2DE] flex items-center justify-center'>
      <div className='flex flex-col items-center px-4 py-10 space-y-6 md:py-20 md:space-y-8'>
        <Image src={"/assets/logo.svg"} width={150} height={150} alt='logo' className='w-32 h-32 md:w-48 md:h-48' />
        <h1 className='text-2xl font-bold text-center md:text-4xl'>
          Terima Kasih Telah Menggunakan Hak Suara Anda
        </h1>
        <h2 className='text-lg font-bold text-center md:text-xl'>
          "Setiap suara membawa perubahan. Nevtik terus maju karena Anda!"
        </h2>
        <a href="/" className='px-12 py-2 mt-8 bg-red-600 rounded-lg hover:bg-black duration-500 ease-in text-white shadow-black shadow-sm text-lg md:text-2xl hover:cursor-pointer'>
          Kembali
        </a>
      </div>
    </div>
  );
}
