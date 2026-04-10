import { Link } from 'react-router-dom'

export default function PortfolioDarkCtaLink ({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-full bg-[#1A1020] border-2 border-[#1A1020] px-5 py-3 shadow-[3px_3px_0_0_#FF3D8A] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 no-underline cursor-pointer"
    >
      <span className="flex shrink-0 font-sans text-sm font-700 leading-[18px] text-white">
        {children}
      </span>
    </Link>
  )
}
