"use client"

import { useState } from "react"
import Nav from "@/components/nav"
import { Button } from "@/components/ui/button"
import EditableText from "@/components/editable-text"
import { Download, GraduationCap, Briefcase, Award, FolderKanban, Calendar, MapPin, Info } from "lucide-react"

export default function ResumePage() {
  // Education data
  const education = {
    school: "上海第二工业大学",
    degree: "软件工程专业",
    period: "2019.9-2023.7",
    location: "上海，中国",
    description: "计算机与信息工程学院，软件工程专业，学习软件开发基础、数据库、系统设计等课程。"
  }

  // Work experience data
  const workExperience = [
    {
      title: "项目实施顾问",
      company: "泛微网络科技股份有限公司",
      period: "2023.5-2025.6",
      location: "上海，中国",
      description: "深度需求挖掘与方案说服：在多个OA项目中，作为客户核心对接人，通过深度沟通和需求调研，能精准识别客户管理层及关键用户的隐性需求。针对客户合同外的复杂需求，成功说服客户采纳我方建议方案，或协调内部资源定制开发，在满足客户核心诉求的同时，为公司争取了额外项目价值。\n复杂关系破冰与维护：在捷成洋行救急项目中，面对客户初期的不信任，通过高频沟通、阶段性成果汇报和快速响应，逐步赢得客户信任，最终将客户态度从“质疑”转变为“高度肯定”，建立了长期友好的客户关系，为后续合作奠定基础。\n项目流程把控和回款推动：负责多个项目的全生命周期管理，从计划制定、方案输出、实施搭建到上线验收。通过有效管理客户预期和把控项目进度，确保了项目按时上线验收，加快回款流程。\n高压下的资源协调与问题解决：在丰华生物预算项目中，面对开发团队频繁变更、进度滞后的问题，主动承担沟通桥梁角色，向新成员清晰传递需求，制定明确的开发目标，最终确保功能如期上线，保证了客户满意度。",
      tags: ["OA实施", "顾问式销售", "项目管理", "客户关系"]
    }
  ]

  // Core strengths data
  const coreStrengths = [
    {
      title: "行业深度",
      description: "2年OA软件实施经验，深刻理解企业业务流程与痛点"
    },
    {
      title: "顾问式沟通",
      description: "将复杂方案转化为客户听得懂的内容，具备良好演讲说服能力"
    },
    {
      title: "关系与韧性",
      description: "在压力下协调资源，具备客户关系维护能力和抗压能力"
    },
    {
      title: "目标驱动",
      description: "结果导向，多次主动推动问题解决，确保项目顺利验收回款"
    }
  ]

  // Project experience data
  const projects = [
    {
      title: "捷成洋行采购项目",
      period: "2024.10-2025.6",
      description: "挑战：客户二期救急项目，涉及供应商管理、预算、采购全流程，需求复杂，且因前期进度严重落后问题，客户对项目团队极度不信任。\n\n我的行动与结果：临危受命，作为核心沟通人，前期花时间倾听客户反馈，理解其真实顾虑。随后，将庞大需求拆解为可落地的阶段性目标，每天、每周向客户决策层汇报可视化成果，逐步重新建立客户信任。在长达3个阶段的迭代中，不仅是方案输出及执行者，更是客户信赖的供应商顾问。最终项目圆满落地，客户从不信任转变为发来表扬信。"
    },
    {
      title: "生研院信创项目",
      period: "2024.7-2024.10",
      description: "挑战：客户要求替换旧系统，涉及100+条流程搭建，项目周期紧、成员少，进度一度滞后，客户满意度低。\n\n我的行动与结果：我及时调整策略，主动向客户重新制定阶段性汇报计划，每周展示项目成果，让客户看到进展。同时向上级争取资源，成功拉回了项目进度，得到了客户方领导的赞赏与认可。"
    },
    {
      title: "丰华生物财务预算项目",
      period: "2024.2-2024.4",
      description: "挑战：客户预算逻辑极其复杂，标准产品无法满足，需大量二次开发。更棘手的是，内部开发团队人员频繁变动，项目面临延期风险。\n\n我的行动与结果：我没有被动等待，而是主动\"管理\"开发资源。反复向每一位新接手的开发清晰传递需求内容和客户期望，设立清晰的短期开发目标，不断在客户和开发团队之间进行沟通翻译，确保双方理解一致。最后成功如期上线复杂的预算管理体系，客户对交付效果非常满意，项目顺利回款。"
    }
  ]

  // Additional information data
  const additionalInfo = [
    {
      category: "商务技能",
      description: "熟练使用Office办公软件（擅长用PPT进行方案汇报与演示）、Visio流程图绘制。"
    },
    {
      category: "其他技能",
      description: "具备SQL、Js、Linux基础（有助于快速理解产品技术逻辑，与客户技术部门顺畅沟通）。"
    },
    {
      category: "个人特质",
      description: "目标感强，乐于挑战，享受“搞定客户、促成合作”的成就感，能承受高压工作。"
    }
  ]

  // Timeline data
  const timeline = [
    { date: "2019.9", event: "上海第二工业大学入学" },
    { date: "2023.7", event: "软件工程专业毕业" },
    { date: "2023.5", event: "加入泛微网络科技" },
    { date: "2024.2-2024.4", event: "丰华生物项目" },
    { date: "2024.7-2024.10", event: "生研院项目" },
    { date: "2024.10-2025.6", event: "捷成洋行项目" },
    { date: "2025.6", event: "离职，开启新征程" }
  ]

  // Timeline node colors - all solid colors, alternating for adjacent nodes
  const timelineColors = [
    "bg-purple-accent", // 入学 - 紫色
    "bg-mint-green", // 毕业 - 薄荷绿
    "bg-neon-yellow-green", // 工作开始 - 霓虹黄绿
    "bg-purple-accent", // 项目1 - 紫色
    "bg-mint-green", // 项目2 - 薄荷绿
    "bg-neon-yellow-green", // 项目3 - 霓虹黄绿
    "bg-purple-accent" // 新征程 - 紫色
  ]

  // Animation classes for each node based on color
  const timelineAnimations = [
    "animate-node-pulse", // purple
    "animate-node-pulse-green", // mint-green
    "animate-node-pulse-generic", // neon-yellow-green
    "animate-node-pulse", // purple
    "animate-node-pulse-green", // mint-green
    "animate-node-pulse-generic", // neon-yellow-green
    "animate-node-pulse" // purple
  ]

  // Ring colors for hover effect
  const timelineRings = [
    "ring-purple-accent",
    "ring-mint-green",
    "ring-neon-yellow-green",
    "ring-purple-accent",
    "ring-mint-green",
    "ring-neon-yellow-green",
    "ring-purple-accent"
  ]

  // Timeline hover state
  const [hoveredTimelineIndex, setHoveredTimelineIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-warm-white text-main-text">
      <Nav />

      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-20">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              <EditableText id="resume-title">个人简历</EditableText>
            </h1>
            <p className="mt-4 italic text-purple-accent text-base">
              <EditableText id="resume-subtitle">专业经验与技能的全方位展示</EditableText>
            </p>
          </div>

          <Button
            className="mt-6 md:mt-0 bg-purple-accent hover:bg-purple-accent/90 text-white gap-3 px-8 py-3 text-base"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="size-5" />
            <EditableText id="resume-download-button">下载PDF简历</EditableText>
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Left Content - 80% */}
          <div className="lg:col-span-3 space-y-12">
            {/* 1. Education */}
            <section className="bg-white rounded-3xl border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-accent/10">
                  <GraduationCap className="size-6 text-purple-accent" />
                </div>
                <h2 className="text-2xl font-bold"><EditableText id="resume-education-title">教育经历</EditableText></h2>
              </div>
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">{education.school}</h3>
                  <p className="mt-2 text-lg text-purple-accent">{education.degree}</p>
                  <p className="mt-4 text-base text-main-text/70">{education.description}</p>
                </div>
                <div className="mt-4 md:mt-0 text-base text-main-text/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-5" />
                    {education.period}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <MapPin className="size-5" />
                    {education.location}
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Work Experience */}
            <section className="bg-white rounded-3xl border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-accent/10">
                  <Briefcase className="size-6 text-purple-accent" />
                </div>
                <h2 className="text-2xl font-bold"><EditableText id="resume-work-title">工作经历</EditableText></h2>
              </div>
              {workExperience.map((work, idx) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{work.title}</h3>
                        <p className="mt-2 text-lg text-purple-accent">{work.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-base text-main-text/70">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-5" />
                          {work.period}
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <MapPin className="size-5" />
                          {work.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-base text-main-text/70 whitespace-pre-line">
                      {work.description.split('\n').map((line, index) => {
                        const lineTrimmed = line.trim();
                        const colonIndex = line.indexOf('：');

                        if (colonIndex > -1) {
                          const prefix = line.slice(0, colonIndex + 1);
                          const content = line.slice(colonIndex + 1);
                          return (
                            <div key={index} className="mb-4 last:mb-0">
                              <strong className="text-gray-900 font-bold">{prefix}</strong>
                              {content}
                            </div>
                          );
                        } else if (lineTrimmed === '') {
                          // 空行，保留换行间距
                          return <div key={index} className="h-4" />;
                        } else {
                          return (
                            <div key={index} className="mb-2">
                              {line}
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {work.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="rounded-full bg-purple-accent/10 px-4 py-2 text-base font-medium text-purple-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* 3. Core Strengths */}
            <section className="bg-white rounded-3xl border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-mint-green/10">
                  <Award className="size-6 text-mint-green" />
                </div>
                <h2 className="text-2xl font-bold"><EditableText id="resume-strengths-title">核心优势</EditableText></h2>
              </div>
              <div className="space-y-1.5">
                {coreStrengths.map((strength, idx) => (
                  <div key={idx} className="rounded-xl bg-gradient-to-br from-purple-accent/5 to-mint-green/5 p-5">
                    <h3 className="text-lg font-bold mb-1.5">{strength.title}</h3>
                    <p className="text-base text-main-text/70">{strength.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Project Experience */}
            <section className="bg-white rounded-3xl border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-purple-accent/10">
                  <FolderKanban className="size-6 text-purple-accent" />
                </div>
                <h2 className="text-2xl font-bold"><EditableText id="resume-projects-title">项目经验</EditableText></h2>
              </div>
              <div className="space-y-6">
                {projects.map((project, idx) => (
                  <div key={idx} className="pb-6 border-b last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="mt-2 md:mt-0 text-base text-mint-green font-medium">{project.period}</span>
                    </div>
                    <div className="mt-4 text-base text-main-text/70 whitespace-pre-line">
                      {project.description.split('\n').map((line, index) => {
                        const lineTrimmed = line.trim();

                        // 检查是否包含挑战或行动与结果
                        if (line.includes('挑战：')) {
                          const colonIndex = line.indexOf('：');
                          const prefix = line.slice(0, colonIndex + 1);
                          const content = line.slice(colonIndex + 1);
                          return (
                            <div key={index} className="mb-3">
                              <strong className="text-gray-900 font-bold">{prefix}</strong>
                              {content}
                            </div>
                          );
                        } else if (line.includes('我的行动与结果：')) {
                          const colonIndex = line.indexOf('：');
                          const prefix = line.slice(0, colonIndex + 1);
                          const content = line.slice(colonIndex + 1);
                          return (
                            <div key={index} className="mt-2 mb-3">
                              <strong className="text-gray-900 font-bold">{prefix}</strong>
                              {content}
                            </div>
                          );
                        } else if (lineTrimmed === '') {
                          // 空行，保留换行间距
                          return <div key={index} className="h-4" />;
                        } else {
                          return (
                            <div key={index} className="mb-2">
                              {line}
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Additional Information */}
            <section className="bg-white rounded-3xl border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-mint-green/10">
                  <Info className="size-6 text-mint-green" />
                </div>
                <h2 className="text-2xl font-bold"><EditableText id="resume-additional-info-title">附加信息</EditableText></h2>
              </div>
              <div className="space-y-4">
                {additionalInfo.map((item, idx) => (
                  <div key={idx} className="pb-4 last:pb-0">
                    <h3 className="text-lg font-bold text-purple-accent mb-1.5">{item.category}</h3>
                    <p className="text-base text-main-text/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Timeline - 20% */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="bg-white rounded-3xl border p-8">
                <h2 className="text-xl font-bold mb-6 text-center"><EditableText id="resume-timeline-title">时间轴</EditableText></h2>
                <div className="relative pl-8">
                  {/* Main timeline axis - prominent vertical line */}
                  <div className="absolute left-4 top-0 bottom-0 w-3 flex justify-center">
                    {/* Solid axis line - more visible */}
                    <div className="w-1 h-full bg-gradient-to-b from-purple-accent via-mint-green to-neon-yellow-green rounded-full shadow-sm"></div>
                    {/* Flow dot animation */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-accent to-mint-green rounded-full animate-timeline-flow shadow-lg"></div>
                  </div>

                  {timeline.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative mb-8 last:mb-0 group"
                      onMouseEnter={() => setHoveredTimelineIndex(idx)}
                      onMouseLeave={() => setHoveredTimelineIndex(null)}
                      onTouchStart={() => setHoveredTimelineIndex(idx)}
                      onTouchEnd={() => setHoveredTimelineIndex(null)}
                    >
                      {/* Dot with animation */}
                      <div
                        className={`absolute left-4 -translate-x-1/2 w-5 h-5 rounded-full transform transition-all duration-300 ${timelineColors[idx]} ${timelineAnimations[idx]} ${
                          hoveredTimelineIndex === idx
                            ? `scale-125 ring-4 ring-opacity-40 ring-offset-2 ring-offset-white ${timelineRings[idx]}`
                            : 'scale-100'
                        }`}
                      ></div>

                      {/* Timeline content */}
                      <div className="ml-4 transition-all duration-300">
                        <div className={`text-sm font-bold transition-all duration-300 ${
                          hoveredTimelineIndex === idx ? 'text-purple-accent scale-105' : 'text-main-text'
                        }`}>
                          {item.date}
                        </div>
                        <div
                          className={`mt-1 text-base text-main-text/70 overflow-hidden transition-all duration-300 ease-out ${
                            hoveredTimelineIndex === idx
                              ? 'max-h-40 opacity-100 translate-y-0 scale-100'
                              : 'max-h-0 opacity-0 -translate-y-2 scale-95'
                          }`}
                        >
                          {item.event}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-main-text/70 md:px-6">
          <p className="text-base">© {new Date().getFullYear()} <EditableText id="resume-footer-copyright">毛田蕊的个人简历. 保留所有权利。</EditableText></p>
          <p className="mt-4 text-sm"><EditableText id="resume-footer-tagline">以专业与热情服务企业客户</EditableText></p>
        </div>
      </footer>
    </div>
  )
}