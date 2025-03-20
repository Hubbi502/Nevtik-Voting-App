export default function MainComp() {
    return (
        <>
        <div className="bg-[#F8F2DE] w-full h-screen">
      <div className="absolute left-20 top-1/3 text-black">
        <h1 className=" font-semibold text-6xl">Selamat Datang, Player</h1>
        <p className="my-4 text-[26px] font-mono font-extralight">Pilihanmu akan menentukan masa depan <br /> Siap Buat Memilih Ketua Nevtik Berikutnya?</p>
        <div className="mt-18">
          <a href="" className=" w-full h-full p-4 bg-red-500 rounded-xl text-white text-2xl hover:bg-amber-50 hover:text-black ease-in duration-300 hover:border-1" >Mulai Voting</a>   
        </div>
      </div>           
    </div>
        </>
    )
}