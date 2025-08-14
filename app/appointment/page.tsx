import { Section } from "@/components/Section"
import { AppointmentForm } from "@/components/appointment-form"
import { CalendarCheck, Users, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function AppointmentPage() {
  return (
    <div className="relative z-10">
      <Section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 gradient-text">Book a Consultation</h1>
          <p className="text-lg text-muted-foreground">
            Schedule a free consultation with our experts to discuss your digital needs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AppointmentForm />
          <div className="space-y-8">
            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <CalendarCheck className="h-7 w-7 text-primary gradient-icon" />
                  Easy Scheduling
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Choose a date and time that works best for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p>Our online booking system is simple and convenient.</p>
                <p>Receive instant confirmation of your appointment.</p>
              </CardContent>
            </Card>
            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary gradient-icon" />
                  Expert Guidance
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Connect with our specialists for personalized advice.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p>Discuss your business goals and challenges.</p>
                <p>Get insights into potential digital solutions.</p>
              </CardContent>
            </Card>
            <Card className="glass-card p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Lightbulb className="h-7 w-7 text-primary gradient-icon" />
                  Tailored Solutions
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Receive a custom proposal designed for your needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                <p>Understand the strategies that will drive your growth.</p>
                <p>No obligation, just valuable insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
