"use client"

import { useState, useRef, useEffect } from "react"

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(0) // 默认最左边位置
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // 处理鼠标拖动
  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  // 处理触摸屏拖动
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const touch = e.touches[0]
    const x = touch.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleMouseMove(e)
    }

    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [isDragging])

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* 上半部分：文字标题区 */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 px-4">
        {/* 左边：BEFORE */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <div className="inline-block px-4 py-1.5 bg-gray-300 text-gray-700 rounded-full text-sm font-medium mb-4">
            BEFORE
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            项目实施顾问
          </h3>
          <p className="text-lg text-gray-600">
            技术执行 · 需求理解 · 项目交付
          </p>
        </div>

        {/* 中间箭头 */}
        <div className="hidden md:flex items-center justify-center mx-8">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* 右边：AFTER */}
        <div className="flex-1 text-center md:text-right">
          <div className="inline-block px-4 py-1.5 bg-[#C8F135] text-gray-900 rounded-full text-sm font-medium mb-4">
            AFTER
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            企业销售顾问
          </h3>
          <p className="text-lg text-gray-600">
            顾问式销售 · 挖掘价值 · 推动成交
          </p>
        </div>
      </div>

      {/* 下半部分：图片滑动对比区 */}
      <div className="relative">
        <div
          ref={containerRef}
          className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-ew-resize"
          onMouseDown={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchStart={() => {
            handleMouseDown()
          }}
        >
          {/* 底层：未来的我 */}
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{ background: '#7DD4B0' }}
          >
            <div className="text-white text-center p-6">
              <div className="text-4xl font-bold mb-3">我的未来</div>
              <p className="text-lg opacity-90">顾问式销售 · 挖掘价值 · 推动成交</p>
            </div>
          </div>

          {/* 上层：从前的我 - 通过clip-path实现滑动覆盖效果 */}
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{
              background: '#B8B3E8',
              clipPath: `inset(0 0 0 ${sliderPosition}%)`
            }}
          >
            <div className="text-white text-center p-6">
              <div className="text-4xl font-bold mb-3">我的从前</div>
              <p className="text-lg opacity-90">技术执行 · 需求理解 · 项目交付</p>
            </div>
          </div>

          {/* 分割线和拖动手柄 */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white/80 shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              {/* 左右箭头图标 */}
              <svg className="w-4 h-4 text-gray-700 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>

          {/* 提示文字 */}
          <div className="absolute bottom-3 left-3 text-white/80 text-sm font-medium">
            向右拖动竖线 ←→ 揭开未来的我
          </div>
        </div>
      </div>
    </div>
  )
}