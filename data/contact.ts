export interface ContactInfo {
  email: string
  phone: string
  address: {
    building: string
    street: string
    city: string
    country: string
  }
  officeHours: string
}

export interface CollaborationArea {
  title: string
  description: string
  areas: string[]
}

export const contactInfo: ContactInfo = {
  email: "f.a.pannach@rug.nl",
  phone: "+31 50 363 9111",
  address: {
    building: "Centre for Language and Cognition (CLCG)",
    street: "Oude Kijk in 't Jatstraat 26",
    city: "9712 EK Groningen, Netherlands",
    country: "Netherlands"
  },
  officeHours: "By appointment\nContact via email"
}

export const collaborationInfo: CollaborationArea = {
  title: "Collaboration Opportunities",
  description: "I am always interested in discussing potential collaborations, research partnerships, and speaking opportunities in the field of digital humanities.",
  areas: [
    "Joint research projects",
    "Conference presentations",
    "Workshop facilitation",
    "Graduate student mentoring"
  ]
}

export const contactContent = {
  title: "Get In Touch",
  description: "I welcome collaborations, speaking opportunities, and discussions about computational approaches to narrative analysis, digital humanities research, and mythological studies."
}