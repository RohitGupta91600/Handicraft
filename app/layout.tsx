import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handicraft Supplier in Delhi NCR | Bulk Handmade Products",
  description:
    "Premium handicrafts supplier in Delhi NCR. We provide bulk orders, wholesale pricing, and custom handmade products for businesses and corporate gifting.",
  
  keywords: [
    "handicraft supplier Delhi",
    "bulk handicrafts Delhi NCR",
    "wholesale handicrafts India",
    "corporate gift items Delhi",
    "handmade products supplier",
  ],

  openGraph: {
    title: "Handicraft Supplier in Delhi NCR",
    description:
      "Bulk handicrafts, wholesale pricing & custom designs available.",
    url: "https://yourdomain.com",
    siteName: "Delhi Handicrafts",
    type: "website",
  },

  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* MAIN CONTENT */}
        {children}

        {/* JSON-LD SCHEMA (Local SEO Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Delhi Handicrafts",
              image: "https://yourdomain.com/logo.png",
              "@id": "https://yourdomain.com",
              url: "https://yourdomain.com",
              telephone: "7258895429",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Karol Bagh",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110005",
                addressCountry: "IN",
              },
              areaServed: "Delhi NCR",
              priceRange: "₹₹",
            }),
          }}
        />

      </body>
    </html>
  );
}