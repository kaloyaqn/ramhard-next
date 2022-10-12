import { urlFor, client } from "./client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import { PriButton } from "../Buttons/buttons/Button";
import { ButtonSec }  from "../Buttons/buttonSec/ButtonSec";
import { LastctaButton } from "../Buttons/buttons/LastctaButton"
import { useEffect } from "react";
import { useState } from "react";
import Maps from '../components/Maps';
import Logos from '../components/Logos';
import Link from "next/link";
import facebook from "../Images/socials/facebook.svg";
import tiktok from "../Images/socials/tiktok.svg";
import Image from "next/image";
import Slider from "react-slick";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer_en from '../components/Footer_en'

import styles from '../Buttons/buttons/AboutButton.module.css'
import Navbar_en from "../components/Navbar_en";

export default function En(props) {

  const ReadMore = () => {
    const [isReadmore, setIsReadMore] = useState(true);

    const toggle = () => {
      setIsReadMore(!isReadmore);
    }

    return (
      <>
        {props.about.about_data?.map((About, index) =>
          <div key={index} className="text">
              {isReadmore ? <PortableText value={About.About_desc_en}/> : <PortableText value={About.About_more_en}/> }
          </div>
        )}
        <button type="submit" className={styles.buton} onClick={toggle} >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0C4.93461 0 0 4.93461 0 11C0 17.0654 4.93461 22 11 22C17.0654 22 22 17.0654 22 11C22 4.93461 17.0654 0 11 0V0ZM11 20.4259C5.80297 20.4259 1.57457 16.1975 1.57457 11C1.57457 5.80297 5.80297 1.57457 11 1.57457C16.1975 1.57457 20.4259 5.80297 20.4259 11C20.4257 16.1975 16.1975 20.4259 11 20.4259Z" fill="white"/>
          <path d="M10.9999 5.30313C10.6168 5.30313 10.2857 5.43804 10.0057 5.7075C9.72622 5.97714 9.58618 6.29605 9.58618 6.66396C9.58618 7.05717 9.71835 7.37969 9.98323 7.63158C10.2477 7.88364 10.5866 8.00959 10.9999 8.00959C11.4132 8.00959 11.7521 7.88364 12.0166 7.63158C12.2817 7.37969 12.4138 7.05695 12.4138 6.66396C12.4138 6.29602 12.274 5.97734 11.9941 5.7075C11.714 5.43804 11.383 5.30313 10.9999 5.30313H10.9999Z" fill="white"/>
          <path d="M9.57861 8.66739H12.4061V16.2047H9.57861V8.66739Z" fill="white"/>
          </svg>
          Learn more
        </button>
      </>        
    )
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow:3,
          slidesToScroll:2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      once:true
    })
  })

    return (
      <>
        <Navbar_en />
        {props.hero.hero_data?.map((Htitle, index) =>
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
                         We&rsquo;re helping to <span className="brand-span">repair </span>
                         your smartphone or tablet
                       </h1>
                       <PortableText value={Htitle.Description_en} />
     
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
        )}

        <Logos/>

        {props.why.whyus_data?.map((whyus, index) =>
                <section id="why" key={index} className="why">
                <div className="container">
                  <div className="row">
                    <div data-aos="fade-up" className="col-md-12 col-sm-12 col-12 text-center">
                        <div className="why-text-container d-flex flex-column p-12">
                        <h1 className="section-title">
                          Customer trust is our
                          <span className="brand-span"> goal</span>
                        </h1>
                        <h6 className="section-subtitle">{whyus.Subtitle_one_en}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="why__container">
                    <div className="row">
                      <div data-aos="fade-left" className="col-md-5 col-12 order-md-2 order-sm-1 why__text">
                        <div className="why-section-text-container d-flex justify-content-center">
                          <span>{whyus.Title_two_en.slice(0, 1)}</span>
                          <h2>{whyus.Title_two_en}</h2>
                          <PortableText value={whyus.Subtitle_two_en} />
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
                          <span>{whyus.Title_three_en.slice(0, 1)}</span>
                          <h2>{whyus.Title_three_en}</h2>
                          <PortableText value={whyus.Subtitle_three_en} />
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
                          <span>{whyus.Title_four_en.slice(1, 3)}</span>
                          <h2>{whyus.Title_four_en}</h2>
                          <PortableText value={whyus.Subtitle_four_en} />
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
        )}

            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

      {props.serv.service_data?.map((Services, index) =>
      <section id="services" key={index} className="uslugi">
      <div className="container">
        <div className="row">
          <div data-aos="fade-up" className="col-md-12 col-12 text-center d-flex flex-column ulugi-text-container">
            <h1 className="section-title">
              Our <span className="brand-span">services</span>
            </h1>
            <h6 className="section-subtitle">
              {Services.Description_en}
            </h6>
          </div>
        </div>
        <div className="row">
          <Slider className="" {...settings}>
            <div data-aos="fade-up" data-aos-duration="200" className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_one)} />
                <p>
                  {Services.Service_one_en}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="300" className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_two)} />
                <p>
                  {Services.Service_two_en}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="400" className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_three)} />
                <p>
                  {Services.Service_three_en}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_four)} />
                <p>
                  {Services.Service_four_en}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="600" className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_five)} />
                <p>
                  {Services.Service_five_en}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="700"  className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_six)} />
                <p>
                  {Services.Service_six_en}
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800"  className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_one)} />
                <p>
                  Смяна на <br /> дисплей
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="500"  className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_one)} />
                <p>
                  Смяна на <br /> дисплей
                </p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" className="services-slider-container">
              <div className="slider-content">
                <img src={urlFor(Services.Image_one)} />
                <p>
                  Смяна на <br /> дисплей
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
        )}

        {props.proc.oproc_data?.map((oProcess, index) =>
            <section id="process" key={index} className="ourprocess">
            <div className="container">
              <div className="row">
                <div data-aos="fade-up" className="col-md-12 col-12 text-center d-flex flex-column section-text-container">
                  <h1 className="section-title">
                    Our <span className="brand-span">process</span>
                  </h1>
                  <h6 className="section-subtitle">{oProcess.Description_en}</h6>
                </div>
              </div>
              <div className="row d-flex justify-content-center ourprocess-row">
                <div data-aos="fade-up-right" className="col-md-3 col-12">
                  <div className="ourprocess-content d-flex flex-column ">
                    <span className="one">1</span>
                    <div className="zaglavie">
                      <PortableText className="zaglavie" value={oProcess.Arg_one_en}/>
                    </div>
                    <div className="paragraph">
                      <PortableText className="paragraph" value={oProcess.Desc_arg_one_en}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-12"></div>
                <div data-aos="fade-up" className="col-md-3 col-12">
                  <div className="ourprocess-content d-flex flex-column ">
                    <span className="two">2</span>
                    <div className="zaglavie">
                      <PortableText className="zaglavie" value={oProcess.Arg_two_en}/>
                    </div>
                    <div className="paragraph">
                      <PortableText className="paragraph" value={oProcess.Desc_arg_two_en}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-12"></div>
                <div data-aos="fade-up-left" className="col-md-3 col-12">
                  <div className="ourprocess-content d-flex flex-column ">
                    <span className="three">3</span>
                    <div className="zaglavie">
                      <PortableText className="zaglavie" value={oProcess.Arg_three_en}/>
                    </div>
                    <div className="paragraph">
                      <PortableText className="paragraph" value={oProcess.Desc_arg_three_en}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {props.about.about_data?.map((About, index) =>
              <section id="about" key={index} className="aboutus">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-12 section-text-container text-center d-flex flex-column aboutus-text-container">
                    <h1 data-aos="fade-down" className="section-title">
                      About <span className="brand-span">Ramhard</span>
                    </h1>
                    <div data-aos="fade-up" className="section-subtitle">
                      <ReadMore/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )}
        {props.faq.faq_data?.map((Faq, index) =>
               <section key={index} id="faq" className="faq">
               <div className="container">
                 <div className="row">
                   <div data-aos="fade-down" className="col aos-init aos-animate">
                     <h1>
                        Frequently asked  <br />
                       <span>questions</span>
                     </h1>
                   </div>
                 </div>
                 <div data-aos="fade-up" className="faq-container aos-init aos-animate">
                   <div className="accordion accordion-flush" id="accordionFlushExample">
                     <div className="accordion-item">
                       <h2 className="accordion-header" id="flush-headingOne">
                         <button
                           className="accordion-button collapsed"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#flush-collapseOne"
                           aria-expanded="false"
                           aria-controls="flush-collapseOne"
                         >
                           {Faq.Q_one_en}
                         </button>
                       </h2>
                       <div
                         id="flush-collapseOne"
                         className="accordion-collapse collapse"
                         aria-labelledby="flush-headingOne"
                         data-bs-parent="#accordionFlushExample"
                       >
                         <div className="accordion-body">
                           <PortableText value={Faq.A_one_en}/>
                         </div>
                       </div>
                     </div>
                     <div className="accordion-item">
                       <h2 className="accordion-header" id="flush-headingTwo">
                         <button
                           className="accordion-button collapsed"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#flush-collapseTwo"
                           aria-expanded="false"
                           aria-controls="flush-collapseTwo"
                         >
                           {Faq.Q_two_en}
                         </button>
                       </h2>
                       <div
                         id="flush-collapseTwo"
                         className="accordion-collapse collapse"
                         aria-labelledby="flush-headingTwo"
                         data-bs-parent="#accordionFlushExample"
                       >
                         <div className="accordion-body">
                           <PortableText value={Faq.A_two_en}/>
                         </div>
                       </div>
                     </div>
                     <div className="accordion-item">
                       <h2 className="accordion-header" id="flush-headingThree">
                         <button
                           className="accordion-button collapsed"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#flush-collapseThree"
                           aria-expanded="false"
                           aria-controls="flush-collapseThree"
                         >
                           {Faq.Q_three_en}
                         </button>
                       </h2>
                       <div
                         id="flush-collapseThree"
                         className="accordion-collapse collapse"
                         aria-labelledby="flush-headingThree"
                         data-bs-parent="#accordionFlushExample"
                       >
                         <div className="accordion-body">
                           <PortableText value={Faq.A_three_en}/>
                         </div>
                       </div>
                     </div>
                     <div className="accordion-item">
                       <h2 className="accordion-header" id="flush-headingThree1">
                         <button
                           className="accordion-button collapsed"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#flush-collapseThree1"
                           aria-expanded="false"
                           aria-controls="flush-collapseThree"
                         >
                           {Faq.Q_four_en}
                         </button>
                       </h2>
                       <div
                         id="flush-collapseThree1"
                         className="accordion-collapse collapse"
                         aria-labelledby="flush-headingThree1"
                         data-bs-parent="#accordionFlushExample"
                       >
                         <div className="accordion-body">
                           <PortableText value={Faq.A_four_en}/>
                         </div>
                       </div>
                     </div>
                     <div className="accordion-item">
                       <h2 className="accordion-header" id="flush-headingThree2">
                         <button
                           className="accordion-button collapsed"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#flush-collapseThree2"
                           aria-expanded="false"
                           aria-controls="flush-collapseThree"
                         >
                           {Faq.Q_five_en}
                         </button>
                       </h2>
                       <div
                         id="flush-collapseThree2"
                         className="accordion-collapse collapse"
                         aria-labelledby="flush-headingThree2"
                         data-bs-parent="#accordionFlushExample"
                       >
                         <div className="accordion-body">
                            <PortableText value={Faq.A_five_en}/>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>
        )}
        {props.cta.cta_data?.map((Cta, index) =>
                  <section key={index} className="lastcta__section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 col-12 lastcta__text_container">
                        <div className="lastcta__heading">
                         <PortableText value={Cta.Title_en}/>
                        </div>
                      </div>
                      <div className="button-container d-flex justify-content-center col-md-12 col-sm-12">
                           <LastctaButton />
                        </div>
                    </div>
                  </div>
                </section>
        )}

        <Maps/>
      <Footer_en arg={props.footer_data}/>
      </>
    );
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
  