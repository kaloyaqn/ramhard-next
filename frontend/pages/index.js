import Hero from '../components/Hero.js';
import Logos from '../components/Logos';
import Ourprocess from '../components/Ourprocess';
import Why from '../components/Why';
import Mainservices from '../components/Services';
import Aboutus from '../components/Aboutus';
import Faq from '../components/Faq';
import LastCta from '../components/LastCta';
import Maps from '../components/Maps';

export default function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        <Hero/>
        
        <Why />
        <Mainservices/>
        <Ourprocess />
        <Aboutus />
        <Faq />
        <LastCta />
        <Maps />
      </div>
    </>
  )
}

