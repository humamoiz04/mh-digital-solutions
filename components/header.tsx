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
    <header className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 sticky top-0 z-40 shadow-lg">
      <Link className="flex items-center gap-3" href="/" aria-label="MH Digital Solution Home">
        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br from-[#ff6b9d] via-[#e49273] to-[#a8d0d6] p-1 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/mh-digital-solutions-logo.webp"
            alt="MH Digital Solution Logo"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
        <span className="text-lg sm:text-xl font-black gradient-text hidden sm:inline-block">MH Digital Solution</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
        <Link
          className="text-sm text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors duration-300"
          href="/"
        >
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex items-center gap-1 text-sm text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors duration-300"
            aria-label="Services menu"
          >
            Services <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 max-h-96 overflow-y-auto glass-card border-0">
            <DropdownMenuItem asChild>
              <Link href="/services" className="font-bold gradient-text">
                All Services
              </Link>
            </DropdownMenuItem>
            {Object.entries(serviceCategories).map(([category, services]) => (
              <div key={category}>
                <div className="px-3 py-2 text-xs font-bold text-slate-400 border-t border-slate-700 mt-1 pt-3 uppercase tracking-wide">
                  {category}
                </div>
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="pl-6 text-sm text-slate-300 hover:text-[#a8d0d6]">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          className="text-sm text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors duration-300"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-sm text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors duration-300"
          href="/team"
        >
          Team
        </Link>
        <Link
          className="text-sm text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors duration-300"
          href="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="text-sm text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors duration-300"
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className="text-sm text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors duration-300"
          href="/pricing"
        >
          Pricing
        </Link>

        <Link href="/contact">
          <Button className="gradient-button font-bold px-6 h-11 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Contact Us
          </Button>
        </Link>
      </nav>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="md:hidden bg-transparent border border-slate-700 hover:border-[#a8d0d6]"
            size="icon"
            variant="outline"
            aria-label="Open mobile menu"
          >
            <Menu className="h-5 w-5 text-slate-300" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-slate-950 border-l border-slate-800">
          <nav
            className="flex flex-col gap-4 p-4 pt-8 max-h-full overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Link className="text-base text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors py-2" href="/">
              Home
            </Link>
            <Link
              className="text-base text-slate-300 hover:text-[#a8d0d6] font-bold transition-colors py-2"
              href="/services"
            >
              All Services
            </Link>
            {Object.entries(serviceCategories).map(([category, services]) => (
              <div key={category} className="ml-4">
                <div className="text-xs font-bold text-slate-500 py-2 uppercase tracking-wide">{category}</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-sm text-slate-300 hover:text-[#a8d0d6] transition-colors py-1.5 pl-2"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              className="text-base text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors py-2"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-base text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors py-2"
              href="/team"
            >
              Team
            </Link>
            <Link
              className="text-base text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors py-2"
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-base text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors py-2"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-base text-slate-300 hover:text-[#a8d0d6] font-medium transition-colors py-2"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link href="/contact" className="mt-6">
              <Button className="gradient-button font-bold w-full h-12 rounded-lg">Contact Us</Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
