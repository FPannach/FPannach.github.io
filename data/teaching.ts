export interface Course {
  period: string
  title: string
  level: 'BSc' | 'MSc'
  collaborators?: string[]
  role?: string
}

export interface Student {
  name: string
  topic: string
  program?: string
  institution: string
  additionalInfo?: string
}

export interface SupervisionCategory {
  title: string
  students: Student[]
}

export interface AcademicYear {
  year: string
  courses: Course[]
}

export const teachingContent = {
  title: "Teaching",
}

export const academicYears: AcademicYear[] = [
  {
    year: "Academic Year 2024/25",
    courses: [
      {
        period: "Periode 1a",
        title: "Semantic Web Technology",
        level: "MSc",
        collaborators: ["Prof. G. Bouma"]
      },
      {
        period: "Periode 1b",
        title: "Database-driven Webtechnology",
        level: "BSc"
      },
      {
        period: "Periode 1b",
        title: "Digital Humanities: Tools and Methods",
        level: "MSc",
        role: "Course Coordination"
      },
      {
        period: "Periode 2a",
        title: "Analysing Data",
        level: "MSc"
      },
      {
        period: "Periode 2a",
        title: "Web Technology",
        level: "BSc",
        collaborators: ["F. Tsiwah PhD"]
      },
      {
        period: "Periode 2a",
        title: "Digital Humanities: Thesis Lab",
        level: "MSc",
        collaborators: ["Prof. S. Aasman"]
      }
    ]
  }
]

export const supervisionCategories: SupervisionCategory[] = [
  {
    title: "PhD Students",
    students: [
      {
        name: "Pritha Majumdar",
        topic: "Computational Analysis of Similes in Fiction",
        institution: "RUG"
      },
      {
        name: "Kristina Schneider",
        topic: "Co-tutelle RUG and University of Mainz",
        institution: "Germany"
      }
    ]
  },
  {
    title: "Master's Theses",
    students: [
      {
        name: "Tarjia Alam Nisha",
        topic: "Navigating the Past: Corpus Preparation and Annotation Guidelines for Identifying Valid Itineraries in Historical Travelogues",
        program: "MSc Applied Computer Science",
        institution: "University of Göttingen"
      }
    ]
  },
  {
    title: "Past Supervision",
    students: [
      {
        name: "Kristina Schneider",
        topic: "MSc Digital Humanities",
        institution: "University of Mainz, Germany"
      },
      {
        name: "Md Saiful Islam Sayef",
        topic: "MSc Applied Data Science",
        institution: "University of Göttingen, Germany"
      },
      {
        name: "Aravind Krishnan",
        topic: "DAAD Internship at University of Göttingen, Germany",
        institution: "College of Engineering Trivandrum, India"
      },
      {
        name: "Kristina Schneider",
        topic: "MSc Digital Humanities, Project Internship at University of Göttingen, Germany",
        institution: "University of Mainz, Germany"
      },
      {
        name: "Theresa Blaschke",
        topic: "MSc Digital Humanities, Project Internship at University of Göttingen, Germany",
        institution: "University of Marburg, Germany"
      }
    ]
  }
]