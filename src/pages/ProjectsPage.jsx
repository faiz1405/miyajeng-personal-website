import PortfolioCtaLink from '../components/portfolio/PortfolioCtaLink.jsx'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

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
          SELECTED <span className="italic text-[#FF3D8A]">WORKS</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-8 max-w-[680px] rounded-2xl bg-[#FFFBEE]/85 p-4 font-sans text-2xl font-600 text-[#5A4A6A] backdrop-blur-sm z-10">
          From YouTube channels to social media campaigns, here are some of the projects I've been involved in.
        </motion.p>
      </motion.div>

      {/* Staggered Projects */}
      <div className="py-10 flex flex-col gap-32">
        
        {/* Project 01 - Double D Management */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-[#FFD93D] rounded-[48px] rotate-[1deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex flex-col lg:flex-row gap-12 rounded-[40px] bg-[#1A1020] border-4 border-[#1A1020] p-12 shadow-[16px_16px_0_0_#1A1020] overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
            
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-[80px] font-bold text-[#FFD93D] leading-none">01</span>
                  <div className="inline-flex items-center rounded-full bg-[#FF3D8A] border-2 border-[#1A1020] px-4 py-2 rotate-[-2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-white">Double D Management</span>
                  </div>
                </div>
                <h2 className="font-display text-[56px] !font-bold leading-[1.1]  mb-6  !text-[#ffd93d]">
                  Creative Lead for The Sinathrya's YouTube & Social Media
                </h2>
                <div className="font-sans text-lg font-500 text-[#C0A8E0] mb-10 space-y-4">
                  <p>
                    At Double D Management, I'm in charge of creative. I handle the creative for The Sinathrya's YouTube channel and the brand content on Darius Sinathrya and Donna Agnesia's social media channels.
                  </p>
                  <p>
                    On YouTube, I'm responsible for creating content plans, along with guidelines and scripts for daily vlogs, culinary vlogs, and the NGODE podcast. I'm also involved in the filming process for each vlog and optimize and quality-check the content before publishing.
                  </p>
                  <p>
                    For their social media channels, I'm involved in creating ideas/storylines for brand content, such as endorsements and brand ambassador content. I sometimes help create Reels for their respective branding personas.
                  </p>
                  <p>
                    I also edit several videos for Donna Agnesia's social media brands, such as "do skin official," "do style," "Omahan Kitchen" and "rendang warisan bundo."
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <a href="https://www.youtube.com/@DariusDonna/featured" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border-4 border-[#1A1020] bg-[#FFD93D] px-8 py-4 cursor-pointer shadow-[4px_4px_0_0_#1A1020] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150">
                  <span className="font-sans text-lg font-800 text-[#1A1020]">Visit YouTube →</span>
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] flex items-center justify-center relative z-10">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full max-w-[320px] aspect-[4/5]"
              >
                {/* Placeholders for Double D Management images */}
                <SwiperSlide className="rounded-[24px] border-4 border-[#1A1020] bg-[#2A1A35] flex items-center justify-center overflow-hidden">
                  <span className="text-4xl text-white font-display font-bold">Image 1</span>
                </SwiperSlide>
                <SwiperSlide className="rounded-[24px] border-4 border-[#1A1020] bg-[#3D2F50] flex items-center justify-center overflow-hidden">
                  <span className="text-4xl text-white font-display font-bold">Image 2</span>
                </SwiperSlide>
                <SwiperSlide className="rounded-[24px] border-4 border-[#1A1020] bg-[#5A4A6A] flex items-center justify-center overflow-hidden">
                  <span className="text-4xl text-white font-display font-bold">Image 3</span>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </motion.div>

        {/* Project 02 - VDVC */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-[#A855F7] rounded-[48px] rotate-[-1deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex flex-col lg:flex-row-reverse gap-12 rounded-[40px] bg-white border-4 border-[#1A1020] p-12 shadow-[16px_16px_0_0_#1A1020] overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A855F7] opacity-10 rounded-full blur-3xl"></div>
            
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-[80px] font-bold text-[#A855F7] leading-none">02</span>
                  <div className="inline-flex items-center rounded-full bg-[#1A1020] border-2 border-[#1A1020] px-4 py-2 rotate-[2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-white">VDVC</span>
                  </div>
                </div>
                <h2 className="font-display text-[56px] font-bold leading-[1.1] text-[#1A1020] mb-6">
                  Creative Writer & Host
                </h2>
                <div className="font-sans text-lg font-600 text-[#5A4A6A] mb-10 space-y-4">
                  <p>
                    As a creative writer in charge of developing creative ideas into scripts in the Muslimpedia program, Kata Ustadz, Muslim Update, Tanya Ustad podcast, Muslim Talk and as a host on the channel.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <a href="https://www.youtube.com/playlist?list=PLBBQMRL8TZK9_620PIKY1CRTFEKZ9QQUL" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border-4 border-[#1A1020] bg-[#A855F7] px-8 py-4 cursor-pointer shadow-[4px_4px_0_0_#1A1020] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150">
                  <span className="font-sans text-lg font-800 text-white">View Playlist →</span>
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] flex items-center justify-center relative z-10">
              <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
                className="w-full max-w-[320px] aspect-[4/5]"
              >
                {/* Placeholders for VDVC images */}
                <SwiperSlide className="rounded-[24px] border-4 border-[#1A1020] bg-[#F5EDFF] flex items-center justify-center overflow-hidden">
                  <span className="text-4xl text-[#1A1020] font-display font-bold">Image 1</span>
                </SwiperSlide>
                <SwiperSlide className="rounded-[24px] border-4 border-[#1A1020] bg-[#E9D5FF] flex items-center justify-center overflow-hidden">
                  <span className="text-4xl text-[#1A1020] font-display font-bold">Image 2</span>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </motion.div>

        {/* Project 03 - Goodscript */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-[#FF3D8A] rounded-[48px] rotate-[1deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex flex-col lg:flex-row gap-12 rounded-[40px] bg-[#1A1020] border-4 border-[#1A1020] p-12 shadow-[16px_16px_0_0_#1A1020] overflow-hidden">
            
            <div className="flex-1 flex flex-col justify-between z-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-[80px] font-bold text-[#FF3D8A] leading-none">03</span>
                  <div className="inline-flex items-center rounded-full bg-[#FFD93D] border-2 border-[#1A1020] px-4 py-2 rotate-[-2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-[#1A1020]">Goodscript</span>
                  </div>
                </div>
                <h2 className="font-display text-[56px] !font-bold leading-[1.1] !text-[#ffd93d] mb-6">
                  Junior Scriptwriter for "Dilema" Series
                </h2>
                <div className="font-sans text-lg font-500 text-[#C0A8E0] mb-10 space-y-4">
                  <p>
                    Develop creative ideas into a basic story, synopsis, treatment and script. This series tells a love story from a third person point of view, the Dilema is the original video series.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                <a href="https://m.vidio.com/premier/5400/dilema" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border-4 border-[#1A1020] bg-[#FF3D8A] px-8 py-4 cursor-pointer shadow-[4px_4px_0_0_#1A1020] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150">
                  <span className="font-sans text-lg font-800 text-white">Vidio Link →</span>
                </a>
                <a href="https://drive.google.com/file/d/1UmS-4qdoArPEtz0Jvjb_YjPSmpzc75Hd/view" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border-4 border-[#1A1020] bg-white px-8 py-4 cursor-pointer shadow-[4px_4px_0_0_#1A1020] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150">
                  <span className="font-sans text-lg font-800 text-[#1A1020]">Read Script →</span>
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-[40%] flex items-center justify-center relative z-10">
              <div className="w-full aspect-[4/3] rounded-[24px] border-4 border-[#1A1020] bg-[#2A1A35] flex items-center justify-center overflow-hidden rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                <span className="text-4xl text-white font-display font-bold">Poster Placeholder</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 04 & 05 - Side by Side */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Project 04 - LettrB */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-[#FFD93D] rounded-[48px] rotate-[-2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-[#1A1020] border-4 border-[#1A1020] p-10 shadow-[12px_12px_0_0_#1A1020]">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-[64px] font-bold text-[#FFD93D] leading-none">04</span>
                  <div className="inline-flex items-center rounded-full bg-[#ffd93d] px-4 py-2 rotate-[2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-black">LettrB</span>
                  </div>
                </div>
                <h2 className="font-display text-[40px] !font-bold leading-[1.1] !text-[#ffd93d] mb-6">
                  Creative for Paljaya & Satria Bela Negara
                </h2>
                <p className="font-sans text-lg font-500 text-[#C0A8E0] mb-6">
                  Make a concept and then develop it into a script, then make a moodboard or storyboard.
                </p>
                <p className="font-sans text-lg font-500 text-[#C0A8E0] mb-10">
                  I was responsible for creating the screenplay by adapting the Satria Bela Negara comic from the Ministry of Home Affairs.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 mt-8 pt-8 border-t-4 border-dashed border-[#FFD93D]">
                <div className="w-full aspect-video rounded-[16px] border-2 border-[#1A1020] bg-[#2A1A35] flex items-center justify-center overflow-hidden">
                  <span className="text-xl text-white font-display font-bold">Video Placeholder</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 05 - Meramuda */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex-1 relative group mt-0 lg:mt-20"
          >
            <div className="absolute -inset-4 bg-[#A855F7] rounded-[48px] rotate-[2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative h-full flex flex-col justify-between rounded-[40px] bg-white border-4 border-[#1A1020] p-10 shadow-[12px_12px_0_0_#1A1020]">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="font-display text-[64px] font-bold text-[#A855F7] drop-shadow-[2px_2px_0_rgba(26,16,32,1)] leading-none">05</span>
                  <div className="inline-flex items-center rounded-full bg-[#A855F7] px-4 py-2 rotate-[-2deg]">
                    <span className="font-sans text-sm font-800 uppercase tracking-widest text-white">Meramuda.com</span>
                  </div>
                </div>
                <h2 className="font-display text-[40px] font-bold leading-[1.1] text-[#1A1020] mb-6">
                  Article Content Writer
                </h2>
                <p className="font-sans text-lg font-600 text-[#5A4A6A] mb-10">
                  Create article content about film and women to publish on Meramuda.com.
                </p>
              </div>
              
              <div className="flex flex-col gap-6 mt-8 pt-8 border-t-4 border-dashed border-[#A855F7]">
                <div className="w-full aspect-[4/3] rounded-[16px] border-2 border-[#1A1020] bg-[#F5EDFF] flex items-center justify-center overflow-hidden">
                  <span className="text-xl text-[#1A1020] font-display font-bold">Article Placeholder</span>
                </div>
                <a href="https://meramuda.com/news-entertainment/film-tv-news-entertainment/kata-kata-baru-dari-dunia-perfilman-yang-masuk-kamus-oxford/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border-4 border-[#1A1020] bg-[#A855F7] px-6 py-3 cursor-pointer shadow-[4px_4px_0_0_#1A1020] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150">
                  <span className="font-sans text-base font-800 text-white">Read Article →</span>
                </a>
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
