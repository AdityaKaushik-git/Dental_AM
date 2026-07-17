import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, pathname }) {
  const siteUrl = 'https://amdentdental.com';
  const fullUrl = `${siteUrl}${pathname || ''}`;
  const defaultDesc = "A M Dent Dental Solutions offers luxury biological dental care in Rohini Sector 24, Delhi. Specializing in Root Canals, Dental Implants, and Smile Makeovers near Lalaji Chaat Corner.";

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": "A M Dent Dental Solutions",
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    "url": siteUrl,
    "telephone": "+91-9999999999",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rohini Sector 24, Near Lalaji Chaat Corner",
      "addressLocality": "Delhi",
      "postalCode": "110085",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.7184",
      "longitude": "77.1036"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "240"
    }
  };

  return (
    <Helmet>
      <title>{title ? `${title} | A M Dent Dental Solutions` : 'A M Dent Dental Solutions | Premium Clinic Rohini'}</title>
      <meta name="description" content={description || defaultDesc} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "A M Dent Dental Solutions"} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "A M Dent Dental Solutions"} />
      <meta name="twitter:description" content={description || defaultDesc} />

      {/* JSON-LD Structured Schema Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaJson)}
      </script>
    </Helmet>
  );
}