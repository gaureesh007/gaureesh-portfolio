const skills = {
  "Languages": ["Python", "JavaScript", "C++", "C", "Java", "HTML", "CSS"],
  "Frameworks & Tools": ["React", "Next.js", "Tailwind CSS", "Git", "GitHub"],
  "Design": ["Graphic Design", "Digital Art", "UI Design", "Figma"],
  "Currently Learning": ["GSAP", "Three.js", "Framer Motion", "Node.js"],
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-16 py-32">

      {/* Section header */}
      <div className="flex items-center gap-4 mb-16">
        <div className="w-8 h-px bg-[#2563eb]"></div>
        <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
          Arsenal
        </span>
      </div>

      <h2
        className="text-6xl font-bold text-[#f0f4ff] mb-16 leading-tight"
        style={{ fontFamily: 'Clash Display' }}>
        What I <br />
        <span className="text-[#2563eb]">Work With</span>
      </h2>

      {/* Skills grid */}
      <div className="grid grid-cols-2 gap-16">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>

            {/* Category title */}
            <h3
              className="text-sm text-[#6b8cba] tracking-widest uppercase mb-6"
              style={{ fontFamily: 'Clash Display' }}>
              {category}
            </h3>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-[#1a2942] text-[#f0f4ff] text-sm hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}