export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-16 py-6 flex items-center justify-between">
      
      {/* Logo */}
      <div style={{ fontFamily: 'Clash Display', fontWeight: 700, fontSize: '1.5rem' }}
           className="text-[#f0f4ff]">
        GK
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <a href="#about" className="text-[#6b8cba] hover:text-[#f0f4ff] text-sm transition-colors duration-300">
          About
        </a>
        <a href="#work" className="text-[#6b8cba] hover:text-[#f0f4ff] text-sm transition-colors duration-300">
          Work
        </a>
        <a href="#skills" className="text-[#6b8cba] hover:text-[#f0f4ff] text-sm transition-colors duration-300">
          Skills
        </a>
        <a href="#contact" className="text-[#6b8cba] hover:text-[#f0f4ff] text-sm transition-colors duration-300">
          Contact
        </a>
      </div>

    </nav>
  )
}