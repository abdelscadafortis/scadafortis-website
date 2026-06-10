import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: "Scada Fortis — Independent Owner's Engineer for Offshore Wind",
    template: "%s — Scada Fortis",
  },
  description: "Vendor-neutral SCADA, telecom and OT cybersecurity Owner's Engineer for offshore wind developers. 15+ years across HVDC and HVAC projects in Europe.",
  keywords: ["SCADA Owner's Engineer", "offshore wind SCADA", "HVDC SCADA", "IEC 61850", "IEC 62443", "offshore wind commissioning", "OT cybersecurity offshore wind"],
  authors: [{ name: "Abdelmounaim Errouchi" }],
  creator: "Scada Fortis Engineering Solutions",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.scadafortis.com",
    siteName: "Scada Fortis Engineering Solutions",
    title: "Scada Fortis — Independent Owner's Engineer for Offshore Wind",
    description: "Vendor-neutral SCADA, telecom and OT cybersecurity Owner's Engineer for offshore wind developers. 15+ years across HVDC and HVAC projects in Europe.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8B8P7KNWLX" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">{`
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-8B8P7KNWLX');
        `}</Script>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
