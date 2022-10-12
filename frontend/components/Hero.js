import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import React from "react";
import Image from "next/image";
import {PriButton} from "../Buttons/buttons/Button";
import {ButtonSec}  from "../Buttons/buttonSec/ButtonSec";
import facebook from "../Images/socials/facebook.svg";
import tiktok from "../Images/socials/tiktok.svg";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero({arg}, props) {

  useEffect(() => {
    AOS.init({
      once:true
    })
  })

  return (
    <>      
      {arg.hero_data?.map((Htitle, index) => (
        <section id="hero" key={index} className="hero">
          <div className="container">
            <div className="row">
              <div data-aos="fade-right" className="col-lg-7 col-md-12 col-12 hero-container">
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
                    <motion.div
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{type: "spring", stiffness:400, damping:17}}
                    >
                      <PriButton />
                    </motion.div>
                    <motion.div
                    whileHover={{scale:1.1}}
                    whileTap={{scale: 0.9}}
                    transition={{type: "spring", stiffness: 400, damiping: 17}}
                    >
                    <ButtonSec />
                    </motion.div>
                  </div>
                  <div className="socials-container">
                    <Link href="https://www.tiktok.com/@plamenbogutliev">
                        <motion.div
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.9 }}
                             transition={{ type: "spring", stiffness: 400, damping: 17 }}                           
                        >

                            <div className="socials">
                              <Image src={tiktok} />
                            <span>Tiktok</span>
                          </div>
                        </motion.div>
                    </Link>

                    <Link href="https://www.facebook.com/www.ramhard.net">
                      <motion.div
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.9 }}
                             transition={{ type: "spring", stiffness: 400, damping: 17 }}                           
                      >
                      <div className="socials">
                        <Image src={facebook} />
                        <span>Facebook</span>
                      </div>
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </div>
              <div data-aos="fade-left" className="col-lg-5 col-sm-12 col-12 hero_image_container">
                <img className="img-fluid test" src={urlFor(Htitle.Image)} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

