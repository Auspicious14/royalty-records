import { Crown } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-royal-dark/95 text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Crown className="h-8 w-8 text-gold-400" />
            <div>
              <div className="font-display text-xl font-bold">KINGS PRODUCTIONS</div>
              <div className="text-sm font-light">& MANAGEMENT</div>
            </div>
          </div> */}
          <Image
            src={"/logo.jpg"}
            width={100}
            height={100}
            alt="logo"
            className="h-10 w-10"
          />

          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm mb-2">
              Where Legend Hits Are Made
            </p>
            <p className="text-white/40 text-xs">
              © 2025 Kings Productions & Management. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
