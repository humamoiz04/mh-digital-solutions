// Removed animations by rendering a static client component without animated classes.

import type { Metadata } from "next"
import CaseStudiesClient from "./CaseStudiesClient"

export const metadata: Metadata = {
  title: "Case Studies | MH Digital Solution",
  description:
    "Explore our case studies and see how MH Digital Solution drives real business outcomes across industries with SEO, web development, PPC, and AI automation.",
  alternates: {
    canonical: "https://www.mhdigitalsolution.com/case-studies",
  },
  openGraph: {
    title: "Case Studies | MH Digital Solution",
    description:
      "Browse results-driven client success stories across industries—SEO, web dev, PPC, content, and AI automation.",
    url: "https://www.mhdigitalsolution.com/case-studies",
    type: "website",
  },
}

export default function Page() {
  return <CaseStudiesClient />
}
