import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import Slider from "react-slick";
import Image from "next/image";
import telefon from "../Images/telefon.png";

export default function Mainservices() {
  const [service, setService] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => setService(data));
  }, []);

  const settings = {
    dots: false,
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
      {service.map((Services, index) => (
      <section key={index} className="uslugi">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 text-center d-flex flex-column ulugi-text-container">
              <h1 className="section-title">
                Нашите <span className="brand-span">услуги</span>
              </h1>
              <h6 className="section-subtitle">
                {Services.Description}
              </h6>
            </div>
          </div>
          <div className="row">
            <Slider className="" {...settings}>
              <div className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    Смяна на <br /> дисплей
                  </p>
                </div>
              </div>
              <div className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    Смяна на <br /> дисплей
                  </p>
                </div>
              </div>
              <div className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    Смяна на <br /> дисплей
                  </p>
                </div>
              </div>
              <div className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    Смяна на <br /> дисплей
                  </p>
                </div>
              </div>
              <div className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    Смяна на <br /> дисплей
                  </p>
                </div>
              </div>
              <div className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    Смяна на <br /> дисплей
                  </p>
                </div>
              </div>
              <div className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    Смяна на <br /> дисплей
                  </p>
                </div>
              </div>
              <div className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    Смяна на <br /> дисплей
                  </p>
                </div>
              </div>
              <div className="services-slider-container">
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
      ))}
    </>
  );
}
