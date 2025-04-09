// src/components/component/views/navbar/ClientNavbarWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./page";

export default function ClientNavbarWrapper() {
  const pathname = usePathname();

  if (pathname === "/signIn") return null;

  return <Navbar key={pathname} />; // key biar ganti user tiap route
}
