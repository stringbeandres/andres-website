import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-20">
      <h1 className="font-serif text-4xl text-[#111111] mb-6">Say Hello</h1>
      <p className="text-[#444444] text-lg mb-10">
        I'm always open to interesting conversations — about marketplace strategy, operations, or any shared interest.
      </p>
      <div className="space-y-4">
        <div>
          <Link
            href="https://www.linkedin.com/in/andres-rabellino/"
            target="_blank"
            className="text-[#1B2A4A] font-medium hover:underline underline-offset-4"
          >
            Message me on LinkedIn →
          </Link>
        </div>
      </div>
    </div>
  );
}
