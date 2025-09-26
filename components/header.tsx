"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-foreground">Dr. Franziska Pannach</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection("publications")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Publications
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="sm"
              className="border-primary/20 hover:border-primary hover:bg-primary/10"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
