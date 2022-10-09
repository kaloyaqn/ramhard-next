import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import React from "react";
import Image from "next/image";
import { PriButton } from "./buttons/Button";
import { ButtonSec } from "./buttonSec/ButtonSec";
import facebook from "../Images/socials/facebook.svg";
import tiktok from "../Images/socials/tiktok.svg";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";


export default function Hero() {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const query = '*[_type == "hero_title"]';

    client.fetch(query).then((data) => setTitle(data));
  }, []);
  //animaciiki
  const [move, setMove] = React.useState(false);
  
  const WhyCards = {
    offscreen: {
      y:3000
    },
    onscreen: {
      y:50,
      rotate: -10,
      transition: {
        type:"spring",
        bounce: 0.4,
        duration: 0.8

      }
    }
  }

  return (
    <>      
      {title.map((Htitle, index) => (
        <section key={index} className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-12 hero-container">
                <motion.div 
                  className="hero-container"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
               
                >
                  <h1 className="heading">
                    Помагаме за <span className="brand-span">ремонта </span>
                    на вашия смартфон или таблет.
                  </h1>
                  <PortableText value={Htitle.Description} />

                  <div className="btn-container">
                    <PriButton />
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
                </motion.div>
              </div>
              <div className="col-lg-5 col-sm-12 col-12 hero_image_container">
                <img className="img-fluid test" src={urlFor(Htitle.Image)} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

