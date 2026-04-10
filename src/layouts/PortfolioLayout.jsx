import { Outlet, useLocation } from 'react-router-dom'
import PortfolioFooter from '../components/portfolio/PortfolioFooter.jsx'
import PortfolioNav from '../components/portfolio/PortfolioNav.jsx'
import { DEFAULT_PORTFOLIO_NAV_PROPS } from '../config/navRoutes.js'
import { getPortfolioShellConfig } from '../config/portfolioShell.js'

const shellBaseClass =
  'portfolio-page mx-auto flex w-full max-w-[1440px] flex-col overflow-x-clip bg-[#FFFBEE] bg-dot-pattern px-[72px] py-12 antialiased [font-synthesis:none] [-moz-osx-font-smoothing:grayscale]'

/**
 * Layout portfolio: shell + navbar (sama di semua halaman) + Outlet + footer.
 */
export default function PortfolioLayout () {
  const { pathname } = useLocation()
  const cfg = getPortfolioShellConfig(pathname)

  return (
    <div className={`${shellBaseClass} ${cfg.pageModifier} ${cfg.gapClass}`}>
      <PortfolioNav {...DEFAULT_PORTFOLIO_NAV_PROPS} />
      <Outlet />
      <PortfolioFooter variant={cfg.footerVariant} />
    </div>
  )
}
