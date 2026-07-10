import Image from "next/image";
import Link from "next/link";
import { IMG } from "@/lib/content";

const FOOTER_LINKS = [
  { label: "Home", href: "https://www.experiencejomo.com/home" },
  { label: "About", href: "https://www.experiencejomo.com/about" },
  { label: "Programs", href: "https://www.experiencejomo.com/all-programs" },
  { label: "Blog", href: "https://www.experiencejomo.com/blog" },
  { label: "Contact", href: "https://www.experiencejomo.com/contact" },
  { label: "JOMO Hub Login", href: "https://thejomohub.com/" },
  { label: "Speaking Inquiries", href: "https://www.experiencejomo.com/speaking" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2">
        <div>
          <div className="relative h-12 w-40">
            <Image src={IMG.logoDark} alt="Experience JOMO" fill className="object-contain object-left" unoptimized />
          </div>
          <p className="mt-5 max-w-sm font-display text-xl leading-snug">
            Building more joyful lives, online and off.
          </p>
        </div>
        <nav className="md:justify-self-end">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm text-cream/80">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Experience JOMO. All rights reserved.</p>
          <p>Rebuilt as a portfolio study by Little Byte Designs.</p>
        </div>
      </div>
    </footer>
  );
}
