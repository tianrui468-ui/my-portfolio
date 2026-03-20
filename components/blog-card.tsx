import { Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  tags: string[]
  readTime: string
  date: string
  color?: "purple" | "mint" | "neon"
  showImage?: boolean
  compact?: boolean
}

export default function BlogCard({
  title,
  excerpt,
  category,
  tags,
  readTime,
  date,
  color = "purple",
  showImage = false,
  compact = false,
}: BlogCardProps) {
  const colorClasses = {
    purple: "bg-purple-accent/10 text-purple-accent",
    mint: "bg-mint-green/10 text-mint-green",
    neon: "bg-neon-yellow-green/20 text-main-text",
  }

  return (
    <article className={cn(
      "group overflow-hidden rounded-2xl border bg-white transition-all hover:shadow-lg",
      compact ? "p-4" : "p-6"
    )}>
      {showImage && (
        <div className="mb-4 h-48 w-full rounded-xl bg-gradient-to-br from-purple-accent/30 to-mint-green/30" />
      )}

      {/* Category Badge */}
      <div className={cn("mb-4", compact ? "pb-0" : "pb-0")}>
        <span className={cn(
          "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
          colorClasses[color]
        )}>
          <Tag className="size-3" />
          {category}
        </span>
      </div>

      {/* Content */}
      <div>
        <h2 className={cn(
          "font-semibold group-hover:text-purple-accent",
          compact ? "text-lg" : "text-xl"
        )}>
          <a href="#" className="hover:underline">
            {title}
          </a>
        </h2>
        <p className={cn(
          "mt-3 text-main-text/70",
          compact ? "text-sm" : "text-base"
        )}>
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-warm-white px-2 py-1 text-xs text-main-text/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta Info */}
        <div className={cn(
          "flex items-center justify-between text-main-text/50",
          compact ? "mt-4 text-xs" : "mt-6 text-sm"
        )}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="size-4" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="size-4" />
              {readTime}
            </div>
          </div>
          {!compact && (
            <Button variant="ghost" size="sm" className="group/btn">
              Read More
              <span className="ml-1 transition-transform group-hover/btn:translate-x-1">→</span>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}