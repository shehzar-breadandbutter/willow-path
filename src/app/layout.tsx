import '@/styles/globals.css';
import { avenir, bookmania } from '@/styles/font';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Willow Path',
  description:
    'Discover your path to financial freedom with Willow Path - your trusted companion for smart financial planning and wealth building.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    shortcut: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png']
  },
  openGraph: {
    url: "https://willow-path.vercel.app/",
    type: 'website',
    title: 'Willow Path',
    description:
      'Discover your path to financial freedom with Willow Path - your trusted companion for smart financial planning and wealth building.',
    images: [
      {
        url: '/images/hero_image.webp',
        width: 1200,
        height: 630,
        alt: 'Willow Path - Your Financial Journey Starts Here'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Willow Path',
    description:
      'Discover your path to financial freedom with Willow Path - your trusted companion for smart financial planning and wealth building.',
    images: ['/images/hero_image.webp']
  },
  manifest: '/site.webmanifest'
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} ${bookmania.variable} antialiased`}>
        {/* Google Analytics Tag */}
        <Script
            id="gtag-src"
            src="https://www.googletagmanager.com/gtag/js?id=AW-17532252844"
            strategy="afterInteractive"
          />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17532252844');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
