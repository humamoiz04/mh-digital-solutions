"use client"
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material"
import Link from "next/link"

const LeadGenerationPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Supercharge Your Business with Expert Lead Generation
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Unlock your business's full potential with our tailored lead generation services. We connect you with
        high-quality leads, driving growth and maximizing your ROI.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Why Choose Our Lead Generation Services?
          </Typography>
          <Typography variant="body1" paragraph>
            We employ cutting-edge strategies and technologies to identify and engage potential customers who are
            genuinely interested in your products or services. Our data-driven approach ensures that you receive leads
            that are not only numerous but also highly qualified.
          </Typography>
          <ul>
            <li>Targeted Lead Acquisition</li>
            <li>Data-Driven Strategies</li>
            <li>Improved Conversion Rates</li>
            <li>Increased ROI</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/lead-generation-image.jpg" // Replace with your actual image path
            alt="Lead Generation"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>

      <Typography variant="h4" component="h2" align="center" sx={{ mt: 6, mb: 3 }}>
        Our Lead Generation Packages
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Basic Package
              </Typography>
              <Typography variant="body2" paragraph>
                Ideal for startups and small businesses looking to generate initial leads.
              </Typography>
              <ul>
                <li>Email Marketing Campaigns</li>
                <li>Social Media Promotion</li>
                <li>Basic Analytics Reporting</li>
              </ul>
              <Typography variant="body2">Starting from competitive rates - view full pricing details.</Typography>
              <Button variant="contained" color="primary" component={Link} href="/pricing" sx={{ mt: 2 }}>
                View Pricing
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Standard Package
              </Typography>
              <Typography variant="body2" paragraph>
                Perfect for growing businesses seeking to expand their lead generation efforts.
              </Typography>
              <ul>
                <li>Advanced Email Marketing</li>
                <li>Targeted Social Media Ads</li>
                <li>SEO Optimization</li>
                <li>Detailed Analytics Dashboard</li>
              </ul>
              <Typography variant="body2">Starting from competitive rates - view full pricing details.</Typography>
              <Button variant="contained" color="primary" component={Link} href="/pricing" sx={{ mt: 2 }}>
                View Pricing
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Premium Package
              </Typography>
              <Typography variant="body2" paragraph>
                Designed for established businesses aiming for maximum lead generation and ROI.
              </Typography>
              <ul>
                <li>Comprehensive Marketing Automation</li>
                <li>Personalized Ad Campaigns</li>
                <li>Dedicated Account Manager</li>
                <li>Custom Analytics & Reporting</li>
              </ul>
              <Typography variant="body2">Starting from competitive rates - view full pricing details.</Typography>
              <Button variant="contained" color="primary" component={Link} href="/pricing" sx={{ mt: 2 }}>
                View Pricing
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        Ready to take your business to the next level? <Link href="/pricing">View our pricing details</Link> and get
        started today!
      </Typography>
    </Container>
  )
}

export default LeadGenerationPage
