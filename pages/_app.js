import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/footer.css";

import Layout from "@/components/Layout";


function MyAppWithLayout({ Component, pageProps }) {

  // 🔹 Remove Google srsltid parameter (optional cleanup)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.has("srsltid")) {
        url.searchParams.delete("srsltid");
        window.history.replaceState({}, "", url.pathname + url.search);
      }
    }
  }, []);

  return (
    <>
      {/* ========================= */}
      {/* ✅ GLOBAL SCHEMA */}
      {/* ========================= */}
      {/* <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.stonediscover.com/#organization",
                "name": "Stone Discover",
                "alternateName": [
                  "Stone Discover India",
                  "Granite Monuments Manufacturer & Exporter From India - Stone Discover"
                ],
                "url": "https://www.stonediscover.com/",
                "logo": {
                  "@type": "ImageObject",
                  "@id": "https://www.stonediscover.com/#logo",
                  "url": "https://www.stonediscover.com/stone-logo.png"
                },
                "image": {
                  "@id": "https://www.stonediscover.com/#logo"
                },
                "foundingDate": "1984",
                "description": "Stone Discover is a wholesale granite monuments manufacturer and exporter supplying monument dealers, funeral homes, and cemetery suppliers across North America since 1984.",
                "slogan": "Factory Direct Granite Monuments Since 1984",
                "telephone": "+919667584700",
                "email": "info@stonediscover.com",

                "priceRange": "$500-$5000+",
                "priceCurrency": "USD",

                "brand": {
                  "@type": "Brand",
                  "name": "Stone Discover",
                  "logo": "https://www.stonediscover.com/stone-logo.png"
                },

                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+919667584700",
                    "contactType": "sales",
                    "areaServed": "IN",
                    "availableLanguage": "English"
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+18582935368",
                    "contactType": "sales",
                    "areaServed": "US",
                    "availableLanguage": "English"
                  }
                ],

                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "United States"
                  },
                  {
                    "@type": "Country",
                    "name": "Canada"
                  }
                ],

                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "127",
                  "bestRating": "5",
                  "worstRating": "1"
                },

                "knowsAbout": [
                  "Granite Monuments",
                  "Granite Headstones",
                  "Grave Markers",
                  "Companion Headstones",
                  "Memorial Stones",
                  "Cemetery Monuments",
                  "Wholesale Monument Supply",
                  "Monument Manufacturing"
                ],

                "sameAs": [
                  "https://www.linkedin.com/company/stonediscover",
                  "https://www.facebook.com/stonediscover"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.stonediscover.com/#website",
                "url": "https://www.stonediscover.com/",
                "name": "Stone Discover",
                "alternateName": "Stone Discover India",
                "description": "Wholesale granite monuments manufacturer and exporter supplying monument dealers, funeral homes, and cemetery suppliers across North America since 1984.",
                "publisher": {
                  "@id": "https://www.stonediscover.com/#organization"
                },
                "inLanguage": "en-US",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.stonediscover.com/?s={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },

              {
                "@type": "WebPage",
                "@id": "https://www.stonediscover.com/#webpage",
                "url": "https://www.stonediscover.com/",
                "name": "Granite Monuments Manufacturer & Exporter from India | Stone Discover",
                "isPartOf": {
                  "@id": "https://www.stonediscover.com/#website"
                },
                "about": {
                  "@id": "https://www.stonediscover.com/#organization"
                },
                "primaryImageOfPage": {
                  "@id": "https://www.stonediscover.com/#logo"
                },
                "datePublished": "2024-01-01T00:00:00+00:00",
                "dateModified": "2025-05-26T00:00:00+00:00",
                "description": "Premium granite monuments manufactured at our own factory in India, supplying monument dealers, funeral homes, and cemetery suppliers across USA & Canada since 1984.",
                "inLanguage": "en-US",
                "headline": "Wholesale Granite Monuments Manufacturer & Exporter in India",
                "keywords": [
                  "wholesale granite monuments",
                  "granite monuments exporter from India",
                  "wholesale headstones supplier",
                  "granite memorial monuments",
                  "wholesale grave markers",
                  "monument dealer supplier USA",
                  "wholesale granite headstones",
                  "granite monument manufacturer India",
                  "B2B monument exporter",
                  "cemetery monument supplier"
                ]
              },

              {
                "@type": "BreadcrumbList",
                "@id": "https://www.stonediscover.com/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.stonediscover.com/"
                  }
                ]
              }
            ),
          }}
        />
      </Head> */}
      <Layout faq={pageProps.faq}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyAppWithLayout;
