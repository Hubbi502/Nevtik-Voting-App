import Menu from "@/components/Navigation";
import Image from "next/image";

export default function End() {
  return (
    <div className='h-screen'>
      <Menu />
      <div className='flex flex-col place-items-center py-25 space-y-3'>
        <Image src={"/assets/logo.svg"} width={200} height={200} alt='logo' />
        <h1 className='text-4xl font-bold'>
          Terima Kasih Telah Menggunakan Hak Suara Anda
        </h1>
        <h2 className='text-xl font-bold'>
          "Setiap suara membawa perubahan. Nevtik terus maju karena Anda!"
        </h2>
        <button className='px-30 py-2 bg-red-600 rounded-xl text-white shadow-black shadow-sm text-2xl hover:cursor-pointer'>
          Kembali
        </button>
      </div>
    </div>
  );
}
