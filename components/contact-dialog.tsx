"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import EditableText from "./editable-text"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>联系我</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-accent/10 text-purple-accent">
              📞
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-muted-foreground">电话</div>
              <EditableText
                id="contact-phone"
                as="div"
                className="text-lg font-semibold text-foreground"
                defaultValue="18049052583"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-green/10 text-mint-green">
              ✉️
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-muted-foreground">邮箱</div>
              <EditableText
                id="contact-email"
                as="div"
                className="text-lg font-semibold text-foreground"
                defaultValue="tianrui_mao@163.com"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}