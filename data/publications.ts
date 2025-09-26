export interface Publication {
  title: string
  authors?: string[]
  venue: string
  year: string
  type: 'Journal' | 'Conference' | 'Book Chapter' | 'Book' | 'Thesis' | 'Workshop'
  pages?: string
  doi?: string
  link?: {
    url: string
    text: string
  }
  abstract?: string
}

export const publications: Publication[] = [
  {
    title: "Narrative Echoes across Time and Space: A Computational Approach to Cross-Cultural Mythological Analysis",
    venue: "University of Göttingen",
    year: "2023",
    type: "Thesis",
    link: {
      url: "https://example.com/doctoral-thesis",
      text: "Doctoral Thesis"
    },
    abstract: "This doctoral thesis explores computational methods for identifying and analyzing recurring narrative patterns in mythological and folkloric texts across different cultures, using NLP and semantic web technologies.",
  },
  {
    title: "Graph Ontologies for Comparative Mythology: Modeling Narrative Evolution",
    venue: "Digital Humanities Quarterly",
    year: "2024",
    type: "Journal",
    pages: "15(2): 45-68",
    link: {
      url: "https://example.com/golem-paper",
      text: "Read Article"
    },
    abstract: "Presents the GOLEM framework for modeling literary evolution using graph ontologies and semantic web technologies, with applications to comparative mythology studies.",
  },
  {
    title: "Computational Approaches to Folkloric Narrative Analysis",
    venue: "Journal of Digital Humanities Association of Southern Africa",
    year: "2023",
    type: "Journal",
    pages: "8(1): 12-29",
    link: {
      url: "https://example.com/folkloric-analysis",
      text: "View Publication"
    },
    abstract: "Explores novel computational methods for analyzing folkloric narratives, demonstrating how NLP techniques can reveal cross-cultural narrative patterns and thematic structures.",
  },
  {
    title: "Semantic Web Technologies in Digital Mythological Studies",
    venue: "Digital Humanities Conference Proceedings",
    year: "2022",
    type: "Conference",
    pages: "234-239",
    link: {
      url: "https://example.com/semantic-web-myth",
      text: "Conference Paper"
    },
    abstract: "Discusses the application of semantic web technologies to mythological research, presenting methodologies for creating linked data representations of mythological narratives.",
  },
  {
    title: "Digital Methods in Comparative Mythology",
    venue: "Handbook of Digital Humanities",
    year: "2023",
    type: "Book Chapter",
    pages: "Ch. 12, pp. 287-315",
    link: {
      url: "https://example.com/handbook-chapter",
      text: "Read Chapter"
    },
    abstract: "Overview of computational approaches to mythological analysis, including case studies and methodological considerations.",
  },
  {
    title: "Cross-Cultural Narrative Patterns in Folklore",
    venue: "International Conference on Computational Linguistics",
    year: "2022",
    type: "Conference",
    pages: "1205-1210",
    doi: "10.18653/v1/2022.coling-1.123",
    abstract: "Identifying recurring narrative motifs across different cultural traditions using NLP techniques.",
  },
  {
    title: "Ontological Modeling of Mythological Narratives",
    venue: "Semantic Web Journal",
    year: "2021",
    type: "Journal",
    pages: "12(4): 567-584",
    link: {
      url: "https://example.com/ontological-modeling",
      text: "Full Text"
    },
    abstract: "Framework for representing mythological knowledge using semantic web standards and linked data principles.",
  },
  {
    title: "Machine Learning for Folklore Classification",
    venue: "Workshop on Digital Humanities and AI",
    year: "2021",
    type: "Workshop",
    pages: "23-28",
    link: {
      url: "https://example.com/ml-folklore",
      text: "Workshop Paper"
    },
    abstract: "Automated classification of folkloric texts using supervised learning approaches.",
  }
]
export const publicationsContent = {
  title: "Publications",
  description: "Selected publications in digital humanities, computational linguistics, and mythological studies showcasing innovative approaches to narrative analysis."
}


/* DO NOT MODIFY */
export const publicationCategories = publications.reduce((categories, pub) => {
  if (!categories[pub.type]) {
    categories[pub.type] = []
  }
  categories[pub.type].push(pub)
  return categories
}, {} as Record<string, typeof publications>)


/* DO NOT MODIFY */
export const publicationStats = {
  total: publications.length,
  byType: Object.fromEntries(
    Object.entries(publicationCategories).map(([type, pubs]) => [type, pubs.length])
  )
}