export default function AdminRow() {
    return (
        <>
        <div className="w-1/6 items-center py-12 flex flex-col h-[100vh] border-r-2 border-black text-black h-100vh relative px-32">
           <div className="absolute top-[90px] mt-6 ">
                <div className="flex flex-col cursor-pointer  ">
                    <p className="text-2xl font-semibold pl-4 pb-2">List User</p>
                    <div className=" flex items-center px-6 py-2 border-1 bg-[#D84040] rounded-xl text-white text-[20px] hover:bg-amber-50 hover:text-black ease-in duration-300 hover:border-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" className=""><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0 0a8.95 8.95 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.95 8.95 0 0 0 12 21m3-11a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path></svg>
                        <a href="/Admin/AdminTable" className="px-12 text-text-center items-center" >Users</a>
                    </div>
                </div>
                <div className="flex flex-col mt-6 cursor-pointer">
                    <p className="text-2xl font-semibold pl-3 pb-2">Hasil Voting</p>
                    <div className=" flex items-center px-6 py-2 border-1 bg-[#D84040] rounded-xl text-white text-[20px] hover:bg-amber-50 hover:text-black ease-in duration-300 hover:border-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path fill="currentColor" d="M4 2v18h18v2H2V2zm17.914 6L15.5 14.414l-4-4l-5 5L5.086 14L11.5 7.586l4 4l5-5z"></path></svg>
                        <a href="/Admin/AdminChart" className="px-12 text-text-center items-center" >Hasil</a>
                    </div>
                </div>
           </div>
           <div className="absolute bottom-0 mb-6">
            <a href="#" className="border-1 border-black rounded-3xl px-12 bg-white hover:bg-black hover:text-white duration-500 ease-in-out p-3">Log Out</a>
           </div>
      
        </div>

        </>
    )
}