"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="text-white hover:text-[#43e97b] transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#token", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-zinc-900/70 border-b border-zinc-800 p-4 flex justify-between items-center z-50">
      {/* Logo Section */}
      <Link href="/" className="text-zinc-400 hover:text-[#43e97b] transition-colors">
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
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white hover:text-[#43e97b] transition-colors"
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay and Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 md:hidden z-[9999] h-screen"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 w-64 bg-zinc-900/90 backdrop-blur-lg border-l border-[#43e97b]/20 shadow-2xl z-[9999] h-screen"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white hover:text-[#43e97b] transition-colors"
                onClick={closeMenu}
              >
                <X size={24} />
              </button>

              {/* Menu Content */}
              <div className="flex flex-col gap-6 mt-14 p-6 z-[9999] bg-zinc-900/90 border-t">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </NavLink>
                ))}
                <div className="flex items-center gap-4 mt-4">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}