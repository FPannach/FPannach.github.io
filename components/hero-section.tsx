"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { heroContent, heroQuote } from '@/data/hero'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image placeholder - replace with your actual image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroContent.image.src}
          alt={heroContent.image.alt}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6 text-balance">{heroContent.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              {heroContent.title}
            </p>
            <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
              {heroContent.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection(heroContent.buttons.primary.action)}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                {heroContent.buttons.primary.text}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 px-8 bg-transparent"
                onClick={() => scrollToSection(heroContent.buttons.secondary.action)}
              >
                {heroContent.buttons.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating quote in bottom right */}
      <blockquote className="absolute bottom-8 right-8 max-w-m text-right z-10 hidden md:block">
        <p className="text-sm italic text-muted-foreground leading-relaxed mb-2">
          {heroQuote.text.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < heroQuote.text.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
        <cite className="text-xs text-muted-foreground/80 font-light">
          — {heroQuote.author}, <em>{heroQuote.work}</em> ({heroQuote.year})
        </cite>
      </blockquote>

    </section>
  )
}
