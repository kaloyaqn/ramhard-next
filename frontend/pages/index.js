import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Ourprocess from '../components/Ourprocess';
import Why from '../components/Why';
import Mainservices from '../components/Services';
import Aboutus from '../components/Aboutus';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        <Hero/>
        <Logos />
        <Why />
        <Mainservices/>
        <Ourprocess />
        <Aboutus />
        <Faq />
      </div>
    </>
  )
}

