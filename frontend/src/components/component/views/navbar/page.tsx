"use client";

import { authApi } from "@/lib/api";
import type { User } from "@/lib/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const response = await authApi.getCurrentUser();
        if (isMounted) {
          setCurrentUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (isMounted) {
          setCurrentUser(null);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [pathname]);

  return (
    <div
      key={pathname} // 👈 ini penting buat force re-render tiap route
      className="bg-[#E31F1F] w-full h-22 rounded-br-4xl rounded-bl-4xl flex items-center justify-between p-4 drop-shadow-[0_10px_5px_rgba(0,0,0,0.25)] z-12 absolute border-black"
    >
      <div className="flex items-center ">
        <img src="/logo-nevtik.jpg" alt="logo" className="w-10 h-10 rounded-full mx-12" />
        <p className="text-2xl font-bold text-white ">Pemilu Nevtik 2025</p>
      </div>
      <div className="flex items-center mx-12 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 24 24"
          className="text-white hover:text-black"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0 0a8.95 8.95 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.95 8.95 0 0 0 12 21m3-11a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
          ></path>
        </svg>
        <a href={currentUser ? "" : "/signIn"} className="text-white text-2xl pl-6 ">
          {currentUser ? currentUser.name : "Log in"}
        </a>
      </div>
    </div>
  );
}
