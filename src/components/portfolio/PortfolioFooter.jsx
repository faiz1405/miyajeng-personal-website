const footerLinkClass =
  'shrink-0 font-sans text-lg font-800 uppercase tracking-widest text-[#1A1020] cursor-pointer hover:text-[#FF3D8A] hover:-translate-y-1 transition-all duration-150'

function FooterLink ({ children }) {
  return <span className={footerLinkClass}>{children}</span>
}

export default function PortfolioFooter () {
    return (
      <div className="about-page-footer flex flex-col md:flex-row items-center justify-between gap-8 pb-10 pt-20 border-t-4 border-[#1A1020] mt-20">
      <div className="shrink-0 font-sans text-lg font-800 text-[#1A1020]">
        © 2026 Miyajeng Suyitno — Made with love from Husband ❤️
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 bg-[#F5EDFF] border-4 border-[#1A1020] rounded-full px-10 py-5 shadow-[8px_8px_0_0_#1A1020] rotate-[1deg]">
        <FooterLink>Instagram</FooterLink>
        <FooterLink>Email</FooterLink>
      </div>
    </div>
    )
  }


