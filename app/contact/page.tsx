import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-20">
      <h1 className="font-serif text-4xl text-[#111111] mb-6">Get in touch</h1>
      <p className="text-[#888888] text-lg mb-10">
        I'm always open to interesting conversations — about marketplace strategy, operations, or anything you're building.
      </p>
      <div className="space-y-4">
        <div>
          <a
            href="mailto:andres@example.com"
            className="text-[#1B2A4A] font-medium hover:underline underline-offset-4"
          >
            andres@example.com
          </a>
        </div>
        <div>
          <Link
            href="https://linkedin.com/in/"
            target="_blank"
            className="text-[#1B2A4A] font-medium hover:underline underline-offset-4"
          >
            LinkedIn →
          </Link>
        </div>
      </div>
    </div>
  );
}
