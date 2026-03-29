'use client'

import { experiences } from '@/data/cv'

export function CVSection() {

  return (
    <section id="cv" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-balance">Curriculum Vitae</h2>
            <div className="w-24 h-px bg-primary mb-8" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border"></div>

            <div className="space-y-8">
              {experiences.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 md:gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full border-4 border-background"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.institution && (
                      <p className="text-muted-foreground">
                        {item.institution}
                      </p>
                    )}
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