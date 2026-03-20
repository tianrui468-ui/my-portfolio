"use client"

import { useEditMode } from './edit-mode-provider'
import { Button } from './ui/button'

export default function EditToggle() {
  const { isEditMode, toggleEditMode } = useEditMode()

  return (
    <Button
      variant="outline"
      size="sm"
      className={`fixed bottom-6 right-6 z-[999] border-2 ${isEditMode ? 'bg-purple-accent text-white hover:bg-purple-accent/90 border-white' : 'border-purple-accent text-purple-accent hover:bg-purple-accent/10 bg-white'}`}
      onClick={toggleEditMode}
    >
      {isEditMode ? '✏️ 编辑中' : '✏️ 编辑模式'}
    </Button>
  )
}