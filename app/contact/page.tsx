import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FAQ from "@/components/faq"
import ScrollAnimation from "@/components/scroll-animation"

export default function ContactPage() {
  const faqs = [
    {
      question: "How quickly will you respond to my inquiry?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly for immediate assistance.",
    },
    {
      question: "Do you work with clients internationally?",
      answer:
        "Yes, we work with clients worldwide. Our digital services can be delivered remotely, and we use video conferencing and collaboration tools to maintain effective communication regardless of location.",
    },
    {
      question: "What information should I include in my initial inquiry?",
      answer:
        "To help us respond most effectively, please include details about your project or needs, your timeline, budget range if applicable, and any specific questions you have. The more information you provide, the better we can tailor our response.",
    },
    {
      question: "Can I schedule a call before committing to your services?",
      answer:
        "We offer free initial consultations to discuss your needs and determine if we're a good fit. You can use our online scheduling tool to book a convenient time for a call.",
    },
  ]

  return (
    <div className="section-transparent pt-32">
      {/* Hero Section */}
      <ScrollAnimation>
        <section className="section-transparent pb-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] via-[#F472B6] to-[#FF7600] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's discuss your project and create something amazing
              together.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Contact Form & Info */}
      <ScrollAnimation>
        <section className="section-transparent py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="glass-card border-0">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] bg-clip-text text-transparent">
                      Send Us a Message
                    </h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="glass-card border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-[#8B5CF6] mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                          <p className="text-gray-600 dark:text-gray-300">info@mhdigitalsolution.com</p>
                          <p className="text-gray-600 dark:text-gray-300">support@mhdigitalsolution.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-[#8B5CF6] mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                          <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                          <p className="text-gray-600 dark:text-gray-300">+1 (555) 987-6543</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-[#8B5CF6] mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">Address</h4>
                          <p className="text-gray-600 dark:text-gray-300">123 Digital Street</p>
                          <p className="text-gray-600 dark:text-gray-300">Tech City, TC 12345</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-[#8B5CF6] mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">Business Hours</h4>
                          <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-gray-600 dark:text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                          <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center"
                        aria-label="Facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center"
                        aria-label="Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center"
                        aria-label="LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#F472B6] flex items-center justify-center"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Map Section */}
      <ScrollAnimation>
        <section className="section-transparent py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="glass-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1623252321665!5m2!1sen!2sca"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="MH Digital Solution Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <FAQ title="Contact FAQ" subtitle="Common questions about contacting us" faqs={faqs} />
    </div>
  )
}
