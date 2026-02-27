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
  // Theses
  {
    title: "Narrative Echoes across Time and Space: Comparative Analysis of Structural Similarities in Myth and Folktale Sequences",
    venue: "University of Göttingen",
    year: "2024",
    type: "Thesis",
    link: {
      url: "http://dx.doi.org/10.53846/goediss-10349",
      text: "Doctoral Thesis"
    }
  },
  {
    title: "An ontology-driven information system based on Vladimir Propp's morphology of the folktale for southern African folktales",
    venue: "University of Göttingen",
    year: "2019",
    type: "Thesis",
    link: {
      url: "http://www.dbis.informatik.uni-goettingen.de/teaching/Theses/PDF/MSc-Pannach-Folktales-mrz-2019.pdf",
      text: "MSc"
    }
  },
  // Book Chapters
  {
    title: "To live and to lose: A regular grammar for the hylistic comparison of the narrative materials of Orpheus and Eurydice",
    authors: ["Franziska Pannach"],
    venue: "Mächte und Unterwelt in mesopotamischen und griechischen Quellen, Mythological Studies (MythoS), de Gruyter",
    year: "2026",
    type: "Book Chapter",
    abstract: "Forthcoming book chapter on narrative comparison using regular grammar approaches."
  },
  {
    title: "Humanities in a Digital World",
    authors: ["Caroline Sporleder", "Franziska Pannach"],
    venue: "The Edinburgh Companion to the New European Humanities, Edinburgh University Press",
    year: "2024",
    type: "Book Chapter",
    link: {
      url: "https://edinburghuniversitypress.com/book-the-edinburgh-companion-to-the-new-european-humanities.html",
      text: "Open Access"
    }
  },
  {
    title: "Negotiating the possibilities digital humanities offers Media and Cultural Studies for crisis curriculum adjustments in the time of COVID-19",
    authors: ["Anusharani Sewchurran", "Franziska Pannach"],
    venue: "Alternation African Scholarship Book Series (AASBS)",
    year: "2020",
    type: "Book Chapter",
    pages: "48-75",
    link: {
      url: "https://web.archive.org/web/20210206064343id_/http://alternation.ukzn.ac.za/Files/books/series/04/12-aasbs-04-full-text.pdf#page=69",
      text: "Web Archive"
    }
  },
  // Journal Articles and Conference Papers
  {
    title: "The GOLEM Triple Store: A Graph-Based Representation of Narrative and Fiction",
    authors: ["Franziska Pannach", "Xiaoyan Yang", "Noa Visser Solissa", "Ze Yu", "Andreas van Cranenburgh", "Michiel van der Ree", "Federico Pianzola"],
    venue: "Proceedings of the Semantic Methods for Events and Stories (SEMMES) Workshop at ESWC",
    year: "2024",
    type: "Workshop",
    link: {
      url: "https://ceur-ws.org/Vol-3749/SEMMES_2024_paper_3.pdf",
      text: "Open Access"
    }
  },
  {
    title: "Modelling and comparison of narrative domains with shallow ontologies",
    authors: ["Franziska Pannach", "Theresa Blaschke"],
    venue: "Proceedings of the 4th Conference on Language, Data and Knowledge (LDK2023)",
    year: "2023",
    type: "Conference",
    pages: "274–280",
    link: {
      url: "https://aclanthology.org/2023.ldk-1.26/",
      text: "Open Access"
    }
  },
  {
    title: "'Orpheus Came to His End by Being Struck by a Thunderbolt': Annotating Events in Mythological Sequences",
    authors: ["Franziska Pannach"],
    venue: "Proceedings of the 17th Linguistic Annotation Workshop (LAW-XVII)",
    year: "2023",
    type: "Workshop",
    pages: "10–18",
    link: {
      url: "https://aclanthology.org/2023.law-1.2/",
      text: "Open Access"
    }
  },
  {
    title: "An issue public's confirmation-biased news feeding in changing political constellations: A quasi-experimental field study in the German conflict over genome editing",
    authors: ["Senja Post", "Nils Bienzeisler", "Franziska Pannach"],
    venue: "New Media & Society",
    year: "2023",
    type: "Journal",
    link: {
      url: "https://doi.org/10.1177/14614448231185764",
      text: "Open Access"
    }
  },
  {
    title: "Of lions and Yakshis",
    authors: ["Franziska Pannach", "Caroline Sporleder", "Wolfgang May", "Aravind Krishnan", "Anusharani Sewchurran"],
    venue: "Semantic Web",
    year: "2021",
    type: "Journal",
    pages: "12(2): 219–239"
  },
  {
    title: "Cracking a Walnut with a Sledgehammer: XLM-RoBERTa for German Verbal Idiom Disambiguation Tasks",
    authors: ["Franziska Pannach", "Tillmann Dönicke"],
    venue: "Proceedings of the Shared Task on German Verbal Idiom Disambiguation at KONVENS",
    year: "2021",
    type: "Conference",
    link: {
      url: "https://zenodo.org/records/5769286",
      text: "Open Access"
    }
  },
  {
    title: "NLAPOST2021: 1st Shared Task on Part-of-Speech Tagging for Nguni Languages",
    authors: ["Franziska Pannach", "Francois Meyer", "Edgar Jembere", "Sibonelo Zamokuhle Dlamini"],
    venue: "Proceedings of the International Conference of the Digital Humanities Association of Southern Africa (DHASA)",
    year: "2021",
    type: "Conference",
    link: {
      url: "https://upjournals.up.ac.za/index.php/dhasa/article/view/3865",
      text: "Open Access"
    }
  },
  {
    title: "A Unified Approach to Discourse Relation Classification in nine Languages",
    authors: ["Hanna Varachkina", "Franziska Pannach"],
    venue: "Proceedings of the 2nd Shared Task on Discourse Relation Parsing and Treebanking (DISRPT 2021)",
    year: "2021",
    type: "Workshop",
    link: {
      url: "https://aclanthology.org/2021.disrpt-1.5/",
      text: "Open Access"
    }
  },
  {
    title: "GCDH@LT-EDI-EACL2021: XLM-RoBERTa for hope speech detection in English, Malayalam, and Tamil",
    authors: ["Stefan Ziehe", "Franzi Pannach", "Aravind Krishnan"],
    venue: "Proceedings of the First Workshop on Language Technology for Equality, Diversity and Inclusion",
    year: "2021",
    type: "Workshop",
    pages: "132–135",
    link: {
      url: "https://aclanthology.org/2021.ltedi-1.19/",
      text: "Open Access"
    }
  },
  {
    title: "Employing Wikipedia as a resource for Named Entity Recognition in morphologically complex under-resourced languages",
    authors: ["Aravind Krishnan", "Stefan Ziehe", "Franziska Pannach", "Caroline Sporleder"],
    venue: "Proceedings of the 14th Workshop on Building and Using Comparable Corpora, BUCC@RANLP 2021",
    year: "2021",
    type: "Workshop",
    pages: "28–39",
    link: {
      url: "https://aclanthology.org/2021.bucc-1.5/",
      text: "Open Access"
    }
    
{
	  title: "Decoding Southern African Folktales using Hylistic Analysis",
	  authors: ["Franziska Pannach"],
	  venue: "Journal of the Digital Humanities Association of Southern Africa (DHASA)",
	  year: "2025",
	  type: "Journal Article",
	  link: {
	    url: "https://doi.org/10.55492/dhasa.v5i02.5381",
	    text: "DOI"
  }
}
    
  },
  {
    title: "Judgments of effort exerted by others are influenced by received rewards",
    authors: ["Max Rollwage", "Franziska Pannach", "Caedyn Stinson", "Ulf Toelch", "Igor Kagan", "Arezoo Pooresmaeili"],
    venue: "Scientific Reports",
    year: "2020",
    type: "Journal",
    pages: "10, 1868",
    link: {
      url: "https://doi.org/10.1038/s41598-020-58686-0",
      text: "Open Access"
    }
  },
  {
    title: "#GCDH at WNUT-2020 task 2: BERT-Based Models for the Detection of Informativeness in English COVID-19 Related Tweets",
    authors: ["Hanna Varachkina", "Stefan Ziehe", "Tillmann Dönicke", "Franziska Pannach"],
    venue: "Proceedings of the Sixth Workshop on Noisy User-generated Text, W-NUT@EMNLP 2020",
    year: "2020",
    type: "Workshop",
    pages: "462–465",
    link: {
      url: "https://aclanthology.org/2020.wnut-1.68.pdf",
      text: "Open Access"
    }
  },
  {
    title: "Deep neural network design for learning Kriegspiel, an imperfect information game",
    authors: ["Yasar Mahomed Abbas", "Anban Pillay", "Brett van Niekerk", "Franziska Pannach"],
    venue: "Proceedings of the First South African Forum for Artificial Intelligence Research in Cape Town (FAIR)",
    year: "2019",
    type: "Conference",
    link: {
      url: "https://ceur-ws.org/Vol-2540/FAIR2019_paper_57.pdf",
      text: "Abstract"
    }
  },
  {
	title: "The GOLEM Ontology for Narrative and Fiction",
	authors: ["Federico Pianzola", "Luotong Cheng", "Franziska Pannach", "Xiaoyan Yang", "Luca Scotti"],
	venue: "Humanities, Volume 14, Issue 10",
	year: "2025",
	type: "Journal",
	link: {
		url: "https://www.mdpi.com/2076-0787/14/10/193",
		text: "Open Access"
  },
{
  title: "Grounding the Development of an Ontology for Narrative and Fiction",
  authors: ["Luca Scotti", "Federico Pianzola", "Franziska Pannach"],
  venue: "Semantic Web – Interoperability, Usability, Applicability",
  year: "2025",
  type: "Journal"
}
}

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
