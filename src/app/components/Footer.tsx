import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa"; // Import icons

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden border-t border-[#43e97b]/20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.15)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-scale" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,233,123,0.1)_0%,rgba(0,0,0,0.95)_100%)] animate-gradient-rotate" />
      </div>

      {/* Light noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/noise.png')] mix-blend-overlay" />

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
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
            <p className="text-zinc-400 text-sm">
              The cutest Baby Godzilla memecoin on Solana. Fueled by memes, powered by the community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#43e97b]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-to-buy"
                  className="text-zinc-400 hover:text-[#43e97b] transition-colors"
                >
                  How to Buy
                </Link>
              </li>
              <li>
                <Link
                  href="/staking"
                  className="text-zinc-400 hover:text-[#43e97b] transition-colors"
                >
                  Staking
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="text-zinc-400 hover:text-[#43e97b] transition-colors"
                >
                  Governance
                </Link>
              </li>
              <li>
                <Link
                  href="/merch"
                  className="text-zinc-400 hover:text-[#43e97b] transition-colors"
                >
                  Exclusive Merch
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#43e97b]">Community</h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com/godzonsol?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#43e97b] transition-colors"
              >
                <FaTwitter className="h-6 w-6" /> {/* Twitter icon */}
              </Link>
              <Link
                href="https://t.me/GodzOnSol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#43e97b] transition-colors"
              >
                <FaTelegramPlane className="h-6 w-6" /> {/* Telegram icon */}
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#43e97b]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-400 hover:text-[#43e97b] transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-400 hover:text-[#43e97b] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-[#43e97b]/20 mt-8 pt-8 text-center">
          <p className="text-zinc-400 text-sm">
            &copy; {new Date().getFullYear()} Baby Godzilla ($GODZ). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}