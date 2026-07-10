"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV, IMG } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 shadow-[0_1px_0_rgba(31,27,22,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Link href="/schools" className="relative block h-9 w-28">
          <Image src={IMG.logoLight} alt="Experience JOMO" fill className="object-contain object-left" unoptimized priority />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-clay"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#discoverycall" className="btn-primary">Get Started</a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-ink/80"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a href="#discoverycall" onClick={() => setOpen(false)} className="btn-primary w-full">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
