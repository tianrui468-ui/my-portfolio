"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import EditableText from "./editable-text"
import ContactDialog from "./contact-dialog"

export default function Nav() {
  const navLinks = [
    { name: "首页", href: "/" },
    { name: "关于", href: "/about" },
    { name: "项目经验", href: "/blog" },
    { name: "简历", href: "/resume" },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const pathname = usePathname()
  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'bg-warm-white/95 backdrop-blur-lg shadow-sm' : 'bg-warm-white/95 backdrop-blur supports-[backdrop-filter]:bg-warm-white/60'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-main-text">
          <EditableText id="nav-logo" as="span">
            我的主页
          </EditableText>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-full ${isActive(link.href) ? 'bg-purple-accent text-white' : 'text-main-text/70 hover:text-main-text'}`}
            >
              <EditableText id={`nav-link-${link.name}`} as="span">
                {link.name}
              </EditableText>
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Button
          className="bg-purple-accent hover:bg-purple-accent/90 text-white"
          onClick={() => setContactDialogOpen(true)}
        >
          <EditableText id="nav-contact-button" as="span">
            联系我
          </EditableText>
        </Button>

        {/* Mobile Menu Button - Text Only */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="切换菜单"
        >
          <EditableText id="nav-mobile-menu-button" as="span">
            菜单
          </EditableText>
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-warm-white/95 backdrop-blur-lg border-b shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors px-4 py-3 rounded-lg ${isActive(link.href) ? 'bg-purple-accent text-white' : 'text-main-text/70 hover:text-main-text hover:bg-gray-100'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <EditableText id={`nav-mobile-link-${link.name}`} as="span">
                  {link.name}
                </EditableText>
              </Link>
            ))}
            <Button
              className="bg-purple-accent hover:bg-purple-accent/90 text-white mt-2"
              onClick={() => {
                setContactDialogOpen(true)
                setMobileMenuOpen(false)
              }}
            >
              <EditableText id="nav-mobile-contact-button" as="span">
                联系我
              </EditableText>
            </Button>
          </nav>
        </div>
      )}

      <ContactDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
      />
    </header>
  )
}
