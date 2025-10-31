export interface HeroContent {
  name: string
  title: string
  subtitle: string
  image: {
    src: string
    alt: string
  }
  buttons: {
    primary: {
      text: string
      action: string
    }
    secondary: {
      text: string
      action: string
    }
  }
}

export interface Quote {
  text: string
  author: string
  work: string
  year: string
}

export const heroContent: HeroContent = {
  name: "Dr. Franziska A. Pannach",
  title: "Assistant Professor in Information Science & Digital Humanities",
  subtitle: "Modeling and analyzing narratives using NLP and Semantic Web technologies. Specializing in computational approaches to mythological and folkloric narratives at the University of Groningen.",
  image: {
    src: "/franzi.jpg",
    alt: "Professional portrait"
  },
  buttons: {
    primary: {
      text: "Explore My Work",
      action: "about"
    },
    secondary: {
      text: "Get In Touch",
      action: "contact"
    }
  }
}

export const heroQuote: Quote = {
  text: "\"He has got no good red blood in his body,\"\n said Sir James.\n\"No, somebody put a drop under a magnifying-glass,\n and it was all semicolons and parentheses,\" \nsaid Mrs Cadwallader.",
  author: "George Eliot",
  work: "Middlemarch",
  year: "1871"
}