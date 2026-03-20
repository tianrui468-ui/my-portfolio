"use client"

import { useEditMode } from './edit-mode-provider'
import { useState, useRef } from 'react'

interface EditableImageProps {
  id: string
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  placeholder?: React.ReactNode
}

export default function EditableImage({
  id,
  src,
  alt,
  className = '',
  width,
  height,
  placeholder
}: EditableImageProps) {
  const { isEditMode } = useEditMode()
  const [imageSrc, setImageSrc] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(`editable-image-${id}`)
      return saved || src
    }
    return src
  })
  const [isHovered, setIsHovered] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Save image to localStorage
  const saveImage = (src: string) => {
    setImageSrc(src)
    window.localStorage.setItem(`editable-image-${id}`, src)
  }

  // Handle image click in edit mode
  const handleClick = () => {
    if (isEditMode && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      alert('请选择图片文件')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      if (result) {
        saveImage(result)
      }
    }
    reader.readAsDataURL(file)

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Render placeholder if no image source
  if (!imageSrc && placeholder) {
    return (
      <div className={`relative ${className}`}>
        <div
          className={`flex items-center justify-center ${isEditMode ? 'border-dashed border-2 border-purple-accent/50 hover:border-purple-accent cursor-pointer' : ''} ${className}`}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ width, height }}
        >
          {placeholder}
        </div>
        {isEditMode && isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
            <span className="text-white text-sm font-medium">点击上传图片</span>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Image */}
      <img
        src={imageSrc}
        alt={alt}
        className={`${isEditMode ? 'border-dashed border-2 border-purple-accent/50 hover:border-purple-accent cursor-pointer' : ''} ${className}`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        width={width}
        height={height}
      />

      {/* Edit mode overlay */}
      {isEditMode && isHovered && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
          <span className="text-white text-sm font-medium">点击替换图片</span>
        </div>
      )}

      {/* File input (hidden) */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Edit badge */}
      {isEditMode && !isHovered && (
        <div className="absolute -top-2 -right-2 bg-purple-accent text-white text-xs px-1.5 py-0.5 rounded">
          编辑
        </div>
      )}
    </div>
  )
}