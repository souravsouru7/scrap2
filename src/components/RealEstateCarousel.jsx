'use client';

import * as React from 'react';
import { memo, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query,
  {
    defaultValue = false,
    initializeWithValue = true
  } = {}
) {
  const getMatches = query => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches;
  }

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    };
  }, [query])

  return matches
}

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

const PropertyCarousel = memo(({
  handleClick,
  controls,
  properties,
  isCarouselActive
}) => {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
  const cylinderWidth = isScreenSizeSm ? 1200 : 2000;
  const faceCount = properties.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}>
      <motion.div
        drag={isCarouselActive ? "x" : false}
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
        onDrag={(_, info) =>
          isCarouselActive &&
          rotation.set(rotation.get() + info.offset.x * 0.05)
        }
        onDragEnd={(_, info) =>
          isCarouselActive &&
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 30,
              mass: 0.1,
            },
          })
        }
        animate={controls}>
        {properties.map((property, i) => (
          <motion.div
            key={`key-${property.id}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${
                i * (360 / faceCount)
              }deg) translateZ(${radius}px)`,
            }}
            onClick={() => handleClick(property, i)}>
            <motion.div
              layoutId={`property-${property.id}`}
              className="w-full rounded-xl overflow-hidden bg-black border border-white/[0.08] backdrop-blur-sm hover:bg-black/90 transition-all duration-300 group"
              initial={{ filter: "blur(4px)" }}
              layout="position"
              animate={{ filter: "blur(0px)" }}
              transition={transition}>
              
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    {property.price}
                  </h3>
                  <p className="text-xs text-white/80 font-medium">{property.title}</p>
                </div>
                <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-xs text-white/90 font-medium">Featured</span>
                </div>
              </div>
              
              <div className="p-4 bg-transparent">
                <div className="flex items-center gap-1 text-white/60 mb-3">
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="h-3 w-3" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-3 w-3" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="h-3 w-3" />
                    <span>{property.sqft.toLocaleString()}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white py-2 rounded-lg font-medium hover:from-indigo-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-indigo-500/25 text-xs">
                  View Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export function RealEstateCarousel() {
  const [activeProperty, setActiveProperty] = useState(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();

  // Sample real estate data
  const properties = useMemo(() => [
    {
      id: 1,
      title: 'Luxury Villa with Sea View',
      price: '$1,250,000',
      location: 'Palm Jumeirah, Dubai',
      beds: 5,
      baths: 4,
      sqft: 3200,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Modern Downtown Apartment',
      price: '$850,000',
      location: 'Downtown Dubai',
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Waterfront Penthouse',
      price: '$2,350,000',
      location: 'Dubai Marina',
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Executive Suite Tower',
      price: '$1,850,000',
      location: 'Business Bay, Dubai',
      beds: 4,
      baths: 3,
      sqft: 2500,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Garden Villa Estate',
      price: '$2,100,000',
      location: 'Emirates Hills, Dubai',
      beds: 6,
      baths: 5,
      sqft: 4200,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Skyline Penthouse',
      price: '$3,200,000',
      location: 'Burj Khalifa District',
      beds: 5,
      baths: 4,
      sqft: 3500,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Beachfront Villa',
      price: '$2,800,000',
      location: 'Jumeirah Beach',
      beds: 6,
      baths: 5,
      sqft: 4000,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: 'Modern Loft',
      price: '$1,100,000',
      location: 'DIFC, Dubai',
      beds: 2,
      baths: 2,
      sqft: 1500,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ], []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  useEffect(() => {
    console.log("Properties loaded:", properties);
  }, [properties]);

  const handleClick = (property) => {
    setActiveProperty(property);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveProperty(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative w-full min-h-screen bg-[#030303] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-20 px-4">
        {/* Header Section */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
            <div className="h-2 w-2 rounded-full bg-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide font-medium">
              Premium Properties
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Luxury Real Estate
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Collection
            </span>
          </h2>
          
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Discover Dubai's most exclusive properties. From waterfront penthouses to luxury villas, 
            find your perfect home in the world's most dynamic city.
          </p>
        </motion.div>

        {/* 3D Carousel Section */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative h-[600px] w-full overflow-hidden">
            <PropertyCarousel
              handleClick={handleClick}
              controls={controls}
              properties={properties}
              isCarouselActive={isCarouselActive}
            />
          </div>
        </motion.div>
      </div>

      {/* Property Detail Modal */}
      <AnimatePresence mode="sync">
        {activeProperty && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`property-container-${activeProperty.id}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}>
            <motion.div
              layoutId={`property-${activeProperty.id}`}
              className="max-w-4xl max-h-[90vh] bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.1]"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ willChange: "transform" }}
              onClick={(e) => e.stopPropagation()}>
              
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={activeProperty.image}
                  alt={activeProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-bold text-3xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    {activeProperty.price}
                  </h3>
                  <p className="text-lg text-white/80 font-medium">{activeProperty.title}</p>
                </div>
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8 bg-transparent">
                <div className="flex items-center gap-2 text-white/60 mb-6">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">{activeProperty.location}</span>
                </div>
                
                <div className="flex items-center justify-between text-lg text-white/50 mb-8">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5" />
                    <span>{activeProperty.beds} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5" />
                    <span>{activeProperty.baths} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5" />
                    <span>{activeProperty.sqft.toLocaleString()} sq.ft</span>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-indigo-500 to-rose-500 text-white py-4 rounded-lg font-medium hover:from-indigo-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-indigo-500/25">
                    Schedule Viewing
                  </button>
                  <button className="flex-1 bg-white/10 backdrop-blur-sm text-white py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20">
                    Get More Info
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </motion.div>
  );
}
