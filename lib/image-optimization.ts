export interface ImageConfig {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  quality?: number
  sizes?: string
}

export const DEFAULT_IMAGE_QUALITY = 90
export const DEFAULT_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="

export const RESPONSIVE_SIZES = {
  mobile: "(max-width: 640px) 100vw",
  tablet: "(max-width: 768px) 80vw",
  desktop: "(max-width: 1024px) 60vw",
  default: "50vw",
}

export function generateResponsiveSizes(breakpoints?: Partial<typeof RESPONSIVE_SIZES>): string {
  const sizes = { ...RESPONSIVE_SIZES, ...breakpoints }
  return `${sizes.mobile}, ${sizes.tablet}, ${sizes.desktop}, ${sizes.default}`
}

export function validateImageAlt(alt: string): boolean {
  return alt.length > 0 && alt.length <= 125 && !alt.toLowerCase().includes("image")
}

export function generatePlaceholderUrl(width: number, height: number, text?: string): string {
  const encodedText = text ? encodeURIComponent(text) : "Loading"
  return `/placeholder.svg?height=${height}&width=${width}&text=${encodedText}`
}

export function optimizeImageForSEO(config: ImageConfig): ImageConfig {
  return {
    ...config,
    alt: validateImageAlt(config.alt) ? config.alt : `Image: ${config.alt}`,
    quality: config.quality || DEFAULT_IMAGE_QUALITY,
    sizes: config.sizes || generateResponsiveSizes(),
  }
}

// Common image configurations for different use cases
export const IMAGE_CONFIGS = {
  hero: {
    quality: 95,
    priority: true,
    sizes: generateResponsiveSizes({
      mobile: "(max-width: 640px) 100vw",
      tablet: "(max-width: 1024px) 100vw",
      desktop: "100vw",
      default: "100vw",
    }),
  },
  thumbnail: {
    quality: 85,
    sizes: generateResponsiveSizes({
      mobile: "(max-width: 640px) 50vw",
      tablet: "(max-width: 768px) 33vw",
      desktop: "(max-width: 1024px) 25vw",
      default: "20vw",
    }),
  },
  gallery: {
    quality: 90,
    sizes: generateResponsiveSizes({
      mobile: "(max-width: 640px) 100vw",
      tablet: "(max-width: 768px) 50vw",
      desktop: "(max-width: 1024px) 33vw",
      default: "25vw",
    }),
  },
}
