import Script from 'next/script'
import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import { useRef } from "react";
import React, { Component } from "react";
import Slider from "react-slick";
import apple from "../Images/Logos/apple.svg"

export default function Logos() {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    const query = '*[_type == "logos"]';

    client.fetch(query).then((data) => setLogo(data));
  }, []);    

  const settings = {
    slidesToShow: 6,
      slidesToScroll: 1,
      autoplaySpeed: 1000,
      arrows: true,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
        }
      }]
  };

    return (
      <>
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
        <div className="logos">
          <div className="slider">
              <Slider className="slide-track" {...settings}>
                <div className="slide">
                  <img src="http://wuu.tonev.design/ramhrard-desktop/Images/logos/apple.svg"/>
                </div>
                <div className="slide">
                  <img src="http://wuu.tonev.design/ramhrard-desktop/Images/logos/apple.svg"/>
                </div>
                <div className="slide">
                  <img src="http://wuu.tonev.design/ramhrard-desktop/Images/logos/apple.svg"/>
                </div>
                <div className="slide">
                  <img src="http://wuu.tonev.design/ramhrard-desktop/Images/logos/apple.svg"/>
                </div>
                <div className="slide">
                  <img src="http://wuu.tonev.design/ramhrard-desktop/Images/logos/apple.svg"/>
                </div>
                
               
              </Slider>              
          </div>
        </div>
      </>
    );
}