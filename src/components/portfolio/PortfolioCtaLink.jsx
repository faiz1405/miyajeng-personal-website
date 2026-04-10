import { Link } from 'react-router-dom'

const sizeClass = {
  default: 'px-5 py-3',
  comfortable: 'px-6 py-3.5',
}

export default function PortfolioCtaLink ({ to, children, size = 'default', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full bg-[#FF3D8A] border-2 border-[#1A1020] shadow-[3px_3px_0_0_#1A1020] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none no-underline cursor-pointer ${sizeClass[size]} ${className}`}
    >
      <span className="flex shrink-0 font-sans font-700 leading-tight text-inherit">
        {children}
      </span>
    </Link>
  )
}
