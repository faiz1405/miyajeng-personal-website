/**
 * Konfigurasi shell per route: modifier CSS, jarak kolom, varian footer.
 * Navbar disatukan lewat DEFAULT_PORTFOLIO_NAV_PROPS di layout.
 */
export function getPortfolioShellConfig (pathname) {
  switch (pathname) {
    case '/':
      return {
        pageModifier: 'portfolio-page--home',
        gapClass: 'gap-10 relative',
        footerVariant: 'home',
      }
    case '/about':
      return {
        pageModifier: 'portfolio-page--about',
        gapClass: 'gap-6',
        footerVariant: 'about',
      }
    case '/contact':
      return {
        pageModifier: 'portfolio-page--contact',
        gapClass: 'gap-[22px]',
        footerVariant: 'contact',
      }
    case '/projects':
      return {
        pageModifier: 'portfolio-page--projects',
        gapClass: 'gap-6',
        footerVariant: 'projects',
      }
    default:
      return getPortfolioShellConfig('/')
  }
}
