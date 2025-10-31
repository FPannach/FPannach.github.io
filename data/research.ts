export interface ResearchProject {
  title: string
  description: string
  tags: string[]
  status: string
  year: string
}

export const projects: ResearchProject[] = [
  {
    title: "GOLEM: Graph Ontologies for Literary Evolution Models",
    description:
      "Developing computational models to trace the evolution of literary narratives using graph ontologies and semantic web technologies for comparative mythology studies.",
    tags: ["Semantic Web", "Graph Ontologies", "Literary Evolution"],
    status: "Ongoing",
    year: "2024-Present",
  },
  {
    title: "DFG Myth Research Group STRATA",
    description:
      "Collaborative research project analyzing mythological narratives across cultures using computational methods to understand narrative patterns and cultural transmission.",
    tags: ["Comparative Mythology", "Cultural Analysis", "Narrative Modeling"],
    status: "Completed",
    year: "2019-Present",
  },
  {
    title: "Narrative Echoes across Time and Space",
    description:
      "Doctoral research exploring computational approaches to identifying and analyzing recurring narrative patterns in mythological and folkloric texts across different cultures.",
    tags: ["NLP", "Computational Folkloristics", "Cross-cultural Analysis"],
    status: "Completed",
    year: "2019-2023",
  },
]

export const researchContent = {
  title: "Current Research Projects",
  description: "Developing computational methods to analyze narratives, mythologies, and folkloric texts using Natural Language Processing and Semantic Web technologies."
}