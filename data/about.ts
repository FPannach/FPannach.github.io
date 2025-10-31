export interface AboutContent {
  title: string
  paragraphs: string[]
  researchInterests: string[]
  currentPosition: {
    title: string
    department: string
    university: string
    country: string
  }
}

export const aboutContent: AboutContent = {
  title: "About My Research",
  paragraphs: [
    "I am an Assistant Professor in Information Science & Digital Humanities at the Centre for Language and Cognition (CLCG), Rijksuniversiteit Groningen, Netherlands, specializing in computational approaches to narrative analysis.",
    "My research focuses on modeling and analyzing mythological and folkloric narratives using Natural Language Processing and Semantic Web technologies, exploring how computational methods can reveal patterns in storytelling across cultures and time periods.",
    "Through projects like GOLEM (Graph Ontologies for Literary Evolution Models) and my work with the DFG Myth Research Group STRATA, I develop innovative digital tools for comparative narrative analysis and mythological studies."
  ],
  researchInterests: [
    "Natural Language Processing",
    "Semantic Web Technologies",
    "Computational Folkloristics",
    "Digital Mythological Studies"
  ],
  currentPosition: {
    title: "Assistant Professor",
    department: "Centre for Language and Cognition (CLCG)",
    university: "Rijksuniversiteit Groningen",
    country: "Netherlands"
  }
}