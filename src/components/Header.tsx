"use client";
import { useState } from "react";
import { Menu, X, Crown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#artists", label: "Artists" },
    { href: "#music", label: "Music" },
    { href: "#videos", label: "Videos" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Crown className="h-8 w-8 text-gold-400" /> */}
            <Image
              src={"/logo.jpg"}
              width={100}
              height={100}
              alt="logo"
              className="h-10 w-10"
            />
            {/* <div className="text-white">
              <div className="font-display text-xl font-bold">
                KINGS PRODUCTIONS
              </div>
              <div className="text-xs font-light">& MANAGEMENT</div>
            </div> */}
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-gold-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <button className="gold-button text-royal-dark px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
              BOOK NOW
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-gold-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="gold-button text-royal-dark px-6 py-2 rounded-full font-bold w-fit">
                BOOK NOW
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
