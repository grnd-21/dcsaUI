"use client"

import { useState } from "react"
import { ChevronDown, X } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  isExpanded?: boolean
  onToggle?: () => void
}

export function FAQItem({ question, answer, isExpanded = false, onToggle }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(isExpanded)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    onToggle?.()
  }

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={handleToggle}
        className="w-full py-6 text-left flex items-center justify-between group hover:bg-muted/30 transition-colors px-4 -mx-4 rounded-lg"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-foreground pr-8 text-balance">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <X className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="pb-6 px-4 -mx-4">
          <div className="text-muted-foreground leading-relaxed">{answer}</div>
        </div>
      )}
    </div>
  )
}
