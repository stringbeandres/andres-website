import Link from "next/link";

  export default function Nav() {
    return (
      <nav className="w-full border-b border-[#E5E4E0] py-5">
        <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-serif text-xl text-[#111111] hover:text-[#1B2A4A] transition-colors">
            Andres Rabellino
          </Link>
          <div className="flex gap-8">
            <Link href="/work" className="text-sm text-[#888888] hover:text-[#111111] transition-colors">
              Work
            </Link>
            <Link href="/writing" className="text-sm text-[#888888] hover:text-[#111111] transition-colors">
              Writing
            </Link>
            <Link href="/contact" className="text-sm text-[#888888] hover:text-[#111111] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }