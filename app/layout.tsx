import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://prashant-shrestha.vercel.app/#person",
  "name": "Prashant Shrestha",
  "url": "https://prashant-shrestha.vercel.app",
  "jobTitle": ".NET Backend Developer",
  "description": "Prashant Shrestha is a software developer in Nepal specializing in ASP.NET, C#, .NET Framework, Web API and MS SQL Server, building ERP systems, REST APIs and reporting dashboards.",
  "image": "https://prashant-shrestha.vercel.app/my_image.jpeg",
  "email": "mailto:prashantshrestha027@gmail.com",
  "nationality": {
    "@type": "Country",
    "name": "Nepal"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NP"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nepal"
  },
  "knowsAbout": [
    ".NET Development",
    "ASP.NET Development",
    "C#",
    "MS SQL Server",
    "ERP Development",
    "AngularJS",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "REST API Development",
    "Multi-Tenant Applications",
    "Backend Development",
    "Software Development"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/-rohan-shrestha/",
    "https://github.com/SPrashant27",
    "https://medium.com/@shrestharohan495"
  ]
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://prashant-shrestha.vercel.app/#website",
  "name": "Prashant Shrestha Portfolio",
  "alternateName": "Prashant Shrestha - .NET Backend Developer",
  "url": "https://prashant-shrestha.vercel.app",
  "description": "Portfolio of Prashant Shrestha, a .NET backend developer in Nepal building ERP systems, REST APIs and SQL Server-backed applications with ASP.NET and C#.",
  "inLanguage": "en-US",
  "author": {
    "@type": "Person",
    "@id": "https://prashant-shrestha.vercel.app/#person",
    "name": "Prashant Shrestha"
  }
};

const profilePageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://prashant-shrestha.vercel.app/#profile",
  "url": "https://prashant-shrestha.vercel.app",
  "name": "Prashant Shrestha | Official Portfolio",
  "description": "The official portfolio of Prashant Shrestha, a .NET backend developer in Nepal specializing in ASP.NET, C# and MS SQL Server.",
  "isPartOf": {
    "@id": "https://prashant-shrestha.vercel.app/#website"
  },
  "mainEntity": {
    "@id": "https://prashant-shrestha.vercel.app/#person"
  },
  "inLanguage": "en-US"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prashant-shrestha.vercel.app"),
  applicationName: "Prashant Shrestha Portfolio",
  manifest: "/manifest.json",
  title: "Prashant Shrestha | .NET Backend Developer in Nepal",
  description: "Prashant Shrestha is a .NET backend developer in Nepal building ERP modules, REST APIs and reporting dashboards with ASP.NET, C# and MS SQL Server.",
  authors: [{ name: "Prashant Shrestha", url: "https://prashant-shrestha.vercel.app" }],
  creator: "Prashant Shrestha",
  publisher: "Prashant Shrestha",
  keywords: [
    "Prashant Shrestha",
    ".NET Developer",
    ".NET Developer in Nepal",
    "ASP.NET Developer",
    "C# Developer",
    "Backend Developer in Nepal",
    "MS SQL Server Developer",
    "ERP Developer",
    "Web API Developer",
    "Backend Developer",
    "Next.js Developer",
    "Dynamic Technosoft",
    "REST API Developer",
    "Software Developer",
    "Software Developer in Nepal",
    "Software Developer Nepal"
  ],
  openGraph: {
    title: "Prashant Shrestha | .NET Backend Developer in Nepal",
    description: "Prashant Shrestha builds ERP systems, REST APIs and SQL Server backends as a .NET developer in Nepal.",
    type: "website",
    locale: "en_US",
    siteName: "Prashant Shrestha Portfolio",
    url: "https://prashant-shrestha.vercel.app",
    images: [
      {
        url: "/my_image.jpeg",
        width: 1200,
        height: 630,
        alt: "Prashant Shrestha, .NET backend developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Shrestha | .NET Backend Developer in Nepal",
    description: "Prashant Shrestha builds ERP systems, REST APIs and SQL Server backends as a .NET developer in Nepal.",
    images: ["/my_image.jpeg"]
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageStructuredData)
          }}
        />
        <CustomCursor />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
