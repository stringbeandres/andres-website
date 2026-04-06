export default function Home() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-20">
      <h1 className="font-serif text-5xl text-[#111111] leading-tight mb-10">
        I work at the intersection of strategy, operations, and building things (with AI).
      </h1>

      <div className="space-y-5 text-[#111111] text-lg leading-relaxed">
        <p>
          I'm Andres Rabellino, a strategy & ops professional focused on marketplace businesses. Thank you for stopping by.
        </p>
        <p>
          My journey starts at NYU, where I wrote a senior-year thesis in political science. I discovered there what it was like to tackle truly ambiguous problems. <em>Where lifting one stone exposes twelve more, a cool-head and strategic mindset go a long way in choosing the best path.</em>
        </p>
        <p>
          With this experience and belief as an anchor, I made steps through various professional (and personal) roles — consultant at Accenture, builder of my mom's blogging business, organizer of my friends' trips, and senior director of Cove's marketplace portfolio in 2025.
        </p>
        <p>
          Given the current zeitgeist around AI, I'm working on applying it tangibly in my professional and personal life, plus writing about it here to keep myself accountable.
        </p>
        <p>
          Feel free to follow along and take as much inspiration as you'd like 👣. Thank you again.
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
