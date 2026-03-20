import Nav from "@/components/nav"
import { Button } from "@/components/ui/button"
import EditableText from "@/components/editable-text"
import { Calendar, Clock, Tag, ChevronRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "捷成洋行采购项目",
      excerpt: "挑战：客户二期救急项目，涉及供应商管理、预算、采购全流程，需求复杂，且因前期进度严重落后问题，客户对项目团队极度不信任。\n\n我的行动与结果：临危受命，作为核心沟通人，前期花时间倾听客户反馈，理解其真实顾虑。随后，将庞大需求拆解为可落地的阶段性目标，每天、每周向客户决策层汇报可视化成果，逐步重新建立客户信任。在长达3个阶段的迭代中，不仅是方案输出及执行者，更是客户信赖的供应商顾问。最终项目圆满落地，客户从不信任转变为发来表扬信。",
      category: "救急项目",
      tags: ["信任重建", "决策层沟通", "顾问式陪伴"],
      readTime: "5 分钟阅读",
      date: "2025年1月15日",
      color: "purple",
    },
    {
      id: 2,
      title: "上海生物医药技术研究院信创项目",
      excerpt: "挑战：客户要求替换旧系统，涉及100+条流程搭建，项目周期紧、成员少，进度一度滞后，客户满意度低。\n\n我的行动与结果：我及时调整策略，主动向客户重新制定阶段性汇报计划，每周展示项目成果，让客户看到进展。同时向上级争取资源，成功拉回了项目进度，得到了客户方领导的赞赏与认可。",
      category: "信创",
      tags: ["预期管理", "向上资源争取"],
      readTime: "5 分钟阅读",
      date: "2024年11月28日",
      color: "mint",
    },
    {
      id: 3,
      title: "丰华生物财务预算项目",
      excerpt: "挑战：客户预算逻辑极其复杂，标准产品无法满足，需大量二次开发。更棘手的是，内部开发团队人员频繁变动，项目面临延期风险。\n\n我的行动与结果：我没有被动等待，而是主动\"管理\"开发资源。反复向每一位新接手的开发清晰传递需求内容和客户期望，设立清晰的短期开发目标，不断在客户和开发团队之间进行沟通翻译，确保双方理解一致。最后成功如期上线复杂的预算管理体系，客户对交付效果非常满意，项目顺利回款。",
      category: "财务系统",
      tags: ["复杂需求转化", "跨部门协调推进", "回款达成"],
      readTime: "5 分钟阅读",
      date: "2024年9月20日",
      color: "neon",
    },
  ]

  const categories = [
    { name: "全部", count: 3 },
    { name: "救急项目", count: 1 },
    { name: "信创", count: 1 },
    { name: "财务系统", count: 1 },
    { name: "项目管理", count: 3 },
  ]

  const tags = [
    "信任重建", "决策层沟通", "顾问式陪伴", "预期管理", "向上资源争取", "复杂需求转化", "跨部门协调推进", "回款达成", "信创", "财务系统",
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-purple-accent text-white"
      case "mint":
        return "bg-mint-green text-white"
      case "neon":
        return "bg-neon-yellow-green text-white"
      default:
        return "bg-purple-accent text-white"
    }
  }

  const getTagColorClasses = (index: number) => {
    const colors = [
      "bg-purple-accent text-white",
      "bg-mint-green text-white",
      "bg-neon-yellow-green text-white",
      "bg-purple-accent/90 text-white",
      "bg-mint-green/90 text-white",
      "bg-neon-yellow-green/90 text-white"
    ];
    return colors[index % colors.length];
  }

  return (
    <div className="min-h-screen bg-warm-white text-main-text">
      <Nav />

      <main className="container mx-auto px-4 py-12 md:px-6 lg:py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight"><EditableText id="blog-header-title">项目经验</EditableText></h1>
          <p className="mt-4 text-base text-main-text/70">
            <EditableText id="blog-header-subtitle">分享OA软件实施与项目管理的实战经验与成果</EditableText>
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-10">

              {/* Categories */}
              <div className="rounded-2xl border bg-white p-8">
                <h3 className="mb-6 text-xl font-semibold"><EditableText id="blog-categories-title">分类</EditableText></h3>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat.name} className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-main-text/70 hover:text-main-text text-lg"
                      >
                        {cat.name}
                        <span className="ml-auto text-base text-main-text/50">({cat.count})</span>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="rounded-2xl border bg-white p-8">
                <h3 className="mb-6 text-xl font-semibold"><EditableText id="blog-tags-title">热门标签</EditableText></h3>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag) => (
                    <Button
                      key={tag}
                      variant="outline"
                      size="sm"
                      className="border-purple-accent/20 text-base text-main-text/70 hover:bg-purple-accent/10 hover:text-purple-accent"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats */}
            <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 text-center">
                <div className="text-3xl font-bold text-purple-accent">10+</div>
                <div className="mt-2 text-base text-main-text/70"><EditableText id="blog-stats-1-label">项目总数</EditableText></div>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center">
                <div className="text-3xl font-bold text-mint-green">10+</div>
                <div className="mt-2 text-base text-main-text/70"><EditableText id="blog-stats-2-label">服务企业</EditableText></div>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center">
                <div className="text-3xl font-bold text-neon-yellow-green">100%</div>
                <div className="mt-2 text-base text-main-text/70"><EditableText id="blog-stats-3-label">客户满意度</EditableText></div>
              </div>
              <div className="rounded-2xl bg-white p-6 text-center">
                <div className="text-3xl font-bold text-purple-accent">500W+</div>
                <div className="mt-2 text-base text-main-text/70"><EditableText id="blog-stats-4-label">项目总金额</EditableText></div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-3xl border bg-white transition-all hover:shadow-xl"
                >
                  {/* Category Badge */}
                  <div className="p-8 pb-0">
                    <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${getColorClasses(post.color)}`}>
                      <Tag className="size-4" />
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-semibold group-hover:text-purple-accent">
                      <a href="#" className="hover:underline">
                        {post.title}
                      </a>
                    </h2>
                    <div className="mt-4 text-base text-main-text/70 whitespace-pre-line">
                      {post.excerpt.split('\n').map((line, index) => {
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

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1.5 text-sm font-medium ${getTagColorClasses(tagIndex)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-main-text/70 md:px-6">
          <p className="text-base">© {new Date().getFullYear()} <EditableText id="blog-footer-copyright">毛田蕊的项目经验. 保留所有权利。</EditableText></p>
          <p className="mt-4 text-sm"><EditableText id="blog-footer-tagline">与企业客户分享实施经验与解决方案</EditableText></p>
        </div>
      </footer>
    </div>
  )
}