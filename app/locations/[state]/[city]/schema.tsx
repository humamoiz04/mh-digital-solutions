export function generateCitySchema(cityName: string, state: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `MH Digital Solution - ${cityName}, ${state}`,
    description: description,
    areaServed: {
      "@type": "City",
      name: cityName,
      addressCountry: "US",
      addressRegion: state,
    },
    url: `https://www.mhdigitalsolution.com/locations/${state.toLowerCase()}/${cityName.toLowerCase()}`,
    telephone: "+1-707-249-1222",
    email: "info@mhdigitalsolution.com",
    priceRange: "$1200-$5000",
    serviceType: ["Digital Marketing", "SEO Services", "Web Design", "PPC Advertising", "Web Development"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: state,
      addressLocality: cityName,
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61569037172478",
      "https://twitter.com/mhdigitalsol",
      "https://linkedin.com/company/mh-digital-solution",
      "https://www.instagram.com/mh_digitalsolutions/",
    ],
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MH Digital Solution",
    url: "https://www.mhdigitalsolution.com",
    logo: "https://www.mhdigitalsolution.com/images/mh-digital-solutions-logo.webp",
    description: "Digital marketing and web development agency serving businesses nationwide",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61569037172478",
      "https://twitter.com/mhdigitalsol",
      "https://linkedin.com/company/mh-digital-solution",
      "https://www.instagram.com/mh_digitalsolutions/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+1-707-249-1222",
      email: "info@mhdigitalsolution.com",
    },
    areaServed: [
      "Nebraska",
      "Wyoming",
      "Maine",
      "Rhode Island",
      "New Mexico",
      "Iowa",
      "Massachusetts",
      "West Virginia",
      "Vermont",
    ],
  }
}
