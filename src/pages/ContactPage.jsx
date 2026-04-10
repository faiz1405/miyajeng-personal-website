import ContactForm from '../components/contact/ContactForm.jsx'
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

export default function ContactPage () {
  return (
    <>
      <div className="relative py-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side - Giant Typography & Info */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="min-w-0 flex-1 shrink sticky top-20"
        >
          <motion.div variants={fadeUp} className="inline-flex w-fit items-center rounded-full bg-[#FF3D8A] border-2 border-[#1A1020] px-4 py-1.5 shadow-[2px_2px_0_0_#1A1020] rotate-[-3deg] mb-12">
            <span className="font-sans text-xs font-800 uppercase tracking-[0.12em] text-white">Miyajeng — open inbox</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-display text-[90px] sm:text-[120px] font-bold leading-[0.85] tracking-[-0.02em] text-[#1A1020] mb-12 drop-shadow-[4px_4px_0_rgba(255,217,61,1)]">
            LET&apos;S <br/> TALK <span className="italic text-[#A855F7] drop-shadow-[4px_4px_0_rgba(26,16,32,1)]">DROPS.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="font-sans text-2xl font-600 leading-relaxed text-[#3D2F50] max-w-[500px] mb-16">
            If you want social content with a clear voice and real emotional pull, I can help shape the story from first teaser to final post.
          </motion.p>
          
          {/* Contact Details Grid */}
          <motion.div variants={staggerContainer} className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2">
            <motion.div variants={fadeUp} className="min-w-0 max-w-full overflow-hidden rounded-[24px] border-4 border-[#1A1020] bg-white p-6 shadow-[6px_6px_0_0_#1A1020] transition-transform duration-300 rotate-[1deg] hover:rotate-0">
              <div className="mb-2 font-sans text-xs font-800 uppercase tracking-widest text-[#FF3D8A]">Direct</div>
              <div className="font-display text-xl font-bold leading-snug break-all text-[#1A1020] [overflow-wrap:anywhere]">
                miyajengsuyitno@gmail.com
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="min-w-0 max-w-full overflow-hidden bg-[#FFF0F7] border-4 border-[#1A1020] rounded-[24px] p-6 shadow-[6px_6px_0_0_#1A1020] rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="font-sans text-xs font-800 uppercase tracking-widest text-[#A855F7] mb-2">Social</div>
              <div className="font-sans text-base font-700 text-[#1A1020] leading-snug">
                Instagram · TikTok<br/>YouTube · Threads
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="min-w-0 max-w-full overflow-hidden bg-[#FFD93D] border-4 border-[#1A1020] rounded-[24px] p-6 shadow-[6px_6px_0_0_#1A1020] rotate-[2deg] hover:rotate-0 transition-transform duration-300">
              <div className="font-sans text-xs font-800 uppercase tracking-widest text-[#6A5200] mb-2">Availability</div>
              <div className="font-display text-xl font-bold text-[#1A1020]">Brand deals, series &amp; campaign months</div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="min-w-0 max-w-full overflow-hidden bg-[#1A1020] border-4 border-[#1A1020] rounded-[24px] p-6 shadow-[6px_6px_0_0_#FF3D8A] rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
              <div className="font-sans text-xs font-800 uppercase tracking-widest text-[#C0A8E0] mb-2">Response Time</div>
              <div className="font-display text-xl font-bold text-white">Within 24h ⚡</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="min-w-0 flex-1 w-full relative"
        >
          {/* Decorative Blob behind form */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FFD93D] rounded-full blur-[60px] opacity-60 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#A855F7] rounded-full blur-[80px] opacity-40 -z-10"></div>
          
          <div className="relative bg-white border-4 border-[#1A1020] rounded-[40px] p-8 sm:p-12 shadow-[16px_16px_0_0_#1A1020] z-10">
            <div className="absolute -top-6 -right-6 bg-[#FF3D8A] border-4 border-[#1A1020] rounded-full w-20 h-20 flex items-center justify-center shadow-[6px_6px_0_0_#1A1020] rotate-[12deg] z-20">
              <span className="text-3xl">💌</span>
            </div>
            
            <h2 className="font-display text-[40px] font-bold text-[#1A1020] mb-8">
              Drop a message.
            </h2>
            
            <ContactForm />
          </div>
        </motion.div>
      </div>

      {/* Meta Strip (Rate / Timezone / Preferred) — disembunyikan sementara, tone berbeda dari sisa halaman
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="my-24 bg-[#1A1020] border-y-8 border-[#FF3D8A] py-12 px-10 -mx-[72px] relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1 text-center sm:text-left">
          <div className="font-sans text-sm font-800 uppercase tracking-widest text-[#FF3D8A] mb-2">Rate</div>
          <div className="font-display text-3xl font-bold text-white">Custom per scope</div>
        </div>
        
        <div className="hidden sm:block w-1 h-16 bg-[#FF3D8A] rotate-[15deg]"></div>
        
        <div className="flex-1 text-center">
          <div className="font-sans text-sm font-800 uppercase tracking-widest text-[#FFD93D] mb-2">Timezone</div>
          <div className="font-display text-3xl font-bold text-white">GMT+7 <span className="text-[#A0A0C0] text-xl">(remote-friendly)</span></div>
        </div>
        
        <div className="hidden sm:block w-1 h-16 bg-[#FFD93D] rotate-[-15deg]"></div>
        
        <div className="flex-1 text-center sm:text-right">
          <div className="font-sans text-sm font-800 uppercase tracking-widest text-[#A855F7] mb-2">Preferred</div>
          <div className="font-display text-3xl font-bold text-white">Bold brands &amp; creator teams</div>
        </div>
      </motion.div>
      */}
    </>
  )
}
