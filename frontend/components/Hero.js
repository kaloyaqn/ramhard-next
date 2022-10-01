import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from '../pages/client'
import Image from 'next/image';
import WhySection from "./subcomponents/WhySection";
import PrimaryBtn from "./buttons/primaryBtn";
import Kurva, { KurvaButon } from "./buttons/Button";
import { ButtonSec } from "./buttonSec/ButtonSec";
import facebook from "../Images/socials/facebook.svg"
import tiktok from "../Images/socials/tiktok.svg"
import Link from "next/link"

export default function Hero() {

    //tuka pishish

   const [title, setTitle] = useState([]);
    
    useEffect(() => {
        const query = '*[_type == "hero_title"]';

        client.fetch(query)
            .then((data) => setTitle(data))            
    }, []);

    //tuka spirash da pishish
    
    return (
        <>
            {title.map((Htitle, index) => (
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-12 hero-container">

                            <h1>{Htitle.Title}</h1>
                            <p>{Htitle.Description}</p>

                            <div className="btn-container">
                                <KurvaButon />
                                <ButtonSec />
                            </div>
                            <div className="socials-container">
                                <Link href="https://www.tiktok.com/@plamenbogutliev">
                                    <div className="socials">
                                        <Image src={tiktok} />
                                    <span>Tiktok</span>
                                </div>
                                </Link>
                                
                                <Link href="https://www.facebook.com/www.ramhard.net">
                                <div className="socials">
                                    <Image src={facebook} />
                                    <span>Facebook</span>
                                </div>
                                </Link>
                            </div>
                            </div>
                            <div className="col-md-5 col-12">
                                <img className="img-fluid test" src={urlFor(Htitle.Image)}/>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}