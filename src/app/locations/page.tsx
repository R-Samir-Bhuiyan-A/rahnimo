import { getAllServiceableCities } from '@/lib/geo-utils';
import Link from 'next/link';

export const metadata = {
  title: "Interior Design Services in Bangladesh | Rahnimo Service Areas",
  description: "Explore all cities in Bangladesh where Rahnimo provides premium interior design services. Find design solutions in your city across Bangladesh.",
  keywords: [
    "interior design Bangladesh",
    "Bangladesh design service areas",
    "cities we serve in Bangladesh",
    "interior design service areas BD",
    "Bangladesh locations served",
    "design service locations BD",
    "Dhaka interior design",
    "Chittagong interior design",
    "Khulna interior design",
    "Rajshahi interior design",
    "Sylhet interior design"
  ],
  openGraph: {
    title: "Interior Design Services in Bangladesh | Rahnimo Service Areas",
    description: "Explore all cities in Bangladesh where Rahnimo provides premium interior design services. Find design solutions in your city across Bangladesh.",
    type: "website",
    url: "https://rahnimo.com/locations",
    images: [
      {
        url: "/og-locations.jpg",
        width: 1200,
        height: 630,
        alt: "Rahnimo Service Locations in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services in Bangladesh | Rahnimo Service Areas",
    description: "Explore all cities in Bangladesh where Rahnimo provides premium interior design services.",
  },
  alternates: {
    canonical: "https://rahnimo.com/locations",
  },
};

export default function LocationsPage() {
  const serviceableCities = getAllServiceableCities();

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto">
      <h1 className="sr-only">Interior Design Services in Bangladesh | Rahnimo Service Areas</h1>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Interior Design Services Across Bangladesh
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We proudly serve these cities throughout Bangladesh with our premium interior design services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {serviceableCities.map((city, index) => (
          <Link
            key={index}
            href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
            className="block p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-foreground">{city}</h2>
            <p className="text-sm text-muted-foreground mt-2">Interior Design Services</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Looking for interior design services in another Bangladeshi city? Contact us to discuss possibilities.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}