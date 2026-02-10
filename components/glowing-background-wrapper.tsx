'use client'

import dynamic from 'next/dynamic'

const GlowingNetworkBackground = dynamic(
  () => import('@/components/glowing-network-background').then(mod => mod.GlowingNetworkBackground),
  { ssr: false }
)

export function GlowingBackgroundWrapper() {
  return <GlowingNetworkBackground />
}
