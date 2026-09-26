"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";
import Logo from "@/assets/logo.png";

const NavbarPage = () => {
  const pathname = usePathname();
  const { planCount, savedCount } = useFitLog();

  return (
    <header className="border-b border-gray-700 bg-[#0C0D10]">
      <nav className="mx-auto flex h-16 items-center justify-between container">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center">
            <Image src={Logo} alt="Fitlog Logo" />
          </div>
          <span className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Center*/}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <Link href="/"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${pathname === "/"
              ? "bg-[#1A2312] text-[#CCFF00]"
              : "text-gray-300 hover:text-white"
              }`}
          >
            Workouts
          </Link>

          <Link href="/My-Plan"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${pathname === "/My-Plan"
              ? "bg-[#1A2312] text-[#CCFF00]"
              : "text-gray-300 hover:text-white"
              }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Plan */}
          <Link href="/My-Plan"
            className="flex items-center gap-2 text-xs font-semibold text-white"
          >
            <span>Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#CCFF00] px-1.5 text-[10px] font-bold text-black">
              {planCount}
            </span>
          </Link>

          {/* Saved */}
          <Link href="/My-Plan"
            className="flex items-center gap-2 text-xs font-semibold text-white"
          >
            <span>Saved</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/40 px-1.5 text-[10px] font-bold text-white">
              {savedCount}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavbarPage;