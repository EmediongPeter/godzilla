import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";

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

      <div className="flex items-center gap-6">
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

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 ml-4">
          <a
            href="https://x.com/godzonsol?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#43e97b] transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://t.me/GodzOnSol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#43e97b] transition-colors"
          >
            <Send size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
} // import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full backdrop-blur-md bg-zinc-900/50 border-b border-zinc-800 p-4 flex justify-between items-center z-50">
//       <Link
//         href="/"
//         className="text-zinc-400 hover:text-[#43e97b] transition-colors"
//       >
//         <div className="flex items-center gap-2 cursor-pointer">
//           <Image
//             src="/godz_transparent.png"
//             alt="Baby Godzilla Logo"
//             width={40}
//             height={40}
//             className="h-10 w-10"
//           />
//           <span className="text-2xl font-bold bg-gradient-to-r from-[#43e97b] to-[#38f9d7] bg-clip-text text-transparent">
//             $GODZ
//           </span>
//         </div>
//       </Link>
//       <div className="flex gap-6">
//         <Link
//           href="#about"
//           className="text-white hover:text-primary transition"
//         >
//           About
//         </Link>
//         <Link
//           href="#token"
//           className="text-white hover:text-primary transition"
//         >
//           Tokenomics
//         </Link>
//         <Link
//           href="#roadmap"
//           className="text-white hover:text-primary transition"
//         >
//           Roadmap
//         </Link>
//       </div>
//     </nav>
//   );
// }
