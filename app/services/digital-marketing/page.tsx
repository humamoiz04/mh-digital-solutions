"use client"
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material"
import Link from "next/link"
import FAQ from "@/components/faq" // Assuming FAQ component is available

const DigitalMarketingPage = () => {
  const packages = [
    {
      name: "Basic Package",
      description: "Ideal for startups and small businesses looking to establish an online presence.",
      features: [
        "Search Engine Optimization (SEO) Basics",
        "Social Media Management (1 platform)",
        "Email Marketing Setup",
        "Basic Website Analytics",
      ],
    },
    {
      name: "Standard Package",
      description: "Perfect for businesses aiming to grow their online reach and engagement.",
      features: [
        "Advanced SEO Strategies",
        "Social Media Management (3 platforms)",
        "Content Marketing (Blog Posts)",
        "Detailed Website Analytics & Reporting",
        "Pay-Per-Click (PPC) Advertising (Small Budget)",
      ],
    },
    {
      name: "Premium Package",
      description: "Comprehensive solution for established businesses seeking maximum online impact and ROI.",
      features: [
        "Full-Scale SEO Optimization",
        "Social Media Management (All Platforms)",
        "Content Marketing (Blog Posts, eBooks, Infographics)",
        "Advanced Analytics & Custom Reporting",
        "Pay-Per-Click (PPC) Advertising (Large Budget)",
        "Dedicated Account Manager",
      ],
    },
  ]

  const faqs = [
    {
      question: "How does an integrated digital marketing strategy work?",
      answer:
        "An integrated digital marketing strategy combines various online channels like SEO, PPC, social media, content marketing, and email marketing to create a cohesive and powerful presence. We ensure all elements work together, reinforcing your brand message and guiding customers through their journey, leading to maximum impact and efficiency.",
    },
    {
      question: "What are the benefits of a holistic digital marketing approach?",
      answer:
        "A holistic approach ensures consistent messaging across all platforms, builds stronger brand recognition, and creates synergy between different marketing efforts. This leads to a more effective customer journey, higher engagement, better conversion rates, and ultimately, a significantly higher return on investment compared to managing channels in isolation.",
    },
    {
      question: "What are the 4 digital strategies you implement for growth?",
      answer:
        "Our core digital strategies for growth typically involve: 1. **Attraction:** Drawing in target audiences through SEO and PPC. 2. **Engagement:** Building relationships via social media and content marketing. 3. **Conversion:** Turning leads into customers through optimized landing pages and email campaigns. 4. **Retention & Advocacy:** Fostering loyalty and encouraging referrals through ongoing engagement and excellent service.",
    },
  ]

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Digital Marketing Services
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Boost your online presence and reach your target audience with our comprehensive digital marketing solutions.
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
        Our Packages
      </Typography>

      <Grid container spacing={3}>
        {packages.map((pkg, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {pkg.name}
                </Typography>
                <Typography variant="body2" paragraph>
                  {pkg.description}
                </Typography>
                <Typography variant="subtitle1">Features:</Typography>
                <ul>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button component={Link} href="/pricing" variant="contained" color="primary">
                  View Pricing
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body2" align="center" sx={{ mt: 3, fontStyle: "italic" }}>
        Starting from competitive rates - view full pricing details on our pricing page.
      </Typography>

      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
          <Button component={Link} href="/pricing" variant="contained" color="secondary">
            View Pricing
          </Button>
        </Grid>
      </Grid>

      {/* FAQ Section */}
      <FAQ title="Digital Marketing FAQ" subtitle="Common questions about our digital marketing services" faqs={faqs} />
    </Container>
  )
}

export default DigitalMarketingPage
