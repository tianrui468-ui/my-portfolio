import { Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  location: string
  description: string
  tags: string[]
  current?: boolean
  size?: "large" | "small"
}

export default function ExperienceCard({
  title,
  company,
  period,
  location,
  description,
  tags,
  current = false,
  size = "small",
}: ExperienceCardProps) {
  const isLarge = size === "large"

  return (
    <div className={cn(
      "rounded-2xl border bg-white",
      isLarge
        ? "border-purple-accent/20 p-8"
        : "border-mint-green/20 p-6"
    )}>
      {/* Header */}
      <div className={cn(
        "flex items-start justify-between",
        isLarge ? "flex-row" : "flex-col gap-2"
      )}>
        <div>
          <div className="flex items-center gap-2">
            <h3 className={cn(
              "font-bold",
              isLarge ? "text-2xl" : "text-lg"
            )}>
              {title}
            </h3>
            {current && (
              <span className="rounded-full bg-neon-yellow-green px-3 py-1 text-xs font-bold text-main-text">
                CURRENT
              </span>
            )}
          </div>
          <p className={cn(
            "text-purple-accent",
            isLarge ? "mt-2 text-xl" : "mt-1 text-base"
          )}>
            {company}
          </p>
        </div>

        <div className={cn(
          "text-main-text/70",
          isLarge ? "text-right" : "text-left"
        )}>
          <div className="inline-flex items-center gap-1">
            <Calendar className="size-4" />
            {period}
          </div>
          <div className={cn(
            "inline-flex items-center gap-1",
            isLarge ? "mt-1 block" : "ml-3"
          )}>
            <MapPin className="size-4" />
            {location}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={cn(
        "mt-6 text-main-text/70",
        isLarge ? "text-base" : "text-sm"
      )}>
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className={cn(
          "mt-6 flex flex-wrap gap-2",
          isLarge ? "mt-6" : "mt-4"
        )}>
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-3 py-1 text-sm font-medium",
                isLarge
                  ? "bg-purple-accent/10 text-purple-accent"
                  : "bg-mint-green/10 text-mint-green"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}