import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Header() {
  const serviceCategories = {
    "Marketing Services": [
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "PPC Advertising", href: "/services/ppc-advertising" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Lead Generation", href: "/services/lead-generation" },
    ],
    "Development Services": [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Web Design", href: "/services/web-design" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "E-commerce Solutions", href: "/services/ecommerce-solutions" },
    ],
    "Technology Services": [
      { name: "AI & Automation", href: "/services/ai-automation" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "Business Analytics", href: "/services/business-analytics" },
    ],
    "Consulting Services": [
      { name: "IT Consulting", href: "/services/it-consulting" },
      { name: "Business Consulting", href: "/services/business-consulting" },
      { name: "Business Registration", href: "/services/business-registration" },
      { name: "Business Insurance", href: "/services/business-insurance" },
    ],
  }

  return (
    <header className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-4 md:px-6 border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <Link className="flex items-center gap-2" href="/" aria-label="MH Digital Solution Home">
        <Image
          src="/images/mh-digital-solutions-logo.webp"
          alt="MH Digital Solution Logo"
          width={32}
          height={32}
          className="sm:w-10 sm:h-10"
          priority
        />
        <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
          MH Digital Solution
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-4 lg:gap-6" role="navigation" aria-label="Main navigation">
        <Link className="text-sm lg:text-base text-foreground hover:text-fuchsia-600 transition-colors" href="/">
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex items-center gap-1 text-sm lg:text-base text-foreground hover:text-fuchsia-600 transition-colors"
            aria-label="Services menu"
          >
            Services <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 max-h-96 overflow-y-auto">
            <DropdownMenuItem asChild>
              <Link href="/services" className="font-semibold">
                All Services
              </Link>
            </DropdownMenuItem>
            {Object.entries(serviceCategories).map(([category, services]) => (
              <div key={category}>
                <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t mt-1 pt-2">
                  {category}
                </div>
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="pl-4">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link className="text-sm lg:text-base text-foreground hover:text-fuchsia-600 transition-colors" href="/about">
          About
        </Link>
        <Link
          className="text-sm lg:text-base text-foreground hover:text-fuchsia-600 transition-colors"
          href="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="text-sm lg:text-base text-foreground hover:text-fuchsia-600 transition-colors"
          href="/case-studies"
        >
          Case Studies
        </Link>
        <Link className="text-sm lg:text-base text-foreground hover:text-fuchsia-600 transition-colors" href="/blog">
          Blog
        </Link>
        <Link className="text-sm lg:text-base text-foreground hover:text-fuchsia-600 transition-colors" href="/pricing">
          Pricing
        </Link>
        <Link className="text-sm lg:text-base text-foreground hover:text-fuchsia-600 transition-colors" href="/contact">
          <Button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white text-sm">
            Contact Us
          </Button>
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden bg-transparent" size="icon" variant="outline" aria-label="Open mobile menu">
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[320px]">
          <nav
            className="flex flex-col gap-4 p-4 pt-8 max-h-full overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Link className="text-base text-foreground hover:text-fuchsia-600 transition-colors py-2" href="/">
              Home
            </Link>
            <Link
              className="text-base text-foreground hover:text-fuchsia-600 transition-colors py-2 font-semibold"
              href="/services"
            >
              All Services
            </Link>
            {Object.entries(serviceCategories).map(([category, services]) => (
              <div key={category} className="ml-4">
                <div className="text-sm font-semibold text-muted-foreground py-1">{category}</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-sm text-foreground hover:text-fuchsia-600 transition-colors py-1 pl-2"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            ))}
            <Link className="text-base text-foreground hover:text-fuchsia-600 transition-colors py-2" href="/about">
              About
            </Link>
            <Link className="text-base text-foreground hover:text-fuchsia-600 transition-colors py-2" href="/portfolio">
              Portfolio
            </Link>
            <Link
              className="text-base text-foreground hover:text-fuchsia-600 transition-colors py-2"
              href="/case-studies"
            >
              Case Studies
            </Link>
            <Link className="text-base text-foreground hover:text-fuchsia-600 transition-colors py-2" href="/blog">
              Blog
            </Link>
            <Link className="text-base text-foreground hover:text-fuchsia-600 transition-colors py-2" href="/pricing">
              Pricing
            </Link>
            <Link href="/contact" className="mt-4">
              <Button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-700 hover:to-pink-700 text-white w-full text-base py-3">
                Contact Us
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
