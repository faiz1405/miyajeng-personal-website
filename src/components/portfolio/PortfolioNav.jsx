import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinkBaseClass =
  'shrink-0 font-sans text-[11px] font-800 uppercase tracking-[0.08em] no-underline transition-all duration-150 cursor-pointer sm:text-xs md:text-base md:tracking-widest'
const navLinkInactiveClass = `${navLinkBaseClass} text-[#1A1020] hover:text-[#FF3D8A] hover:-translate-y-0.5`
const navLinkActiveClass = `${navLinkBaseClass} text-[#FF3D8A] underline decoration-2 decoration-[#FF3D8A] underline-offset-[6px] md:underline-offset-[8px]`

const mobileLinkBase =
  'relative z-10 block w-full rounded-2xl border-2 px-4 py-3.5 text-center font-sans text-sm font-800 uppercase tracking-[0.08em] no-underline transition-colors duration-150'
const mobileLinkInactiveClass = `${mobileLinkBase} border-[#1A1020] bg-[#FFFBEE] text-[#1A1020] shadow-[2px_2px_0_0_#1A1020] hover:bg-[#FFD93D] active:bg-[#FFE566]`
const mobileLinkActiveClass = `${mobileLinkBase} border-[#FF3D8A] bg-[#FFD93D] text-[#1A1020] shadow-[2px_2px_0_0_#1A1020] ring-2 ring-[#FF3D8A]/40`

/** Home hanya aktif di `/` persis; route lain cocokkan path atau sub-path. */
function isRouteActive (pathname, to) {
  if (to === '/') {
    return pathname === '/'
  }
  return pathname === to || pathname.startsWith(`${to}/`)
}

export default function PortfolioNav ({
  brandTo,
  brandLabel,
  links,
  linkGapClass = 'gap-2 sm:gap-3 md:gap-5 lg:gap-6',
  navRowClassName = '',
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`portfolio-nav-row sticky top-0 z-60 min-w-0 bg-transparent pb-4 pt-[max(1rem,env(safe-area-inset-top))] md:pb-5 md:pt-[max(1.25rem,env(safe-area-inset-top))] ${navRowClassName}`}
    >
      <div className="min-w-0 rounded-[22px] border-2 border-[#1A1020] bg-white px-4 py-3 shadow-[4px_4px_0_0_#1A1020] md:flex md:items-center md:justify-between md:gap-6 md:rounded-full md:px-6 md:py-3.5 lg:px-8">
        {/* Baris atas: brand | menu desktop | hamburger */}
        <div className="flex min-w-0 items-center justify-between gap-3 md:contents">
          <Link
            to={brandTo}
            className="group flex min-w-0 max-w-[min(100%,14rem)] items-center gap-2.5 no-underline sm:max-w-none sm:gap-3 md:min-w-0 md:max-w-[55%] md:shrink cursor-pointer lg:max-w-none"
          >
            <div className="box-border h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#1A1020] bg-[#FF3D8A] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#FFD93D] sm:h-4 sm:w-4" />
            <div className="min-w-0 truncate font-display text-lg font-bold leading-tight tracking-[0.02em] text-[#1A1020] sm:text-xl md:text-2xl">
              {brandLabel}
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className={`portfolio-nav-links hidden min-w-0 flex-1 items-center justify-end md:flex ${linkGapClass}`}
          >
            {links.map((item) => {
              const active = isRouteActive(pathname, item.to)
              return (
                <Link
                  key={`${item.to}-${item.label}`}
                  to={item.to}
                  className={active ? navLinkActiveClass : navLinkInactiveClass}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <motion.button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1A1020] bg-[#FFFBEE] shadow-[2px_2px_0_0_#1A1020] md:hidden"
            whileTap={{ scale: 0.96 }}
          >
            <div className="relative h-4 w-5">
              <motion.span
                className="absolute left-0 top-0 block h-[2px] w-5 rounded bg-[#1A1020]"
                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
              <motion.span
                className="absolute left-0 top-[7px] block h-[2px] w-5 rounded bg-[#1A1020]"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              />
              <motion.span
                className="absolute left-0 top-[14px] block h-[2px] w-5 rounded bg-[#1A1020]"
                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
            </div>
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen ? (
            <motion.nav
              key="mobile-menu"
              aria-label="Mobile Primary"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 border-t-2 border-[#1A1020]/15 pt-3 md:hidden"
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="flex w-full flex-col gap-3">
                {links.map((item) => {
                  const active = isRouteActive(pathname, item.to)
                  return (
                    <Link
                      key={`${item.to}-${item.label}-mobile`}
                      to={item.to}
                      className={active ? mobileLinkActiveClass : mobileLinkInactiveClass}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
