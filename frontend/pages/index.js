import Image from 'next/image'
import PrimaryBtn from '../components/buttons/primaryBtn';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Navbar from '../components/Navbar';
import Why from '../components/Why';

export default function Home({title}) {
  return (
    <>
      <Hero />
      <Logos />
      <Why />
      <PrimaryBtn />
    </>
  )
}

