import PortfolioCtaLink from '../components/portfolio/PortfolioCtaLink.jsx'
import PortfolioDarkCtaLink from '../components/portfolio/PortfolioDarkCtaLink.jsx'
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

export default function HomePage () {
  return (
    <>
      {/* Hero Scrapbook */}
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center pt-10 pb-20">
        {/* Floating Stickers */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-10 left-0 animate-[float_6s_ease-in-out_infinite] rotate-[-6deg] rounded-full bg-[#FF3D8A] border-2 border-[#1A1020] px-6 py-2 shadow-[4px_4px_0_0_#1A1020] z-10"
        >
          <span className="font-sans text-sm font-800 uppercase tracking-widest text-white">Creative Social</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute top-32 right-10 animate-[float_7s_ease-in-out_infinite_reverse] rotate-[4deg] rounded-2xl bg-[#FFD93D] border-2 border-[#1A1020] px-5 py-3 shadow-[4px_4px_0_0_#1A1020] z-10"
        >
          <span className="font-sans text-base font-800 text-[#1A1020]">Jakarta, ID 📍</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-20 left-20 animate-[float_5s_ease-in-out_infinite] rotate-[8deg] rounded-full bg-[#A855F7] border-2 border-[#1A1020] w-20 h-20 flex items-center justify-center shadow-[4px_4px_0_0_#1A1020] z-10"
        >
          <span className="font-display text-4xl text-white">✨</span>
        </motion.div>

        {/* Main Hero Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 text-center max-w-[900px] flex flex-col items-center gap-8"
        >
          <motion.h1 variants={fadeUp} className="font-display text-[110px] sm:text-[130px] font-bold leading-[0.9] tracking-[-0.02em] text-[#1A1020] drop-shadow-[4px_4px_0_rgba(255,61,138,1)]">
            FEEDS THAT <br/> FEEL <span className="text-[#FFD93D] italic drop-shadow-[4px_4px_0_rgba(26,16,32,1)]">ALIVE.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="font-sans text-2xl font-600 leading-relaxed text-[#3D2F50] max-w-[600px] bg-[#FFFBEE]/80 backdrop-blur-sm p-4 rounded-xl">
            Miyajeng creates social stories people feel: warm ideas, bold style, and posting rhythms that keep communities coming back.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <PortfolioDarkCtaLink to="/projects">See my work</PortfolioDarkCtaLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-[#1A1020] border-y-4 border-[#FF3D8A] py-4 overflow-hidden rotate-[-1deg] z-30">
        <div className="flex whitespace-nowrap animate-[marquee_15s_linear_infinite]">
          {/* Duplicate content for seamless loop */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="font-display text-3xl font-bold text-[#FFD93D] uppercase">Reels</span>
              <span className="text-2xl text-white">✦</span>
              <span className="font-display text-3xl font-bold text-[#FF6B6B] uppercase">TikTok</span>
              <span className="text-2xl text-white">✦</span>
              <span className="font-display text-3xl font-bold text-[#A855F7] uppercase">Shorts</span>
              <span className="text-2xl text-white">✦</span>
              <span className="font-display text-3xl font-bold text-white uppercase">Campaigns</span>
              <span className="text-2xl text-white">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scattered Skills Section */}
      <div className="relative py-32 flex flex-col items-center overflow-hidden px-4 sm:px-0">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="font-display text-[48px] sm:text-[64px] font-bold text-[#1A1020] mb-12 sm:mb-24 text-center"
        >
          The <span className="text-[#FF3D8A] underline decoration-8 underline-offset-8">Recipe</span>
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0"
        >
          {/* Skill 1 */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
            className="relative md:absolute w-full max-w-[340px] md:top-0 md:left-[5%] lg:left-[10%] rounded-[32px] bg-[#FFF0F7] border-4 border-[#1A1020] shadow-[8px_8px_0_0_#1A1020] p-8 md:rotate-[-3deg] transition-all duration-300 z-20"
          >
            <div className="w-12 h-12 rounded-full bg-[#FF3D8A] border-2 border-[#1A1020] mb-4 flex items-center justify-center text-white font-bold text-xl">1</div>
            <h3 className="font-display text-3xl font-bold text-[#1A1020] mb-2">Social Craft</h3>
            <p className="font-sans text-lg font-600 text-[#5A4A6A]">Hooks, cuts, color grade, and pacing that stops the scroll.</p>
          </motion.div>

          {/* Skill 2 */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
            className="relative md:absolute w-full max-w-[340px] md:top-[80px] md:right-[5%] lg:right-[10%] rounded-[32px] bg-[#FFFBE0] border-4 border-[#1A1020] shadow-[8px_8px_0_0_#1A1020] p-8 md:rotate-[4deg] transition-all duration-300 z-10"
          >
            <div className="w-12 h-12 rounded-full bg-[#FFD93D] border-2 border-[#1A1020] mb-4 flex items-center justify-center text-[#1A1020] font-bold text-xl">2</div>
            <h3 className="font-display text-3xl font-bold text-[#1A1020] mb-2">Cadence</h3>
            <p className="font-sans text-lg font-600 text-[#5A4A6A]">Series, drops, and live moments that build real communities.</p>
          </motion.div>

          {/* Skill 3 */}
          <motion.div 
            variants={fadeUp}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
            className="relative md:absolute w-full max-w-[360px] md:top-[220px] md:left-[50%] md:-translate-x-[50%] rounded-[32px] bg-[#F5EDFF] border-4 border-[#1A1020] shadow-[8px_8px_0_0_#1A1020] p-8 md:rotate-[-1deg] transition-all duration-300 z-30"
          >
            <div className="w-12 h-12 rounded-full bg-[#A855F7] border-2 border-[#1A1020] mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
            <h3 className="font-display text-3xl font-bold text-[#1A1020] mb-2">Aesthetic</h3>
            <p className="font-sans text-lg font-600 text-[#5A4A6A]">Bold typography, vibrant palettes, and motion that serves the idea.</p>
          </motion.div>
          
          {/* Invisible spacer to give height to the absolute container on desktop */}
          <div className="hidden md:block w-full h-[500px]"></div>
        </motion.div>
      </div>

      {/* Staggered Selected Work */}
      <div className="py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-10"
        >
          <h2 className="font-display text-[56px] font-bold leading-[0.9] text-[#1A1020] md:text-[72px]">
            Selected<br/>Work
          </h2>
          <p className="max-w-full rounded-2xl border-2 border-[#1A1020] bg-white px-5 py-4 font-sans text-lg font-600 leading-relaxed text-[#1A1020] shadow-[4px_4px_0_0_#1A1020] md:max-w-[min(100%,400px)] md:text-right">
            Brand moments and content series I produce—launches, drops, and stories with one clear voice.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {/* Project 1 - Left Aligned */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative w-full md:w-[85%] self-start group"
          >
            <div className="absolute -inset-2 bg-[#FF3D8A] rounded-[40px] rotate-[2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex flex-col md:flex-row gap-8 rounded-[32px] bg-[#1A1020] border-4 border-[#1A1020] p-6 md:p-10 shadow-[12px_12px_0_0_#1A1020]">
              <div className="flex-1 flex flex-col justify-between gap-8">
                <div>
                  <div className="inline-block rounded-full bg-[#FF3D8A] border-2 border-[#1A1020] px-4 py-1.5 mb-6 rotate-[-2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-white">Launch Week</span>
                  </div>
                  <h3 className="font-display text-[32px] md:text-[48px] font-bold leading-tight text-white mb-4">
                    Seven-day teaser arc for a creator drop.
                  </h3>
                  <p className="font-sans text-lg md:text-xl font-500 text-[#C0A8E0]">
                    A launch story told day by day: teasing curiosity, building emotion, and ending with a moment everyone wants to share.
                  </p>
                </div>
                <div className="font-sans text-lg font-800 text-[#FFD93D] cursor-pointer hover:underline">→ View Case Study</div>
              </div>
              <div className="w-full md:w-[40%] aspect-square rounded-[20px] bg-[#2A1A35] border-2 border-[#1A1020] overflow-hidden flex items-center justify-center">
                 <span className="text-6xl">🚀</span>
              </div>
            </div>
          </motion.div>

          {/* Project 2 - Right Aligned */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative w-full md:w-[85%] self-end group"
          >
            <div className="absolute -inset-2 bg-[#FFD93D] rounded-[40px] rotate-[-2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex flex-col md:flex-row-reverse gap-8 rounded-[32px] bg-white border-4 border-[#1A1020] p-6 md:p-10 shadow-[12px_12px_0_0_#1A1020]">
              <div className="flex-1 flex flex-col justify-between gap-8">
                <div>
                  <div className="inline-block rounded-full bg-[#FFD93D] border-2 border-[#1A1020] px-4 py-1.5 mb-6 rotate-[2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-[#1A1020]">Social Series</span>
                  </div>
                  <h3 className="font-display text-[32px] md:text-[48px] font-bold leading-tight text-[#1A1020] mb-4">
                    Motion-led shorts and carousels.
                  </h3>
                  <p className="font-sans text-lg md:text-xl font-500 text-[#5A4A6A]">
                    One consistent voice across every post, so the audience instantly recognizes the brand and stays with the story.
                  </p>
                </div>
                <div className="font-sans text-lg font-800 text-[#FF3D8A] cursor-pointer hover:underline">→ View Case Study</div>
              </div>
              <div className="w-full md:w-[40%] aspect-square rounded-[20px] bg-[#FFF0F7] border-2 border-[#1A1020] overflow-hidden flex items-center justify-center">
                 <span className="text-6xl">📱</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Giant CTA */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="relative mt-20 mb-10 overflow-hidden rounded-[40px] bg-[#A855F7] border-4 border-[#1A1020] shadow-[16px_16px_0_0_#1A1020] p-10 md:p-16 text-center flex flex-col items-center justify-center"
      >
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD93D] rounded-full mix-blend-overlay blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FF3D8A] rounded-full mix-blend-overlay blur-xl"></div>
        
        <h2 className="relative z-10 font-display text-[64px] sm:text-[80px] font-bold leading-[0.9] text-white mb-8 drop-shadow-[4px_4px_0_rgba(26,16,32,1)]">
          LET&apos;S MAKE <br/> SOME NOISE.
        </h2>
        <p className="relative z-10 font-sans text-2xl font-600 text-[#F5EDFF] mb-10 max-w-[600px]">
          Need a month of content that feels like one sharp campaign?
        </p>
        <div className="relative z-10">
          <PortfolioCtaLink to="/contact" size="comfortable" className="text-xl px-10 py-5 text-white">
            Say hello →
          </PortfolioCtaLink>
        </div>
      </motion.div>
    </>
  )
}
