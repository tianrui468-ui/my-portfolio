"use client"

import { useState } from "react"
import Nav from "@/components/nav"
import { Button } from "@/components/ui/button"
import EditableText from "@/components/editable-text"
import EditableImage from "@/components/editable-image"
import FadeInSection from "@/components/fade-in-section"
import ParallaxHero from "@/components/parallax-hero"
import ContactDialog from "@/components/contact-dialog"
import BeforeAfter from "@/components/BeforeAfter"

export default function Home() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  return (
    <div className="min-h-screen bg-warm-white text-main-text">
      <Nav />

      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Hero Section */}
        <FadeInSection>
          <section className="py-0">
          <ParallaxHero>
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            {/* Left: Content */}
            <div className="space-y-8 md:space-y-10">
              <EditableText
                id="hero-subtitle"
                as="div"
                className="inline-flex rounded-full bg-purple-accent/10 px-5 py-2.5 text-base font-bold text-purple-accent"
              >
                求职意向：销售顾问
              </EditableText>

              <div className="text-5xl font-bold tracking-tight">
                <EditableText id="hero-title-1" as="span">毛田蕊</EditableText>
                <EditableText id="hero-title-2" as="span" className="text-purple-accent"></EditableText>
                <br />
                <EditableText id="hero-title-3" as="span"></EditableText>
                <EditableText id="hero-title-4" as="span" className="text-mint-green"></EditableText>
              </div>

              <EditableText id="hero-description" as="p" className="text-base text-main-text/70 lg:max-w-[95%]">
                软件工程背景，2年OA项目实施经验，服务10+企业客户。现寻求向企业销售转型，用技术视角理解客户，用顾问思维创造价值。
              </EditableText>

              <div className="flex flex-wrap gap-6">
                <Button
                  className="bg-neon-yellow-green hover:bg-neon-yellow-green/90 text-main-text font-bold px-8 py-3 h-auto text-base"
                  onClick={() => window.location.href = '/blog'}
                >
                  <EditableText id="button-view-projects" as="span">
                    查看项目
                  </EditableText>
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-accent text-purple-accent hover:bg-purple-accent/10 px-8 py-3 h-auto text-base"
                  onClick={() => setContactDialogOpen(true)}
                >
                  <EditableText id="button-contact-me" as="span">
                    联系我
                  </EditableText>
                </Button>
              </div>
            </div>

            {/* Right: Avatar & Card */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md md:max-w-lg aspect-square overflow-hidden rounded-4xl bg-gradient-to-br from-purple-accent/15 to-mint-green/15">
                {/* Avatar placeholder */}
                <div className="absolute inset-8 flex items-center justify-center rounded-3xl bg-white/90">
                  <EditableImage
                    id="avatar"
                    src="37.jpg"
                    alt="头像"
                    className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-purple-accent flex items-center justify-center"
                    placeholder={
                      <span className="text-white text-4xl font-bold">头像</span>
                    }
                  />
                </div>

              </div>
            </div>
          </div>
          </ParallaxHero>
        </section>
        </FadeInSection>

        {/* About Preview Section - Before/After Effect */}
        <FadeInSection delay={200}>
          <section className="py-12 md:py-16 lg:py-20">
            <div className="mb-8">
              <EditableText id="about-title" as="h2" className="text-3xl font-bold">关于我</EditableText>
              <EditableText id="about-subtitle" as="p" className="mt-2 text-base text-main-text/70">从项目实施顾问到企业销售顾问的成长之路</EditableText>
            </div>

            <BeforeAfter />
          </section>
        </FadeInSection>

      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4 text-center text-main-text/70 md:px-6">
          <p className="text-base">© {new Date().getFullYear()} <EditableText id="footer-copyright">毛田蕊的个人主页. 保留所有权利。</EditableText></p>
          <p className="mt-4 text-sm"><EditableText id="footer-built-with">使用 Next.js 与 Tailwind CSS 构建</EditableText></p>
        </div>
      </footer>
      <ContactDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
      />
    </div>
  )
}