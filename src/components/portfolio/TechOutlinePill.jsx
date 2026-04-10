export default function TechOutlinePill ({ children, color = 'yellow', className = '' }) {
  const colorMap = {
    yellow: 'bg-[#FFD93D] text-[#1A1020]',
    pink: 'bg-[#FF3D8A] text-white',
    purple: 'bg-[#A855F7] text-white',
    coral: 'bg-[#FF6B6B] text-white',
  }
  return (
    <div className={`inline-flex min-w-0 max-w-full items-center justify-center rounded-full border-2 border-[#1A1020] px-4 py-2.5 shadow-[2px_2px_0_0_#1A1020] ${colorMap[color]} ${className}`}>
      <div className="flex min-w-0 justify-center text-center font-sans text-sm font-700 leading-snug">{children}</div>
    </div>
  )
}
