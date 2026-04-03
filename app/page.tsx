export default function Home() {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-20">
        <h1 className="font-serif text-5xl text-[#111111] leading-tight mb-10">
          I work at the intersection of strategy, operations, and building things.
        </h1>

        <div className="space-y-5 text-[#111111] text-lg leading-relaxed">
          <p>
            I'm Andres Rabellino — a strategy and operations professional with a background in marketplace businesses. I take ambiguous problems, work through them with data, get buy-in from
  leadership, and see them through cross-functionally.
          </p>
          <p>
            I also build. Workflow automations, internal tools, prototypes — I've learned enough to ship things myself and to work closely with engineering teams when the problem is bigger than what I 
  can build alone.
          </p>
          <p>
            This site is an ongoing record of that work.
          </p>
        </div>

        <div className="flex gap-8 mt-12">
          <a href="/work" className="text-[#1B2A4A] font-medium hover:underline underline-offset-4">
            Work →
          </a>
          <a href="/writing" className="text-[#1B2A4A] font-medium hover:underline underline-offset-4">
            Writing →
          </a>
        </div>
      </div>
    );
  }
