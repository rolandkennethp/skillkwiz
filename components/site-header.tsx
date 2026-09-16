"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Resources" },
    { href: "#", label: "Investors" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-[96px] flex items-center justify-between">
        <Link href="/" aria-label="SkillKwiz home" className="shrink-0">
          <img
            src="/images/skillkwiz-logo.svg"
            alt="SkillKwiz - How much do you know?"
            width={230}
            height={82}
            className="w-[210px] sm:w-[230px] h-[78px] object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((link) => {
            const active = link.href !== "#" && pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] lg:text-base transition-colors ${
                  active
                    ? "text-[#a34d86] font-medium"
                    : "text-[#272727] hover:text-[#69226F]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-[#272727]"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 shadow-sm">
          <div className="flex flex-col items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#272727] hover:text-[#69226F]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
