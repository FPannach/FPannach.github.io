'use client'

import { teachingContent, academicYears, supervisionCategories } from '@/data/teaching'

export function TeachingSection() {
  return (
    <section id="teaching" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 text-balance">{teachingContent.title}</h2>
            <div className="w-24 h-px bg-primary mb-8" />
          </div>

        <div className="space-y-8">
          {academicYears.map((year, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{year.year}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {year.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>
                    {course.period}: {course.title} ({course.level}
                    {course.collaborators && `, with ${course.collaborators.join(', ')}`}
                    {course.role && `, ${course.role}`})
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xl font-semibold mb-4">Supervision</h3>

            <div className="space-y-4">
              {supervisionCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium mb-2">{category.title}</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {category.students.map((student, studentIndex) => (
                      <li key={studentIndex}>
                        {student.name}, {student.topic}
                        {student.program && `, ${student.program}`}, {student.institution}
                        {student.additionalInfo && ` (${student.additionalInfo})`}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}