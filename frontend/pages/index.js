import Hero from '../components/Hero.js';
import Logos from '../components/Logos';
import Ourprocess from '../components/Ourprocess';
import Why from '../components/Why';
import Mainservices from '../components/Services';
import Aboutus from '../components/Aboutus';
import Faq from '../components/Faq';
import LastCta from '../components/LastCta';
import Maps from '../components/Maps';

import { client } from "../pages/client";

/*
export async function getServerSideProps() {
  const hero_query = '*[_type == "hero_title"]';
  const hero_data = await client.fetch(hero_query);

  console.log(hero_query);
  console.log(hero_data)

  return {
    props: { hero_data }
  };

}*/

export default function Home() {
  return (
    <>
      <div className='overflow-hidden'>
        <Hero/>
        <Logos/>
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


/*
export const getServerSideProps = async (context) => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `${process.env.SANITY_URL}query=${query}`;  const data = await fetch(url).then((res) => res.json());
  const posts = data.result;  if (!posts || !posts.length === 0) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
}*/

/*
export const getServerSideProps = async () => {
  const query = `*[ _type == "hero_title"]`;

  const recipe = await client.fetch(query);

  console.log(recipe);

  if (!recipe) return { props: null, notFound: true };
  else
    return {
      props: {
        recipe
      },
    };
};
*/

