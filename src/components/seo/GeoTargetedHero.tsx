'use client';

import { useGeo } from '@/context/GeoContext';
import { isCityServiceable } from '@/lib/geo-utils';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Clock, Star } from 'lucide-react';
import { useState } from 'react';

const GeoTargetedHero = () => {
  const { userLocation, localizedContent, serviceableCities, isLocationDetected } = useGeo();
  const [showAllCities, setShowAllCities] = useState(false);
  
  // Get a sample of serviceable cities to display
  const displayedCities = showAllCities 
    ? serviceableCities 
    : serviceableCities.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {isLocationDetected && userLocation ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  {userLocation.city ? `Serving ${userLocation.city}, ${userLocation.country}` : `Serving ${userLocation.country}`}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Premium Interior Design in{' '}
                  <span className="text-primary">
                    {userLocation.city || userLocation.country}
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {localizedContent?.description || "Transform your space with our award-winning interior design services. Luxury residential and commercial design solutions tailored to your unique vision."}
                </p>
              </motion.div>
              
              {isCityServiceable(userLocation.city || '') ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
                >
                  <CheckCircle className="w-4 h-4" />
                  We're proud to serve your area!
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
                >
                  <Clock className="w-4 h-4" />
                  Expanding to your area soon!
                </motion.div>
              )}
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Premium Interior Design{' '}
                  <span className="text-primary">
                    Worldwide
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Transform your space with our award-winning interior design services. Luxury residential and commercial design solutions tailored to your unique vision.
                </p>
              </motion.div>
            </>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">We Serve These Areas</h2>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {displayedCities.map((city, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className={`px-3 py-1 rounded-full text-sm ${
                    userLocation?.city === city
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground'
                  }`}
                >
                  {city}
                </motion.span>
              ))}
            </div>
            
            {serviceableCities.length > 8 && (
              <button
                onClick={() => setShowAllCities(!showAllCities)}
                className="text-primary hover:underline font-medium"
              >
                {showAllCities ? 'Show Less' : `Show All ${serviceableCities.length} Cities`}
              </button>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-card p-6 rounded-xl border border-border">
              <Star className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Award-Winning Designs</h3>
              <p className="text-muted-foreground">Our designs have been recognized internationally for innovation and excellence.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Serving clients in major cities worldwide with local expertise.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <CheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tailored Solutions</h3>
              <p className="text-muted-foreground">Every project is customized to reflect your unique style and needs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GeoTargetedHero;