import { useMemo } from 'react'
import PortfolioCtaLink from '../components/portfolio/PortfolioCtaLink.jsx'
import { motion, useReducedMotion } from 'framer-motion'

const easeOut = [0.22, 1, 0.36, 1]
const educationItems = ['Associate degree of Art at Jakarta Institute of Arts, 2019', 'GPA 3.69 / 4.00']
const workExperienceItems = [
  'Creative Writer at Double D Management - The Sinathrya (2024 - Until Now)',
  'Creative Writer at Tv One (2023-2024)',
  'Part Time Content Writer at Rumah Siap Kerja (2023)',
  'Part Time ScriptWriter at We Good (2022-2023)',
  'Creative Writer at Viva.co.id "VDVC" (2021-2022)',
  'Junior Scriptwriter at Goodscript part of Sinemart (2021-2022)',
  'Creative Writer at LetrB Post Production (2021)',
]
const internshipItems = ['Content Writer at Moslem Journey (2019)', 'Content Writer at Meramuda.com (2019)']
const coreSkills = [
  {
    title: 'Storytelling & Copywriting',
    description:
      'Crafting engaging narratives and persuasive messaging for scripts, campaigns, and social media content.',
  },
  {
    title: 'Creative & Critical Thinking',
    description: 'Generating fresh, relevant ideas while applying analytical thinking to solve challenges.',
  },
  {
    title: 'Communication & Leadership',
    description:
      'Leading creative teams, facilitating brainstorming sessions, and ensuring effective collaboration.',
  },
  {
    title: 'Strategic Thinking',
    description: 'Aligning creative concepts with brand objectives and target audience needs.',
  },
  {
    title: 'Visual Literacy',
    description: 'Strong sense of visual aesthetics, composition, and brand-consistent tone.',
  },
  {
    title: 'Teamwork',
    description: 'Collaborating across departments to deliver cohesive and impactful results.',
  },
  {
    title: 'Basic Editing Skills',
    description: 'Understanding video editing fundamentals to enhance communication with production teams.',
  },
  {
    title: 'YouTube Analytics',
    description:
      'Interpreting data insights to optimize content strategy, improve audience engagement, and increase channel performance.',
  },
]

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
                HELLO, I&apos;M MIYAJENG
            </motion.h1>
            
            <motion.p variants={fadeUp} className="relative z-20 max-w-[600px] rounded-[32px] border-4 border-[#1A1020] bg-white p-8 font-sans text-2xl font-600 leading-relaxed text-[#3D2F50] shadow-[8px_8px_0_0_#1A1020]">
                I have worked as a creative writer for almost the past five years, where I am tasked with developing ideas into complete scripts.
            </motion.p>
              <motion.p variants={fadeUp} className="mt-6 max-w-[600px] rounded-[32px] border-4 border-[#1A1020] bg-[#FFF0F7] p-8 font-sans text-xl font-500 leading-relaxed text-[#3D2F50] shadow-[8px_8px_0_0_#1A1020]">
                These include scripts for YouTube content, film series, company profiles, and even creating storylines for brand reels on social media. I also have experience as a content writer, writing articles for websites.
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
                Education
              </h2>
              <ul className="list-disc space-y-2 pl-6 font-sans text-xl font-600 leading-relaxed text-[#1A1020]">
                {educationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeRight} className="md:col-span-5 md:col-start-8">
              <h2 className="mb-8 font-display text-[64px] font-bold leading-tight tracking-[-0.02em] text-[#1A1020]">
                Work Experience
              </h2>
              <ul className="list-disc space-y-2 pl-6 font-sans text-xl font-600 leading-relaxed text-[#2D2438]">
                {workExperienceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mb-6 mt-10 font-display text-[40px] font-bold leading-tight tracking-[-0.02em] text-[#1A1020]">
                Internship
              </h3>
              <ul className="list-disc space-y-2 pl-6 font-sans text-xl font-600 leading-relaxed text-[#2D2438]">
                {internshipItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Personal Skills */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="relative my-16 overflow-x-clip border-y-8 border-[#FFD93D] bg-[#1A1020] px-4 py-12 max-[480px]:-mx-5 max-[480px]:w-[calc(100%+2.5rem)] min-[481px]:max-[900px]:-mx-8 min-[481px]:max-[900px]:w-[calc(100%+4rem)] min-[901px]:-mx-[72px] min-[901px]:w-[calc(100%+9rem)] sm:my-24 sm:px-6 sm:py-16 md:my-32 md:px-8 md:py-20 lg:px-10 lg:py-24"
        >
          <div aria-hidden className="pointer-events-none absolute -right-28 top-0 h-[380px] w-[380px] rounded-full border-2 border-[#FF8EC5]/30 opacity-60 blur-[1px]" />
          <div aria-hidden className="pointer-events-none absolute -right-8 top-8 h-[220px] w-[220px] rounded-full border border-[#FF8EC5]/35" />
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,142,197,0.18),transparent_42%)]" />
          <motion.div variants={staggerContainer} className="relative z-10 mx-auto min-w-0 max-w-[1000px] px-0">
            <motion.h2
              variants={fadeUp}
              className="mb-6 max-w-full text-balance font-display text-[clamp(2.5rem,8vw,7.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.01em] text-[#FFB6E6] sm:mb-8"
            >
              Personal Skills
            </motion.h2>
            <motion.div variants={fadeUp} className="mb-10 max-w-[930px]">
              <h3 className="font-sans text-[clamp(1.15rem,2.2vw,2rem)] font-800 leading-snug text-[#FFE8F8]">
                Creative Writer | 5 Years in Creative Industry
              </h3>
              <p className="mt-2 font-sans text-[clamp(1rem,1.3vw,1.5rem)] font-500 leading-relaxed text-[#F3D7EA]">
                Experienced creative writer with nearly five years in the creative industry, specializing in
                developing and executing compelling ideas across various media platforms.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-[26px] border-2 border-[#FF8EC5]/50 bg-[#161221]/85 p-6 sm:p-8">
              <h4 className="mb-4 font-sans text-xl font-800 text-[#FFB6E6] sm:text-2xl">Core Skills</h4>
              <ul className="list-disc space-y-2.5 pl-6 font-sans text-[clamp(1rem,1.25vw,1.6rem)] font-500 leading-relaxed text-[#FFE8F8]">
                {coreSkills.map((skill) => (
                  <li key={skill.title}>
                    <span className="font-800 text-[#FFD4F0]">{skill.title}</span>
                    <span className="text-[#EFD9EB]"> - {skill.description}</span>
                  </li>
                ))}
              </ul>
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
            Interested in working together on your next content project?
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
