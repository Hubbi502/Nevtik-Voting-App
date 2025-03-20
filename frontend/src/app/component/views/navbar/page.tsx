export default function Navbar() {
    return (
        <>
        <div className="bg-[#ECDCBF] w-full h-22 rounded-br-4xl rounded-bl-4xl flex items-center justify-between p-4 border-b-2 border-black absolute">
            <div className="flex items-center ">
                <img src="/images/logo.png" alt="logo" className="w-10 h-10 rounded-full mx-12" />
                <p className="text-2xl font-extralight text-black ">Pemilu Nevtik 2025</p>
            </div>
            <div className="flex items-center mx-12">
                <img src="/images/exit.png" alt="profile" className="w-12 h-12 rounded-full mx-16" />
                <a href="" className="text-black text-2xl">Log Out</a>
            </div>
        </div>
        </>
    )
}