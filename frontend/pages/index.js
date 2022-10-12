import Hero from '../components/Hero.js';
import Logos from '../components/Logos';
import Ourprocess from "../components/Ourprocess"
import Why from '../components/Why';
import Mainservices from "../components/Services"
import Aboutus from '../components/Aboutus';
import Faq from '../components/Faq';
import LastCta from '../components/LastCta';
import Maps from '../components/Maps';
import { client } from "../pages/client";
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export default function Home(props) {
  return (
    <>
        <div className='overflow-hidden'>
        <Navbar />
        <Hero arg={props.hero}/>
        <Logos/>
        <Why arg={props.why}/>
        <Mainservices arg={props.serv}/>
        <Ourprocess arg={props.proc}/>
        <Aboutus arg={props.about}/>
        <Faq arg={props.faq}/>
        <LastCta arg={props.cta}/>
        <Maps /> {/*tova*/}
        <Footer arg={props.footer_data}/>
        </div>
    </>
  )
}

export async function getServerSideProps() {
  const hero_query = '*[_type == "hero_title"]';
  const hero_data = await client.fetch(hero_query);

  const whyus_query = '*[_type == "whyus"]';
  const whyus_data = await client.fetch(whyus_query);

  const service_query = '*[_type == "services"]';
  const service_data = await client.fetch(service_query);

  const oproc_query = '*[_type == "ourprocess"]';
  const oproc_data = await client.fetch(oproc_query);

  const about_query = '*[_type == "aboutus"]';
  const about_data = await client.fetch(about_query);

  const faq_query = '*[_type == "faq"]';
  const faq_data = await client.fetch(faq_query);

  const cta_query = '*[_type == "cta"]';
  const cta_data = await client.fetch(cta_query);

  const footer_query = '*[_type == "footer_query"]';
  const footer_data = await client.fetch(footer_query);

  return {
    props: { 
      hero: {
        hero_data
      },
      why: {
        whyus_data
      },
      serv: {
        service_data
      },
      proc: {
        oproc_data
      },
      about: {
        about_data
      },
      faq: {
        faq_data
      },
      cta: {
        cta_data
      },
      footer_data
    },
  };
}

