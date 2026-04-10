const footerLinkClass =
  'shrink-0 font-sans text-lg font-800 uppercase tracking-widest text-[#1A1020] cursor-pointer hover:text-[#FF3D8A] hover:-translate-y-1 transition-all duration-150'

function FooterLink ({ children }) {
  return <span className={footerLinkClass}>{children}</span>
}

export default function PortfolioFooter ({ variant }) {
  if (variant === 'home') {
    return (
      <div className="home-page-footer relative flex flex-col md:flex-row items-center justify-between gap-8 pb-10 pt-20 border-t-4 border-[#1A1020] mt-20">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="h-5 w-5 rounded-full bg-[#FF3D8A] border-4 border-[#1A1020] animate-spin-slow" />
            <div className="font-display text-4xl font-bold text-[#1A1020]">
              Miyajeng Suyitno
            </div>
          </div>
          <div className="font-sans text-lg font-600 text-[#5A4A6A] max-w-[400px]">
            Creative social — making feeds feel alive, one post at a time.
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 bg-white border-4 border-[#1A1020] rounded-full px-10 py-5 shadow-[8px_8px_0_0_#1A1020] rotate-[-1deg]">
          <FooterLink>Instagram</FooterLink>
          <FooterLink>TikTok</FooterLink>
          <FooterLink>YouTube</FooterLink>
        </div>
        <div className="absolute bottom-4 right-0 font-sans text-sm font-800 text-[#A0A0C0]">
          © 2026
        </div>
      </div>
    )
  }

  if (variant === 'projects') {
    return (
      <div className="projects-page-footer flex flex-col md:flex-row items-center justify-between gap-8 pb-10 pt-20 border-t-4 border-[#1A1020] mt-20">
        <div className="shrink-0 font-sans text-lg font-800 text-[#1A1020]">
          © 2026 Miyajeng Suyitno — Made with love ❤️
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 bg-[#FFF0F7] border-4 border-[#1A1020] rounded-full px-10 py-5 shadow-[8px_8px_0_0_#1A1020] rotate-[1deg]">
          <FooterLink>Instagram</FooterLink>
          <FooterLink>YouTube</FooterLink>
          <FooterLink>miyajengsuyitno@gmail.com</FooterLink>
        </div>
      </div>
    )
  }

  if (variant === 'contact') {
    return (
      <div className="contact-page-footer flex flex-col md:flex-row items-center justify-between gap-8 pb-10 pt-20 border-t-4 border-[#1A1020] mt-20">
        <div className="shrink-0 font-sans text-lg font-800 text-[#1A1020]">
          © 2026 Miyajeng Suyitno — Made with love ❤️
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 bg-[#FFD93D] border-4 border-[#1A1020] rounded-full px-10 py-5 shadow-[8px_8px_0_0_#1A1020] rotate-[-1deg]">
          <FooterLink>Threads</FooterLink>
          <FooterLink>TikTok</FooterLink>
          <FooterLink>Calendly</FooterLink>
          <FooterLink>miyajengsuyitno@gmail.com</FooterLink>
        </div>
      </div>
    )
  }

  if (variant === 'about') {
    return (
      <div className="about-page-footer flex flex-col md:flex-row items-center justify-between gap-8 pb-10 pt-20 border-t-4 border-[#1A1020] mt-20">
        <div className="shrink-0 font-sans text-lg font-800 text-[#1A1020]">
          © 2026 Miyajeng Suyitno — Made with love ❤️
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 bg-[#F5EDFF] border-4 border-[#1A1020] rounded-full px-10 py-5 shadow-[8px_8px_0_0_#1A1020] rotate-[1deg]">
          <FooterLink>Instagram</FooterLink>
          <FooterLink>Threads</FooterLink>
          <FooterLink>Email</FooterLink>
        </div>
      </div>
    )
  }

  return null
}
