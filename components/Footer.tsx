import Link from "next/link";

  export default function Footer() {
    return (
      <footer className="w-full border-t border-[#E5E4E0] py-8 mt-24">
        <div className="max-w-[720px] mx-auto px-6 flex justify-between items-center">
          <span className="text-sm text-[#888888]">
            © {new Date().getFullYear()} Andres Rabellino
          </span>
          <Link
            href="https://linkedin.com/in/"
            target="_blank"
            className="text-sm text-[#888888] hover:text-[#111111] transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    );
  }
