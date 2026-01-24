import { getAllServiceableCities } from '@/lib/geo-utils';

export async function generateStaticParams() {
  const cities = getAllServiceableCities();
  
  return cities.map(city => ({
    location: city.toLowerCase().replace(/\s+/g, '-')
  }));
}