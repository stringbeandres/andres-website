import Link from "next/link";

  export default function Nav() {
    return (
      <nav className="w-full border-b border-[#E5E4E0] py-5">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <Link href="/" className="font-serif text-xl text-[#111111] hover:text-[#1B2A4A] transition-colors">
            Andres Rabellino
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/work" className="text-sm text-[#222222] hover:text-[#111111] transition-colors">
              CV
            </Link>
            <Link href="/writing" className="text-sm text-[#222222] hover:text-[#111111] transition-colors">
              Writing
            </Link>
            <Link href="/contact" className="text-sm text-[#222222] hover:text-[#111111] transition-colors">
              Contact
            </Link>
            <Link
              href="/geogame"
              className="bg-[#22C55E] text-[#111111] px-3 py-1 text-sm rounded-full hover:bg-[#16a34a] transition-colors"
            >
              🌎 GeoGame
            </Link>
          </div>
        </div>
      </nav>
    );
  }