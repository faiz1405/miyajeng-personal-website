import PortfolioCtaLink from '../components/portfolio/PortfolioCtaLink.jsx'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function ProjectsPage () {
  return (
    <>
      {/* Header */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative py-20 flex flex-col items-center text-center"
      >
        <div className="absolute top-10 left-[10%] w-32 h-32 bg-[#FF3D8A] rounded-full mix-blend-overlay blur-2xl opacity-50"></div>
        <div className="absolute bottom-10 right-[10%] w-40 h-40 bg-[#FFD93D] rounded-full mix-blend-overlay blur-2xl opacity-50"></div>
        
        <motion.div variants={fadeUp} className="inline-flex w-fit items-center rounded-full bg-[#A855F7] border-2 border-[#1A1020] px-4 py-1.5 shadow-[2px_2px_0_0_#1A1020] rotate-[-2deg] mb-10 z-10">
          <span className="font-sans text-xs font-800 uppercase tracking-[0.12em] text-white">Miyajeng / Creative social</span>
        </motion.div>
        <motion.h1 variants={fadeUp} className="font-display text-[90px] sm:text-[120px] font-bold leading-[0.9] tracking-[-0.02em] text-[#1A1020] max-w-[1000px] z-10 drop-shadow-[4px_4px_0_rgba(255,217,61,1)]">
          BUILT FOR THE <span className="italic text-[#FF3D8A]">FEED</span> FIRST.
        </motion.h1>
        <motion.p variants={fadeUp} className="font-sans text-2xl font-600 text-[#5A4A6A] mt-8 max-w-[600px] z-10">
          Pause, replay, share. Work where feed energy meets solid craft.
        </motion.p>
      </motion.div>

      {/* Staggered Projects */}
      <div className="py-20 flex flex-col gap-32">
        
        {/* Project 01 - Full Width Feature */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-[#1A1020] rounded-[48px] rotate-[1deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex flex-col lg:flex-row gap-12 rounded-[40px] bg-[#FF3D8A] border-4 border-[#1A1020] p-12 shadow-[16px_16px_0_0_#1A1020] overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-[80px] font-bold text-[#1A1020] leading-none">01</span>
                  <div className="inline-flex items-center rounded-full bg-white border-2 border-[#1A1020] px-4 py-2 rotate-[-2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-[#1A1020]">Creator launch hub</span>
                  </div>
                </div>
                <h2 className="font-display text-[56px] font-bold leading-[1.1] text-white mb-6">
                  A seven-day story arc that keeps people curious, connected, and ready for launch day.
                </h2>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-4 py-2 bg-[#1A1020] text-white rounded-full font-sans text-sm font-700">Tease</span>
                  <span className="px-4 py-2 bg-[#1A1020] text-white rounded-full font-sans text-sm font-700">Build trust</span>
                  <span className="px-4 py-2 bg-[#1A1020] text-white rounded-full font-sans text-sm font-700">Launch moment</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="font-sans text-xl font-800 text-[#1A1020]">2026</span>
                <div className="flex items-center justify-center rounded-full border-4 border-[#1A1020] bg-white px-8 py-4 cursor-pointer shadow-[4px_4px_0_0_#1A1020] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150">
                  <span className="font-sans text-lg font-800 text-[#1A1020]">View Case Study →</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] aspect-[3/4] rounded-[24px] bg-[#1A1020] border-4 border-[#1A1020] overflow-hidden flex items-center justify-center relative shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] rotate-[2deg] group-hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMWExMDIwIj48L3JlY3Q+CjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIxIiBmaWxsPSIjMzMzIj48L2NpcmNsZT4KPC9zdmc+')] opacity-50"></div>
              <span className="text-[120px] relative z-10">🚀</span>
            </div>
          </div>
        </motion.div>

        {/* Project 02 & 03 - Side by Side Asymmetric */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Project 02 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1 relative group mt-0 lg:mt-20"
          >
            <div className="absolute -inset-4 bg-[#FFD93D] rounded-[48px] rotate-[-2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white border-4 border-[#1A1020] p-10 shadow-[12px_12px_0_0_#1A1020]">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-[64px] font-bold text-[#FFD93D] drop-shadow-[2px_2px_0_rgba(26,16,32,1)] leading-none">02</span>
                  <div className="inline-flex items-center rounded-full bg-[#1A1020] px-4 py-2 rotate-[2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-white">Branded short-form pack</span>
                  </div>
                </div>
                <h2 className="font-display text-[40px] font-bold leading-[1.1] text-[#1A1020] mb-6">
                  A recurring content series that made the brand feel familiar, lively, and easy to love.
                </h2>
                <p className="font-sans text-lg font-600 text-[#5A4A6A] mb-10">
                  Consistent tone · recognizable look · strong audience response
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-8 border-t-4 border-dashed border-[#FFD93D]">
                <span className="font-sans text-xl font-800 text-[#5A4A6A]">2025</span>
                <div className="flex items-center justify-center rounded-full border-4 border-[#1A1020] bg-[#FFD93D] px-6 py-3 cursor-pointer shadow-[4px_4px_0_0_#1A1020] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150">
                  <span className="font-sans text-base font-800 text-[#1A1020]">View →</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 03 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-[#A855F7] rounded-[48px] rotate-[2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-[#1A1020] border-4 border-[#1A1020] p-10 shadow-[12px_12px_0_0_#1A1020]">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-[64px] font-bold text-[#A855F7] leading-none">03</span>
                  <div className="inline-flex items-center rounded-full bg-[#A855F7] px-4 py-2 rotate-[-2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-white">Shareable filter &amp; challenge</span>
                  </div>
                </div>
                <h2 className="font-display text-[40px] font-bold leading-[1.1] text-white mb-6">
                  A playful challenge that invited people to join in, remix the idea, and spread it naturally.
                </h2>
                <p className="font-sans text-lg font-600 text-[#C0A8E0] mb-10">
                  Community participation · shareable moments · organic buzz
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-8 pt-8 border-t-4 border-dashed border-[#A855F7]">
                <span className="font-sans text-xl font-800 text-[#C0A8E0]">2024</span>
                <div className="flex items-center justify-center rounded-full border-4 border-[#1A1020] bg-white px-6 py-3 cursor-pointer shadow-[4px_4px_0_0_#A855F7] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150">
                  <span className="font-sans text-base font-800 text-[#1A1020]">View →</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom CTA - Giant Sticker Style */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="my-24 relative overflow-hidden rounded-[48px] bg-[#FFD93D] border-4 border-[#1A1020] shadow-[16px_16px_0_0_#1A1020] p-16 md:p-24 text-center flex flex-col items-center justify-center"
      >
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-[80px] rotate-[-15deg] opacity-50">📢</div>
        <div className="absolute bottom-10 right-10 text-[80px] rotate-[15deg] opacity-50">🔥</div>
        
        <div className="inline-flex items-center rounded-full bg-[#FF3D8A] border-2 border-[#1A1020] px-6 py-2 mb-8 rotate-[-3deg] shadow-[4px_4px_0_0_#1A1020]">
          <span className="font-sans text-sm font-800 uppercase tracking-widest text-white">Open for collabs</span>
        </div>
        <h2 className="font-display text-[64px] sm:text-[80px] font-bold leading-[0.9] text-[#1A1020] mb-12 max-w-[800px]">
          HAVE A LOUD IDEA? LET&apos;S OWN THE TIMELINE.
        </h2>
        <PortfolioCtaLink to="/contact" size="comfortable" className="text-2xl px-12 py-6 bg-white text-black">
          Book a call 📞
        </PortfolioCtaLink>
      </motion.div>
    </>
  )
}
