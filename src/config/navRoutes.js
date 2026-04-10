/** Navbar global — sama di semua halaman. */

export const PORTFOLIO_NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export const DEFAULT_PORTFOLIO_NAV_PROPS = {
  brandTo: '/',
  brandLabel: 'Miyajeng Suyitno',
  links: PORTFOLIO_NAV_LINKS,
  navRowClassName: 'relative pt-1.5',
}
