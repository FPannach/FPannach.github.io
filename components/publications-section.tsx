"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { publications, publicationsContent, publicationCategories } from '@/data/publications'

export function PublicationsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedType, setSelectedType] = useState<string>('All')
  const [showAbstract, setShowAbstract] = useState<{ [key: number]: boolean }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const publicationTypes = ['All', ...Object.keys(publicationCategories).filter(type => publicationCategories[type as keyof typeof publicationCategories].length > 0)]

  const filteredPublications = selectedType === 'All' ? publications : publications.filter(p => p.type === selectedType)

  const toggleAbstract = (index: number) => {
    setShowAbstract(prev => ({ ...prev, [index]: !prev[index] }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])


  return (
    <section id="publications" ref={sectionRef} className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-balance">{publicationsContent.title}</h2>
              <div className="w-24 h-px bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
                {publicationsContent.description}
              </p>

              {/* Publication type filters */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {publicationTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="text-xs"
                  >
                    {type} {type !== 'All' && `(${publicationCategories[type as keyof typeof publicationCategories]?.length || 0})`}
                  </Button>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Showing {filteredPublications.length} of {publications.length} publications
              </p>
            </div>

            {/* Compact publication list */}
            <div className="space-y-3">
              {filteredPublications.map((pub, index) => (
                <div
                  key={index}
                  className={`bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 ${
                    isVisible ? "animate-slide-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-2">
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {pub.type}
                        </Badge>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground leading-tight mb-1 hover:text-primary cursor-pointer transition-colors">
                            {pub.title}
                          </h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p className="font-medium text-primary">{pub.venue}</p>
                            <div className="flex items-center gap-4 text-xs">
                              <span>{pub.year}</span>
                              {pub.pages && <span>{pub.pages}</span>}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground shrink-0">
                          {pub.year}
                        </div>
                      </div>

                      {/* Abstract toggle */}
                      {pub.abstract && (
                        <div className="mt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleAbstract(index)}
                            className="text-xs text-muted-foreground hover:text-primary p-0 h-auto"
                          >
                            {showAbstract[index] ? 'Hide' : 'Show'} Abstract
                          </Button>
                          {showAbstract[index] && (
                            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                              {pub.abstract}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex gap-2 mt-3">
                        {pub.link && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent h-7"
                            onClick={() => window.open(pub.link?.url, '_blank')}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            {pub.link.text}
                          </Button>
                        )}
                        {pub.doi && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-muted-foreground hover:text-primary h-7"
                            onClick={() => window.open(`https://doi.org/${pub.doi}`, '_blank')}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            DOI
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
