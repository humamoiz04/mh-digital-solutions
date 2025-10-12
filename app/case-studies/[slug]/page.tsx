import { CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import { generateCaseStudyMetadata } from "@/lib/metadata"

// Placeholder for case study data
const caseStudies = [
  {
    slug: "saas-growth-strategy",
    title: "SaaS Company Achieves 300% Growth with Integrated Digital Strategy",
    industry: "Software as a Service (SaaS)",
    challenge: "Low customer acquisition cost and limited brand visibility in a competitive market.",
    solution:
      "Implemented a comprehensive digital marketing strategy including advanced SEO, targeted PPC campaigns, and content marketing focused on thought leadership. Developed a new, conversion-optimized landing page experience.",
    results: [
      "300% increase in qualified leads within 12 months.",
      "50% reduction in customer acquisition cost.",
      "Top 3 ranking for 15+ high-value keywords.",
      "25% increase in website conversion rate.",
    ],
    image: "/images/case-study-saas-growth.webp",
    content: `
      <p>A rapidly growing SaaS company approached MH Digital Solution facing challenges in scaling their customer acquisition efforts efficiently. Despite having a strong product, their online visibility was limited, and their customer acquisition cost (CAC) was higher than desired.</p>
      <h3>The Challenge</h3>
      <p>The client operated in a highly competitive SaaS market, making it difficult to stand out and attract new users organically. Their existing digital marketing efforts were fragmented, leading to inconsistent results and a high CAC.</p>
      <h3>Our Solution</h3>
      <p>We devised and executed an integrated digital strategy tailored to their specific needs:</p>
      <ul>
        <li><strong>Advanced SEO:</strong> Conducted in-depth keyword research to identify high-intent terms and optimized their website for technical SEO, on-page content, and off-page link building.</li>
        <li><strong>Targeted PPC Campaigns:</strong> Launched highly targeted Google Ads and social media campaigns with compelling ad copy and visuals, focusing on specific user segments.</li>
        <li><strong>Content Marketing:</strong> Developed a robust content strategy, producing valuable blog posts, whitepapers, and webinars that positioned the client as an industry thought leader.</li>
        <li><strong>Conversion Rate Optimization (CRO):</strong> Redesigned key landing pages to improve user experience and streamline the conversion funnel, including A/B testing various elements.</li>
      </ul>
      <h3>The Results</h3>
      <p>Within 12 months of implementing our strategy, the client achieved remarkable results:</p>
      <ul>
        <li><strong>300% Increase in Qualified Leads:</strong> A significant surge in high-quality leads entering their sales pipeline.</li>
        <li><strong>50% Reduction in Customer Acquisition Cost:</strong> Optimized campaigns led to more efficient spending and better ROI.</li>
        <li><strong>Top 3 Ranking for 15+ High-Value Keywords:</strong> Dominated search results for critical industry terms.</li>
        <li><strong>25% Increase in Website Conversion Rate:</strong> More visitors transformed into valuable leads and customers.</li>
      </ul>
      <p>This case study exemplifies how a strategic, data-driven digital approach can unlock substantial growth for SaaS businesses.</p>
    `,
  },
  {
    slug: "rebranding-digital-success",
    title: "Global Retailer's Rebranding Leads to 40% Online Sales Boost",
    industry: "Retail & E-commerce",
    challenge: "Outdated brand image and declining online engagement post-rebranding.",
    solution:
      "Executed a full digital rebranding across all platforms, including website redesign, social media strategy overhaul, and targeted digital advertising campaigns to re-engage customers.",
    results: [
      "40% increase in online sales within 6 months.",
      "25% growth in social media engagement.",
      "Improved brand perception and customer loyalty.",
      "Enhanced mobile user experience across the e-commerce platform.",
    ],
    image: "/images/case-study-rebranding.webp",
    content: `
      <p>A well-established global retailer underwent a major rebranding initiative but struggled to translate their new brand identity into digital success. Their online presence felt disconnected from the refreshed brand, leading to declining engagement and sales.</p>
      <h3>The Challenge</h3>
      <p>The client needed to seamlessly integrate their new brand identity across all digital touchpoints, re-energize their online community, and drive sales through a cohesive digital strategy that reflected their updated image.</p>
      <h3>Our Solution</h3>
      <p>MH Digital Solution implemented a comprehensive digital rebranding strategy:</p>
      <ul>
        <li><strong>Website Redesign:</strong> Developed a modern, visually appealing, and user-friendly e-commerce website that perfectly embodied the new brand aesthetics and improved navigation.</li>
        <li><strong>Social Media Strategy Overhaul:</strong> Created new content pillars, visual guidelines, and engagement strategies for all major social platforms to align with the refreshed brand voice.</li>
        <li><strong>Targeted Digital Advertising:</strong> Launched new ad campaigns on Google and social media, leveraging the new brand messaging and visuals to reach relevant audiences and drive traffic.</li>
        <li><strong>Email Marketing Revitalization:</strong> Designed new email templates and automated flows consistent with the brand, focusing on personalized customer journeys.</li>
      </ul>
      <h3>The Results</h3>
      <p>The digital rebranding efforts yielded significant positive outcomes:</p>
      <ul>
        <li><strong>40% Increase in Online Sales:</strong> A substantial boost in revenue directly attributable to the enhanced digital presence.</li>
        <li><strong>25% Growth in Social Media Engagement:</strong> Increased interactions, followers, and brand mentions across platforms.</li>
        <li><strong>Improved Brand Perception:</strong> Customer surveys indicated a stronger, more positive perception of the brand online.</li>
        <li><strong>Enhanced Mobile User Experience:</strong> The new website performed exceptionally well on mobile devices, catering to the majority of their online shoppers.</li>
      </ul>
      <p>This case study demonstrates the critical role of digital strategy in successfully executing a brand refresh and driving tangible business results.</p>
    `,
  },
  {
    slug: "mobile-banking-app-launch",
    title: "FinTech Startup Launches Secure Mobile Banking App, Gains 100K Users",
    industry: "FinTech",
    challenge: "Developing a secure, scalable, and user-friendly mobile banking application from scratch.",
    solution:
      "Provided end-to-end mobile app development, focusing on robust security features, intuitive UI/UX, and scalable backend infrastructure. Managed app store submission and initial marketing.",
    results: [
      "Successful launch of a highly secure and user-friendly mobile banking app.",
      "Acquired over 100,000 active users within the first 6 months.",
      "Achieved 4.8-star rating on app stores.",
      "Zero security incidents reported post-launch.",
    ],
    image: "/images/case-study-mobile-banking.webp",
    content: `
      <p>A promising FinTech startup aimed to disrupt the traditional banking sector by launching an innovative, secure, and user-friendly mobile banking application. They needed a partner capable of handling the entire development lifecycle, from concept to launch.</p>
      <h3>The Challenge</h3>
      <p>The primary challenges included ensuring top-tier security for financial transactions, building a highly intuitive user experience for diverse demographics, and developing a scalable backend infrastructure to support rapid user growth.</p>
      <h3>Our Solution</h3>
      <p>MH Digital Solution provided comprehensive mobile app development services:</p>
      <ul>
        <li><strong>Secure Development Practices:</strong> Implemented industry-best security protocols, end-to-end encryption, multi-factor authentication, and regular security audits.</li>
        <li><strong>Intuitive UI/UX Design:</strong> Conducted extensive user research to design a clean, simple, and highly functional interface that made complex banking tasks easy for users.</li>
        <li><strong>Scalable Backend Infrastructure:</strong> Built a robust and scalable cloud-based backend capable of handling high transaction volumes and a rapidly expanding user base.</li>
        <li><strong>Rigorous Testing:</strong> Performed extensive QA and penetration testing to identify and rectify any vulnerabilities or bugs before launch.</li>
        <li><strong>App Store Optimization (ASO) & Launch Support:</strong> Assisted with app store listings, keyword optimization, and initial launch marketing strategies.</li>
      </ul>
      <h3>The Results</h3>
      <p>The collaboration led to a highly successful product launch and rapid user adoption:</p>
      <ul>
        <li><strong>Successful App Launch:</strong> The mobile banking app was launched on both iOS and Android platforms without major issues.</li>
        <li><strong>Over 100,000 Active Users:</strong> The app quickly gained traction, attracting a significant user base within the first six months.</li>
        <li><strong>4.8-Star App Store Rating:</strong> High user satisfaction reflected in excellent ratings and positive reviews.</li>
        <li><strong>Zero Security Incidents:</strong> The robust security measures proved effective, with no reported breaches or incidents post-launch.</li>
      </ul>
      <p>This case study highlights our capability to deliver complex, secure, and user-centric mobile applications that achieve significant market penetration.</p>
    `,
  },
  {
    slug: "cloud-optimization-cost-savings",
    title: "Enterprise Achieves 30% Cost Savings with Cloud Optimization",
    industry: "Enterprise Solutions",
    challenge: "Spiraling cloud costs and inefficient resource utilization across multiple cloud environments.",
    solution:
      "Conducted a thorough cloud audit, implemented cost optimization strategies, re-architected inefficient services, and deployed automated resource management tools.",
    results: [
      "30% reduction in monthly cloud expenditure.",
      "20% improvement in application performance.",
      "Enhanced security posture and compliance.",
      "Streamlined cloud operations and reduced manual overhead.",
    ],
    image: "/images/case-study-cloud-optimization.webp",
    content: `
      <p>A large enterprise with a complex multi-cloud environment was struggling with escalating cloud costs and inefficient resource utilization. Their IT team spent significant time managing and troubleshooting, diverting resources from innovation.</p>
      <h3>The Challenge</h3>
      <p>The client's cloud infrastructure had grown organically over time, leading to orphaned resources, over-provisioned services, and a lack of centralized cost management. This resulted in unpredictable and high monthly cloud bills.</p>
      <h3>Our Solution</h3>
      <p>MH Digital Solution implemented a comprehensive cloud optimization strategy:</p>
      <ul>
        <li><strong>Cloud Environment Audit:</strong> Performed a deep dive into their existing cloud infrastructure across AWS, Azure, and Google Cloud to identify underutilized resources, cost inefficiencies, and security gaps.</li>
        <li><strong>Cost Optimization Strategies:</strong> Implemented reserved instances, spot instances, and auto-scaling policies. Optimized storage tiers and data transfer costs.</li>
        <li><strong>Service Re-architecture:</strong> Re-designed and refactored several core applications to leverage serverless computing and managed services, reducing operational overhead and improving scalability.</li>
        <li><strong>Automated Resource Management:</strong> Deployed tools for automated shutdown of non-production environments during off-hours and implemented tagging strategies for better cost allocation.</li>
        <li><strong>Security & Compliance Review:</strong> Enhanced cloud security configurations and ensured compliance with industry regulations.</li>
      </ul>
      <h3>The Results</h3>
      <p>The cloud optimization initiative delivered substantial benefits:</p>
      <ul>
        <li><strong>30% Reduction in Monthly Cloud Expenditure:</strong> Achieved significant cost savings, freeing up budget for other strategic initiatives.</li>
        <li><strong>20% Improvement in Application Performance:</strong> Optimized architecture led to faster response times and improved reliability.</li>
        <li><strong>Enhanced Security Posture:</strong> Strengthened cloud security measures and reduced attack surface.</li>
        <li><strong>Streamlined Cloud Operations:</strong> Automated processes reduced manual effort and improved IT team efficiency.</li>
      </ul>
      <p>This case study demonstrates our expertise in helping large enterprises optimize their cloud investments for both cost efficiency and performance.</p>
    `,
  },
]

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug)

  if (!caseStudy) {
    return (
      <Section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl font-bold text-foreground">Case Study Not Found</h1>
        <p className="text-lg text-muted-foreground mt-4">The case study you are looking for does not exist.</p>
        <Link href="/case-studies">
          <Button className="mt-8 gradient-button">Back to Case Studies</Button>
        </Link>
      </Section>
    )
  }

  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Link href="/case-studies" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Case Studies
        </Link>
        <Card className="glass-card p-6 md:p-8">
          <Image
            src={caseStudy.image || "/placeholder.svg"}
            alt={caseStudy.title}
            width={900}
            height={500}
            className="rounded-lg mb-6 w-full h-auto object-cover"
          />
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-4xl font-bold text-foreground mb-2">{caseStudy.title}</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">Industry: {caseStudy.industry}</CardDescription>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none p-0">
            <h3>The Challenge</h3>
            <p>{caseStudy.challenge}</p>
            <h3>Our Solution</h3>
            <p>{caseStudy.solution}</p>
            <h3>The Results</h3>
            <ul className="list-none p-0 space-y-2">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
            <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) {
    return generateCaseStudyMetadata("Case Study Not Found", "Requested case study not found.", params.slug)
  }
  return generateCaseStudyMetadata(cs.title, cs.challenge || cs.title, params.slug)
}
