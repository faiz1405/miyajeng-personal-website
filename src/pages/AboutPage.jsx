import { useMemo } from 'react'
import PortfolioCtaLink from '../components/portfolio/PortfolioCtaLink.jsx'
import TechOutlinePill from '../components/portfolio/TechOutlinePill.jsx'
import { motion, useReducedMotion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1]

function useAboutMotionVariants () {
  const reduced = useReducedMotion()

  return useMemo(() => {
    const dur = reduced ? 0.01 : 0.55
    const durShort = reduced ? 0.01 : 0.45
    const y = reduced ? 0 : 36
    const x = reduced ? 0 : 28

    const fadeUp = {
      hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : y },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: dur, ease: easeOut }
      }
    }

    const fadeLeft = {
      hidden: { opacity: reduced ? 1 : 0, x: reduced ? 0 : -x },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: dur, ease: easeOut }
      }
    }

    const fadeRight = {
      hidden: { opacity: reduced ? 1 : 0, x: reduced ? 0 : x },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: dur, ease: easeOut }
      }
    }

    const scaleIn = {
      hidden: { opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.96 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: durShort, ease: easeOut }
      }
    }

    const staggerContainer = {
      hidden: { opacity: reduced ? 1 : 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: reduced ? 0 : 0.12, delayChildren: reduced ? 0 : 0.05 }
      }
    }

    const storyCard = {
      hidden: { opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.96 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: reduced ? 0.01 : 0.45,
          ease: easeOut,
          staggerChildren: reduced ? 0 : 0.16,
          delayChildren: reduced ? 0 : 0.05
        }
      }
    }

    return { reduced, fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, storyCard }
  }, [reduced])
}

export default function AboutPage () {
  const { reduced, fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, storyCard } =
    useAboutMotionVariants()

  return (
    <>
      <div className="relative py-20">
        {/* Editorial Hero */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col md:flex-row gap-16 items-start justify-between"
        >
          <motion.div variants={staggerContainer} className="relative z-20 flex-1">
            <motion.div variants={fadeUp} className="mb-10 inline-flex w-fit rotate-[-2deg] items-center rounded-full border-2 border-[#1A1020] bg-[#FFD93D] px-4 py-1.5 shadow-[2px_2px_0_0_#1A1020]">
              <span className="font-sans text-xs font-800 uppercase tracking-[0.12em] text-[#1A1020]">I am / Creative social</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="mb-12 font-display text-[86px] font-bold leading-[0.9] tracking-[-0.02em] text-[#1A1020] sm:text-[100px]">
              NOT NOISE. <br/> A POINT OF VIEW.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="relative z-20 max-w-[600px] rounded-[32px] border-4 border-[#1A1020] bg-white p-8 font-sans text-2xl font-600 leading-relaxed text-[#3D2F50] shadow-[8px_8px_0_0_#1A1020]">
              I am all in on social that refuses filler: every clip has to justify itself in the first three seconds. Motion locked to the idea, visuals you recognize on repeat, and a cadence from teaser to launch that still sounds like a person, not a playbook.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            className="relative z-10 mt-20 flex w-full flex-col gap-8 md:w-[400px]"
          >
            <motion.div variants={scaleIn} className="w-full">
              <motion.div
                className="aspect-[4/5] w-full overflow-hidden rounded-[40px] border-4 border-[#1A1020] bg-[#FFFBEE] shadow-[12px_12px_0_0_#1A1020] rotate-[3deg]"
                animate={
                  reduced
                    ? undefined
                    : { y: [0, -10, 0], rotate: [3, 4, 3] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <img
                  src="/me.jpg"
                  alt="Portrait — creative social"
                  className="h-full w-full object-cover object-center"
                  width={800}
                  height={1000}
                  decoding="async"
                  fetchPriority="high"
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="w-fit self-end rounded-full border-4 border-[#1A1020] bg-[#A855F7] p-6 shadow-[6px_6px_0_0_#1A1020] rotate-[-4deg]"
              whileHover={reduced ? undefined : { rotate: -2, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <span className="font-display text-2xl font-bold text-white">Jakarta, ID</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Story Section — scale-in card + column slide */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={storyCard}
          className="relative mb-32 mt-40 overflow-hidden rounded-[40px] border-4 border-[#1A1020] bg-white p-8 shadow-[10px_10px_0_0_#1A1020] md:p-12 lg:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-[#FFD93D]/35 blur-[70px]" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-[320px] w-[320px] rounded-full bg-[#FF3D8A]/25 blur-[90px]" aria-hidden />

          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
            <motion.div variants={fadeLeft} className="md:col-span-5 md:col-start-2">
              <h2 className="mb-8 font-display text-[64px] font-bold leading-tight tracking-[-0.02em] text-[#1A1020]">
                From scrappy edits to campaign months.
              </h2>
              <motion.div
                className="inline-flex items-center gap-4 rounded-full border-2 border-[#1A1020] bg-[#1A1020] px-6 py-3 text-white shadow-[4px_4px_0_0_#FF3D8A]"
                whileHover={reduced ? undefined : { y: -3, boxShadow: '6px 8px 0 0 #FF3D8A' }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
              >
                <span className="font-sans text-sm font-800 uppercase tracking-widest">Always Iterating</span>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeRight} className="md:col-span-5 md:col-start-8">
              <p className="mb-8 border-l-4 border-[#FF3D8A] pl-6 font-sans text-xl font-600 leading-relaxed text-[#1A1020]">
                Started from simple daily posts, then grew into full campaign storytelling with a clear voice and strong point of view.
              </p>
              <p className="font-sans text-xl font-500 leading-relaxed text-[#2D2438]">
                Today I help brands and creators shape launch stories people remember. I care about hook, pacing, emotional tone, and a visual identity you can recognize in one frame.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Values - Asymmetric List */}
        <div className="py-20">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="font-display text-[80px] font-bold text-[#1A1020] mb-20 text-center"
          >
            The <span className="text-[#A855F7] italic">Values</span>
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-16 max-w-[800px] mx-auto"
          >
            {/* Value 1 */}
            <motion.div variants={fadeUp} className="relative flex items-center gap-8 group">
              <div className="text-[120px] font-display font-bold text-[#FFD93D] drop-shadow-[4px_4px_0_rgba(26,16,32,1)] group-hover:scale-110 transition-transform duration-300">1</div>
              <div className="flex-1 bg-white border-4 border-[#1A1020] rounded-[32px] p-8 shadow-[8px_8px_0_0_#1A1020] rotate-[-1deg] group-hover:rotate-0 transition-transform duration-300">
                <h3 className="font-display text-4xl font-bold text-[#1A1020] mb-2">Hook before polish</h3>
                <p className="font-sans text-lg font-600 text-[#5A4A6A]">If they scroll past it in 3 seconds, the polish doesn't matter.</p>
              </div>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div variants={fadeUp} className="relative flex items-center gap-8 flex-row-reverse group">
              <div className="text-[120px] font-display font-bold text-[#FF3D8A] drop-shadow-[4px_4px_0_rgba(26,16,32,1)] group-hover:scale-110 transition-transform duration-300">2</div>
              <div className="flex-1 bg-[#FFF0F7] border-4 border-[#1A1020] rounded-[32px] p-8 shadow-[8px_8px_0_0_#1A1020] rotate-[2deg] group-hover:rotate-0 transition-transform duration-300 text-right">
                <h3 className="font-display text-4xl font-bold text-[#1A1020] mb-2">Captions that read clean</h3>
                <p className="font-sans text-lg font-600 text-[#5A4A6A]">Accessible by default. Typography that adds to the story, not distracts.</p>
              </div>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div variants={fadeUp} className="relative flex items-center gap-8 group">
              <div className="text-[120px] font-display font-bold text-[#A855F7] drop-shadow-[4px_4px_0_rgba(26,16,32,1)] group-hover:scale-110 transition-transform duration-300">3</div>
              <div className="flex-1 bg-[#F5EDFF] border-4 border-[#1A1020] rounded-[32px] p-8 shadow-[8px_8px_0_0_#1A1020] rotate-[-1deg] group-hover:rotate-0 transition-transform duration-300">
                <h3 className="font-display text-4xl font-bold text-[#1A1020] mb-2">Motion serves the idea</h3>
                <p className="font-sans text-lg font-600 text-[#5A4A6A]">Animation should guide the eye, not just look cool for the sake of it.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Creative Process - Giant Text + pill stagger */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="relative my-16 overflow-x-clip border-y-8 border-[#FFD93D] bg-[#1A1020] px-4 py-12 max-[480px]:-mx-5 max-[480px]:w-[calc(100%+2.5rem)] min-[481px]:max-[900px]:-mx-8 min-[481px]:max-[900px]:w-[calc(100%+4rem)] min-[901px]:-mx-[72px] min-[901px]:w-[calc(100%+9rem)] sm:my-24 sm:px-6 sm:py-16 md:my-32 md:px-8 md:py-20 lg:px-10 lg:py-24"
        >
          <motion.div
            aria-hidden
            variants={{
              hidden: { opacity: 0, rotate: 10 },
              visible: { opacity: 0.12, rotate: 15, transition: { duration: reduced ? 0.01 : 0.8, ease: easeOut } }
            }}
            className="pointer-events-none absolute -right-8 -top-8 text-[100px] text-white opacity-90 sm:-right-10 sm:-top-10 sm:text-[160px] md:text-[220px] xl:-right-[50px] xl:-top-[50px] xl:text-[300px]"
          >
            🛠️
          </motion.div>
          <motion.div variants={staggerContainer} className="relative z-10 mx-auto min-w-0 max-w-[1000px] px-0">
            <motion.h2
              variants={fadeUp}
              className="mb-8 max-w-full break-words text-balance font-display text-[clamp(1.35rem,4.2vw+0.6rem,4rem)] font-bold !leading-[1.12] !tracking-[-0.02em] !text-[#F4F0FA] sm:mb-10 md:mb-12"
            >
              <span className="!text-[#F4F0FA]">
                I blend instinct, rhythm, and visual storytelling,{` `}
              </span>
              <span className="!text-[#FF8EC5] italic drop-shadow-[0_1px_12px_rgba(255,62,138,0.35)]">
                then shape each idea until it feels unmistakably human.
              </span>
            </motion.h2>
            <motion.div variants={staggerContainer} className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <motion.div variants={fadeUp} className="min-w-0 w-full sm:w-auto sm:max-w-[calc(50%-0.5rem)] md:max-w-none">
                <TechOutlinePill className="w-full sm:w-auto" color="yellow">Audience empathy</TechOutlinePill>
              </motion.div>
              <motion.div variants={fadeUp} className="min-w-0 w-full sm:w-auto sm:max-w-[calc(50%-0.5rem)] md:max-w-none">
                <TechOutlinePill className="w-full sm:w-auto" color="pink">Brand storytelling</TechOutlinePill>
              </motion.div>
              <motion.div variants={fadeUp} className="min-w-0 w-full sm:max-w-full md:max-w-none">
                <TechOutlinePill className="w-full sm:w-auto" color="purple">Community energy</TechOutlinePill>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#1A1020] bg-[#FFD93D] text-4xl shadow-[6px_6px_0_0_#1A1020]"
            animate={reduced ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            👋
          </motion.div>
          <motion.h2 variants={fadeUp} className="mb-10 max-w-[800px] font-display text-[56px] font-bold leading-tight text-[#1A1020]">
            Want me on your next launch or content sprint?
          </motion.h2>
          <motion.div variants={fadeUp} whileHover={reduced ? undefined : { scale: 1.03 }} whileTap={reduced ? undefined : { scale: 0.98 }}>
            <PortfolioCtaLink to="/contact" size="comfortable" className="text-xl px-12 py-5 text-white">
              Let&apos;s Talk
            </PortfolioCtaLink>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
