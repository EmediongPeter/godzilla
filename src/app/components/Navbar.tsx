import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-zinc-900/50 border-b border-zinc-800 p-4 flex justify-between items-center z-50">
      <Link
        href="/"
        className="text-zinc-400 hover:text-[#43e97b] transition-colors"
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/godz_transparent.png"
            alt="Baby Godzilla Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent">
            $GODZ
          </span>
        </div>
      </Link>
      <div className="flex gap-6">
        <Link
          href="#about"
          className="text-white hover:text-primary transition"
        >
          About
        </Link>
        <Link
          href="#token"
          className="text-white hover:text-primary transition"
        >
          Tokenomics
        </Link>
        <Link
          href="#roadmap"
          className="text-white hover:text-primary transition"
        >
          Roadmap
        </Link>
      </div>
    </nav>
  );
}
