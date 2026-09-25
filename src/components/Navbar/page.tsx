"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";
import Logo from "@/assets/logo.png"

export default function Navbar() {
  const pathname = usePathname();

  const { planCount, savedCount } = useFitLog();

  return (
    <header className="border-b border-gray-700 bg-[#0C0D10]">

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 container">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center">
            <Image src={Logo} alt="Fitlog Logo" />
          </div>

          <span className="text-sm font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <Link href="/" className={`rounded-full px-4 py-2 text-xs font-semibold transition ${pathname === "/"
            ? "bg-[#1A2312] text-[#C2F800]"
            : "text-white/70 hover:text-white"
            }`}
          > Workouts
          </Link>

          <Link
            href="/my-plan" className={`rounded-full px-4 py-2 text-xs font-semibold transition ${pathname === "/my-plan"
              ? "bg-[#1A2312] text-[#C2F800]"
              : "text-white/70 hover:text-white"
              }`}
          > My Plan
          </Link>
        </div>
        
        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Plan */}
          <Link href="/my-plan" className="flex items-center gap-2 text-xs font-semibold text-white">
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-[10px] font-bold text-black">
              {planCount}
            </span>
          </Link>

          {/* Saved */}
          <Link href="/my-plan" className="flex items-center gap-2 text-xs font-semibold text-white">
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