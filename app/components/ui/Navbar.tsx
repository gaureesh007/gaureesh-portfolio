export default function Navbar() {
  return (
    <>
  <nav 
    className="fixed top-0 left-0 w-full z-50 px-16 py-6 flex items-center justify-between backdrop-blur-md"
    style={{ backgroundColor: 'rgba(2, 4, 9, 0.75)' }}>
    
    {/* Logo */}
    <div style={{ fontFamily: 'Clash Display', fontWeight: 700, fontSize: '1.5rem' }}
         className="text-[#f0f4ff]">
      GK
    </div>

    {/* Nav Links */}
    <div className="flex items-center gap-8">
      <a href="#about" className="text-[#6b8cba] hover:text-[#f0f4ff] text-sm transition-colors duration-300">About</a>
      <a href="#work" className="text-[#6b8cba] hover:text-[#f0f4ff] text-sm transition-colors duration-300">Work</a>
      <a href="#skills" className="text-[#6b8cba] hover:text-[#f0f4ff] text-sm transition-colors duration-300">Skills</a>
      <a href="#contact" className="text-[#6b8cba] hover:text-[#f0f4ff] text-sm transition-colors duration-300">Contact</a>
    </div>

  </nav>

  {/* Smooth gradient fade — sits below navbar */}
  <div 
    className="fixed top-0 left-0 w-full z-40 pointer-events-none"
    style={{ 
      height: '160px',
      background: 'linear-gradient(to bottom, rgba(2,4,9,0.95) 0%, rgba(2,4,9,0.7) 50%, transparent 100%)'
    }}>
  </div>
</>
    
  )
}