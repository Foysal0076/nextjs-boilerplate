import { Metadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

export const siteConfig = {
  title: 'Nextjs Boilerplate',
  description:
    'A simple Nextjs Boilerplate built with Next.js, TypeScript, and Tailwind CSS',
}

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
    alternates: {
      canonical: '/',
    },
    title: title ? `${title}` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title}` : siteConfig.title,
      description,
      url: process.env.SITE_URL!,
      siteName: 'nextjs-boilerplate',
      images: {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
      locale: 'en_US',
      type: 'website',
    },
  }
}
