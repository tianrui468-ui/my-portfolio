"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface EditContextType {
  isEditMode: boolean
  toggleEditMode: () => void
  enableEditMode: () => void
  disableEditMode: () => void
}

const EditContext = createContext<EditContextType | undefined>(undefined)

export function EditProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('edit-mode')
      return saved === 'true'
    }
    return false
  })

  // Save edit mode to localStorage when it changes
  useEffect(() => {
    window.localStorage.setItem('edit-mode', String(isEditMode))
  }, [isEditMode])

  const toggleEditMode = () => {
    setIsEditMode(prev => !prev)
  }

  const enableEditMode = () => {
    setIsEditMode(true)
  }

  const disableEditMode = () => {
    setIsEditMode(false)
  }

  return (
    <EditContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        enableEditMode,
        disableEditMode
      }}
    >
      {children}
    </EditContext.Provider>
  )
}

export function useEdit() {
  const context = useContext(EditContext)
  if (context === undefined) {
    throw new Error('useEdit must be used within an EditProvider')
  }
  return context
}