import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import { AboutButton } from "../Buttons//buttons/AboutButton";
import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

import styles from '../Buttons/buttons/AboutButton.module.css'

export default function Aboutus({arg}) {
    const ReadMore = () => {
      const [isReadmore, setIsReadMore] = useState(true);

      const toggle = () => {
        setIsReadMore(!isReadmore);
      }

      return(
        <>
          {arg.about_data?.map((About, index) => 
            <div key={index} className="text">
                {isReadmore ? <PortableText value={About.About_desc}/> : <PortableText value={About.About_more}/> }
            </div>
          )}
          <button type="submit" className={styles.buton} onClick={toggle} >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 0C4.93461 0 0 4.93461 0 11C0 17.0654 4.93461 22 11 22C17.0654 22 22 17.0654 22 11C22 4.93461 17.0654 0 11 0V0ZM11 20.4259C5.80297 20.4259 1.57457 16.1975 1.57457 11C1.57457 5.80297 5.80297 1.57457 11 1.57457C16.1975 1.57457 20.4259 5.80297 20.4259 11C20.4257 16.1975 16.1975 20.4259 11 20.4259Z" fill="white"/>
            <path d="M10.9999 5.30313C10.6168 5.30313 10.2857 5.43804 10.0057 5.7075C9.72622 5.97714 9.58618 6.29605 9.58618 6.66396C9.58618 7.05717 9.71835 7.37969 9.98323 7.63158C10.2477 7.88364 10.5866 8.00959 10.9999 8.00959C11.4132 8.00959 11.7521 7.88364 12.0166 7.63158C12.2817 7.37969 12.4138 7.05695 12.4138 6.66396C12.4138 6.29602 12.274 5.97734 11.9941 5.7075C11.714 5.43804 11.383 5.30313 10.9999 5.30313H10.9999Z" fill="white"/>
            <path d="M9.57861 8.66739H12.4061V16.2047H9.57861V8.66739Z" fill="white"/>
            </svg>
            Научи Повече
          </button>
        </>        
      )
    }

  //ne barai myrsho
  useEffect(() => {
    AOS.init({
      once:true
    });
  }, [])

  //
  return (
    <>
      {arg.about_data?.map((About, index) => (
        <section id="about" key={index} className="aboutus">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12 section-text-container text-center d-flex flex-column aboutus-text-container">
                <h1 data-aos="fade-down" className="section-title">
                  За <span className="brand-span">Ramhard</span>
                </h1>
                <div data-aos="fade-up" className="section-subtitle">
                  <ReadMore/>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
