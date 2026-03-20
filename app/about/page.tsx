"use client"

import { useState } from "react"
import Nav from "@/components/nav"
import { Button } from "@/components/ui/button"
import EditableText from "@/components/editable-text"
import EditableImage from "@/components/editable-image"
import ContactDialog from "@/components/contact-dialog"
import { User, Code, Palette, Coffee, Globe, Music, Book } from "lucide-react"

export default function AboutPage() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const skills = [
    { name: "客户关系维护", level: 80, icon: <User className="w-5 h-5" /> },
    { name: "顾问式沟通", level: 80, icon: <User className="w-5 h-5" /> },
    { name: "项目流程把控", level: 95, icon: <Book className="w-5 h-5" /> },
    { name: "OA软件实施", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "技术基础", level: 90, icon: <Code className="w-5 h-5" /> },
  ]

  const interests = [
    { name: "行业研究", icon: <Globe className="w-5 h-5" /> },
    { name: "客户沟通", icon: <User className="w-5 h-5" /> },
    { name: "项目管理", icon: <Book className="w-5 h-5" /> },
    { name: "技术学习", icon: <Code className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-warm-white text-main-text">
      <Nav />

      <main className="container mx-auto px-4 py-8 md:px-6">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-accent/10 px-4 py-2 text-sm font-medium text-purple-accent">
            <User className="w-4 h-4" />
            <EditableText id="about-badge">关于我</EditableText>
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-tight">
            <EditableText id="about-hello">你好，我是</EditableText><span className="text-purple-accent"><EditableText id="about-name">毛田蕊</EditableText></span>
          </h1>
          <p className="mt-2 text-base text-main-text/70">
            <EditableText id="about-subtitle">软件工程背景，2年OA项目实施经验，服务10+企业客户。现寻求向企业销售转型，用技术视角理解客户，用顾问思维创造价值。</EditableText>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            {/* Avatar */}
            <div className="rounded-2xl border bg-white p-8 text-center">
              <div className="mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-purple-accent to-mint-green p-1">
                <div className="flex size-full items-center justify-center rounded-full bg-white">
                  <EditableImage
                    id="about-avatar"
                    src="/37.jpg"
                    alt="头像"
                    className="w-44 h-44 rounded-full object-cover"
                    placeholder={
                      <div className="w-44 h-44 rounded-full bg-purple-accent flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">头像</span>
                      </div>
                    }
                  />
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold"><EditableText id="about-avatar-name">毛田蕊</EditableText></h3>
              <p className="mt-2 text-base text-main-text/70"><EditableText id="about-avatar-title">销售顾问</EditableText></p>
              <div className="mt-4 flex justify-center gap-4">
                <Button
                  size="sm"
                  className="bg-purple-accent hover:bg-purple-accent/90 text-white"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <EditableText id="about-button-download">下载简历</EditableText>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-accent text-purple-accent hover:bg-purple-accent/10"
                  onClick={() => setContactDialogOpen(true)}
                >
                  <EditableText id="about-button-contact">联系我</EditableText>
                </Button>
              </div>
            </div>

            {/* Personal Info */}
            <div className="rounded-2xl border bg-white p-8">
              <h3 className="text-2xl font-bold"><EditableText id="about-personal-info-title">个人信息</EditableText></h3>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-sm text-main-text/50">所在地</dt>
                  <dd className="font-medium text-base"><EditableText id="about-location">上海，中国</EditableText></dd>
                </div>
                <div>
                  <dt className="text-sm text-main-text/50">邮箱</dt>
                  <dd className="font-medium text-base"><EditableText id="about-email">tianrui_mao@163.com</EditableText></dd>
                </div>
                <div>
                  <dt className="text-sm text-main-text/50">工作状态</dt>
                  <dd className="font-medium text-base text-mint-green"><EditableText id="about-work-status">寻找新机会</EditableText></dd>
                </div>
                <div>
                  <dt className="text-sm text-main-text/50">工作经验</dt>
                  <dd className="font-medium text-base"><EditableText id="about-experience">2年</EditableText></dd>
                </div>
              </dl>
            </div>

            {/* Interests */}
            <div className="rounded-2xl border bg-white p-8">
              <h3 className="text-2xl font-bold"><EditableText id="about-interests-title">兴趣与爱好</EditableText></h3>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {interests.map((interest) => (
                  <div
                    key={interest.name}
                    className="flex flex-col items-center justify-center rounded-xl bg-warm-white p-4 text-center"
                  >
                    <div className="text-purple-accent">{interest.icon}</div>
                    <span className="mt-2 text-sm font-medium">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Intro & Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education Card */}
            <div className="rounded-2xl border bg-white p-8">
              <h2 className="text-2xl font-bold"><EditableText id="about-education-title">教育背景</EditableText></h2>
              <div className="mt-6 space-y-4 text-base text-main-text/70">
                <p>
                  <EditableText id="about-story-p1">上海第二工业大学 2019.9 - 2023.7 | 计算机与信息工程学院 | 软件工程</EditableText>
                </p>
              </div>
            </div>

            {/* Work Experience Card */}
            <div className="rounded-2xl border bg-white p-8">
              <h2 className="text-2xl font-bold"><EditableText id="about-work-title">工作经历</EditableText></h2>
              <div className="mt-6 space-y-4 text-base text-main-text/70">
                <p>
                  <EditableText id="about-story-p2">泛微网络科技股份有限公司 | 上海 | 项目实施顾问 | 2023.5 - 2025.6</EditableText>
                </p>
                <p>
                  <EditableText id="about-story-p3">拥有2年OA软件实施经验，服务10+企业，擅长顾问式销售、客户关系维护和项目目标驱动管理。</EditableText>
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl border bg-white p-8">
              <h2 className="text-2xl font-bold"><EditableText id="about-skills-title">核心技能与专长</EditableText></h2>
              <div className="mt-6 space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-purple-accent">{skill.icon}</div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-main-text/70">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#E5E5E5]">
                      <div
                        className={`h-full rounded-full ${index < 3 ? 'bg-purple-accent' : 'bg-mint-green'}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-accent/10 to-mint-green/10 p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold"><EditableText id="about-philosophy-title">我的理念</EditableText></h2>
            <p className="mt-4 text-base text-main-text/70">
              <EditableText id="about-philosophy-text">“我相信优秀的数字化解决方案应该像一次好的对话——清晰、直观且有意义。每一个流程设计，每一个实施决策都应该服务于客户业务需求，并提升企业的运营效率。”</EditableText>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-main-text/70 md:px-6">
          <p className="text-base">© {new Date().getFullYear()} <EditableText id="about-footer-copyright">毛田蕊的个人主页. 保留所有权利。</EditableText></p>
          <p className="mt-2 text-sm"><EditableText id="about-footer-tagline">用专业与热情服务客户</EditableText></p>
        </div>
      </footer>
      <ContactDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
      />
    </div>
  )
}
