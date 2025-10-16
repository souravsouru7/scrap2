import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { RealEstateCarousel } from '@/components/RealEstateCarousel'
import Navbar from '@/components/ui/navbar'
import { HeroSection } from '@/components/hero-section-2'


function App() {
  return (
   <>
   
    <HeroSection
      className="min-h-[80vh]"
      logo={{ url: "/vite.svg", alt: "Skyline Properties Logo", text: "Skyline Properties" }}
      slogan="Luxury Homes in Dubai"
      title="Discover Exceptional Real Estate"
      subtitle="Exclusive villas, waterfront apartments, and penthouses in Dubai's most sought-after communities."
      callToAction={{ href: "/listings", text: "VIEW LISTINGS" }}
      backgroundImage="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1800&auto=format&fit=crop"
      contactInfo={{
        website: "skylineproperties.ae",
        phone: "+971 4 123 4567",
        address: "Dubai Marina, Dubai, UAE",
      }}
    />


   </>
  )
}

export default App
