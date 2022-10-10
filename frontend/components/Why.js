import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Why({arg}) {
  //animaciiki

  const Variants = {
    hidden: {
      x: 300
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  const Bratan = {
    nevijdam: {
      x:-300
    },
    visible: {
      x:0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  //nqma animaciiki :(
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    AOS.init({
      once:true
    });
  }, [])

  return (
    <>
      {arg.whyus_data?.map((whyus, index) => (
        <section key={index} className="why">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" className="col-md-12 col-sm-12 col-12 text-center">
                  <div className="why-text-container d-flex flex-column p-12">
                  <h1 className="section-title">
                    Доверието на клиентите е нашата{" "}
                    <span className="brand-span">цел</span>
                  </h1>
                  <h6 className="section-subtitle">{whyus.Subtitle_one}</h6>
                </div>
              </div>
            </div>
            <div className="why__container">
              <div className="row">
                <div data-aos="fade-left" className="col-md-5 col-12 order-md-2 order-sm-1 why__text">
                  <div className="why-section-text-container d-flex justify-content-center">
                    <span>{whyus.Title_two.slice(0, 1)}</span>
                    <h2>{whyus.Title_two}</h2>
                    <PortableText value={whyus.Subtitle_two} />
                  </div>
                </div>
                <div className="col-md-1 col-12"></div>
                <div data-aos="fade-right" className="col-md-6 col-12 order-md-1 order-sm-2 why__image_special">
                  <img
                    src={urlFor(whyus.Image_one)}
                    className="img-fluid"
                    alt="Защо да изберете нас първа снимка"
                  />
                </div>
              </div>
              <div className="row">
                <div data-aos="fade-left" className="col-md-5 col-12 order-md-1 order-sm-1 why__text">
                  <div data-aos="fade-right" className="why-section-text-container">
                    <span>{whyus.Title_three.slice(0, 1)}</span>
                    <h2>{whyus.Title_three}</h2>
                    <PortableText value={whyus.Subtitle_three} />
                  </div>
                </div>
                <div className="col-md-1 col-12"></div>
                <div data-aos="fade-left" className="col-md-6 col-12 order-md-2 order-sm-2 d-flex justify-content-center why__image">
                  <img
                    src={urlFor(whyus.Image_two)}
                    className="img-fluid"
                    alt="Защо да изберете нас първа снимка"
                  />
                </div>
              </div>
              <div className="row">
                <div data-aos="fade-left" className="col-md-5 col-12 order-md-2 order-sm-1 why__text">
                  <div className="why-section-text-container d-flex">
                    <span>{whyus.Title_four.slice(1, 3)}</span>
                    <h2>{whyus.Title_four}</h2>
                    <PortableText value={whyus.Subtitle_four} />
                  </div>
                </div>
                <div className="col-md-1 col-12"></div>
                <div data-aos="fade-right" className="col-md-6 col-12 order-md-1 order-sm-2 why__image">
                  <img
                    src={urlFor(whyus.Image_three)}
                    className="img-fluid"
                    alt="Защо да изберете нас първа снимка"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
