import { Metadata } from 'next';
import { getAllServiceableCities } from '@/lib/geo-utils';

interface Params {
  params: {
    location: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const locationParam = params.location;
  const location = decodeURIComponent(locationParam).replace(/-/g, ' ');

  return {
    title: `Interior Design ${location}, Bangladesh | Rahnimo Studio`,
    description: `Professional interior design services in ${location}, Bangladesh. Transform your space with Rahnimo's award-winning design solutions tailored to ${location}'s unique style and requirements.`,
    keywords: [
      `interior design ${location} Bangladesh`,
      `interior designer ${location} BD`,
      `home design ${location}`,
      `commercial design ${location}`,
      `luxury interiors ${location}`,
      `residential design ${location}`,
      `space planning ${location}`,
      `furniture design ${location}`,
      `architecture ${location}`,
      `design services ${location} Bangladesh`,
      `Bangladesh interior design`,
      `${location} interior design`
    ],
    openGraph: {
      title: `Interior Design ${location}, Bangladesh | Rahnimo Studio`,
      description: `Professional interior design services in ${location}, Bangladesh. Transform your space with Rahnimo's award-winning design solutions.`,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://rahnimo.com'}/locations/${locationParam}`,
      images: [
        {
          url: `/og-${locationParam}.jpg`,
          width: 1200,
          height: 630,
          alt: `Interior Design in ${location}, Bangladesh - Rahnimo Studio`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Interior Design ${location}, Bangladesh | Rahnimo Studio`,
      description: `Transform your space with our award-winning design solutions in ${location}, Bangladesh.`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://rahnimo.com'}/locations/${locationParam}`,
    },
  };
}

export async function generateStaticParams() {
  const cities = getAllServiceableCities();

  return cities.map(city => ({
    location: city.toLowerCase().replace(/\s+/g, '-')
  }));
}

export default function LocationPage({ params }: Params) {
  const location = decodeURIComponent(params.location).replace(/-/g, ' ');

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-[1000px] mx-auto">
      <h1 className="sr-only">Interior Design in {location}, Bangladesh | Rahnimo Studio</h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        Interior Design in <span className="text-primary">{location}</span>, Bangladesh
      </h2>

      <p className="text-xl text-muted-foreground mb-12">
        Transform your space with Rahnimo's award-winning interior design services in {location}, Bangladesh.
      </p>

      <div className="space-y-8 text-foreground/90 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Design Excellence in {location}, Bangladesh</h2>
          <p>
            At Rahnimo, we understand that every location in Bangladesh has its unique character, culture, and design preferences. Our interior design services in {location} are carefully tailored to reflect the distinctive style and requirements of this vibrant Bangladeshi community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Services in {location}</h2>
          <p>
            We offer a comprehensive range of interior design services in {location}, Bangladesh, including:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Residential interior design</li>
            <li>Commercial space planning</li>
            <li>Furniture selection and procurement</li>
            <li>Space optimization and layout design</li>
            <li>Luxury renovation consulting</li>
            <li>Virtual design consultations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Why Choose Rahnimo in {location}, Bangladesh?</h2>
          <p>
            Our team brings years of experience in creating beautiful, functional spaces that reflect your unique vision. In {location}, Bangladesh, we've had the privilege of transforming numerous homes and businesses, earning recognition for our innovative approach and attention to detail.
          </p>
          <p className="mt-4">
            We stay connected with {location}'s design trends and local Bangladeshi suppliers to ensure your project is completed efficiently with materials and styles that complement the local aesthetic.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Get Started Today</h2>
          <p>
            Ready to transform your space in {location}, Bangladesh? Contact our design team today to schedule your consultation and begin your journey toward a beautifully designed environment.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}