"use client"

import { useEditMode } from './edit-mode-provider'
import { useState, useRef, useEffect } from 'react'

interface EditableTextProps {
  id: string
  children?: string
  defaultValue?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  className?: string
  placeholder?: string
  multiline?: boolean
}

export default function EditableText({
  id,
  children,
  defaultValue,
  as = 'span',
  className = '',
  placeholder = '点击编辑文字...',
  multiline = false
}: EditableTextProps) {
  const { isEditMode } = useEditMode()
  const initialText = children || defaultValue || ''
  const [text, setText] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(`editable-${id}`)
      return saved !== null ? saved : initialText
    }
    return initialText
  })
  const [isEditing, setIsEditing] = useState(false)
  const editableRef = useRef<any>(null)

  // Save text to localStorage
  const saveText = (value: string) => {
    setText(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(`editable-${id}`, value)
    }
  }

  // Handle click to start editing
  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true)
      setTimeout(() => {
        if (editableRef.current) {
          editableRef.current.focus()
          // Move cursor to end
          const range = document.createRange()
          const sel = window.getSelection()
          range.selectNodeContents(editableRef.current)
          range.collapse(false)
          sel?.removeAllRanges()
          sel?.addRange(range)
        }
      }, 10)
    }
  }

  // Handle blur to save and stop editing
  const handleBlur = () => {
    if (isEditing) {
      setIsEditing(false)
      if (editableRef.current) {
        const newText = editableRef.current.textContent || ''
        saveText(newText)
      }
    }
  }

  // Handle keydown (Enter to save, Escape to cancel)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault()
      editableRef.current?.blur()
    } else if (e.key === 'Escape') {
      if (editableRef.current) {
        editableRef.current.textContent = text
      }
      editableRef.current?.blur()
    }
  }

  // Determine which element to render
  const Element = as
  const isInline = as === 'span'

  if (isEditMode) {
    const editClasses = `relative ${isInline ? 'inline-block' : ''} ${isEditing ? 'outline-none border-dashed border-2 border-purple-accent p-2 rounded' : 'border-dashed border border-purple-accent/50 hover:border-purple-accent cursor-pointer p-2 rounded'} ${className}`

    return (
      <Element
        className={editClasses}
        onClick={handleClick}
        suppressContentEditableWarning
        contentEditable={isEditing}
        ref={editableRef}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        {text || placeholder}
        {isEditMode && !isEditing && (
          <div className="absolute -top-2 -right-2 bg-purple-accent text-white text-xs px-1.5 py-0.5 rounded">
            编辑
          </div>
        )}
      </Element>
    )
  }

  return <Element className={className}>{text}</Element>
}