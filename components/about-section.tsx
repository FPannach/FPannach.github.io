"use client"

import { useEffect, useRef, useState } from "react"
import { aboutContent } from '@/data/about'

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-balance">{aboutContent.title}</h2>
              <div className="w-24 h-px bg-primary mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Research Interests</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {aboutContent.researchInterests.map((interest, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {interest}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Current Position</h3>
                  <p className="text-muted-foreground">
                    {aboutContent.currentPosition.title}
                    <br />
                    {aboutContent.currentPosition.department}
                    <br />
                    {aboutContent.currentPosition.university}, {aboutContent.currentPosition.country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
