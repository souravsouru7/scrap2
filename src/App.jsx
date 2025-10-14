import BloomFi from './BloomFi'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import Navbar from '@/components/ui/navbar'


function App() {
  return (
   <>
     <Navbar />
     <HeroGeometric
       badge="Live tracking • Real-time pricing"
       title1="Transform Your Waste"
       title2="Into Reliable Revenue"
       description="India's most intelligent scrap management platform. Real-time pricing, instant pickup, seamless recycling."
     />
   </>

  
  )
}

export default App
