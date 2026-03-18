export default function Ambitions() {
  return (
    <section id="ambitions" className="min-h-screen px-16 py-32 flex flex-col justify-center">

      {/* Section header */}
      <div className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px bg-[#2563eb]"></div>
        <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
          Vision
        </span>
      </div>

      {/* Big statement */}
      <h2
        className="text-7xl font-bold text-[#f0f4ff] max-w-4xl leading-tight mb-12"
        style={{ fontFamily: 'Clash Display' }}>
        I don't want to just work in tech.
        <br />
        <span className="text-[#2563eb]">I want to shape it.</span>
      </h2>

      {/* Vision paragraphs */}
      <div className="grid grid-cols-3 gap-12 max-w-5xl">

        <div className="border-t border-[#1a2942] pt-8">
          <h3
            className="text-lg font-bold text-[#f0f4ff] mb-4"
            style={{ fontFamily: 'Clash Display' }}>
            Build AI Systems
          </h3>
          <p className="text-[#6b8cba] text-sm leading-relaxed">
            I want to build intelligent systems that don't just process data — they understand context, feel human, and solve real problems.
          </p>
        </div>

        <div className="border-t border-[#1a2942] pt-8">
          <h3
            className="text-lg font-bold text-[#f0f4ff] mb-4"
            style={{ fontFamily: 'Clash Display' }}>
            Start Something
          </h3>
          <p className="text-[#6b8cba] text-sm leading-relaxed">
            Entrepreneurship isn't a career path for me — it's a mindset. I want to build products that create real value and reach real people.
          </p>
        </div>

        <div className="border-t border-[#1a2942] pt-8">
          <h3
            className="text-lg font-bold text-[#f0f4ff] mb-4"
            style={{ fontFamily: 'Clash Display' }}>
            Create & Inspire
          </h3>
          <p className="text-[#6b8cba] text-sm leading-relaxed">
            Art and technology are not opposites. I want to prove that the most powerful products are the ones that move you — technically and emotionally.
          </p>
        </div>

      </div>

    </section>
  )
}