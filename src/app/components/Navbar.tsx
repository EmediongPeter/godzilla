import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-zinc-900/50 border-b border-zinc-800 p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        $GODZ
      </div>
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
