export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-between pl-16 pr-16 relative overflow-hidden">

  {/* Background glow — artistic element */}
  <div 
    className="absolute pointer-events-none"
    style={{
      width: '600px',
      height: '600px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.05) 40%, transparent 70%)',
      top: '50%',
      left: '20%',
      transform: 'translate(-50%, -50%)',
      filter: 'blur(40px)',
    }}>
  </div>

  {/* Second smaller glow — depth */}
  <div 
    className="absolute pointer-events-none"
    style={{
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
      top: '30%',
      left: '40%',
      transform: 'translate(-50%, -50%)',
      filter: 'blur(60px)',
    }}>
  </div>
      
      {/* Left side — text content */}
      <div className="flex flex-col gap-6 z-10 max-w-2xl">
        
        {/* Greeting tag */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-[#2563eb]"></div>
          <span className="text-[#6b8cba] text-sm tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 
          className="text-8xl font-bold text-[#f0f4ff] leading-none"
          style={{ fontFamily: 'Clash Display' }}>
          Gaureesh<br />
          <span className="text-[#2563eb]">Keshari</span>
        </h1>

        {/* Role */}
        <p className="text-2xl text-[#6b8cba]"
           style={{ fontFamily: 'Clash Display' }}>
          Engineer. Entrepreneur. Artist.
        </p>

        {/* Brand statement */}
        <p className="text-lg text-[#354f73] max-w-md leading-relaxed">
          I build with logic — and design with emotion. 
          I create products that speak to minds and move hearts.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 mt-4">
          <a 
            href="#work"
            className="px-8 py-4 bg-[#2563eb] text-[#f0f4ff] text-sm font-medium hover:bg-[#3b82f6] transition-colors duration-300"
            style={{ fontFamily: 'Clash Display' }}>
            See My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border border-[#1a2942] text-[#6b8cba] text-sm font-medium hover:text-[#f0f4ff] hover:border-[#2563eb] transition-all duration-300"
            style={{ fontFamily: 'Clash Display' }}>
            Get In Touch
          </a>
        </div>

      </div>

      {/* Right side — image placeholder */}
      <div className="relative w-96 h-96 flex-shrink-0">
        <div className="w-full h-full border border-[#1a2942] flex items-center justify-center">
          <span className="text-[#354f73] text-sm">Your Photo Here</span>
        </div>
      </div>

    </section>
  )
}