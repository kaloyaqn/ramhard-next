import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import Slider from "react-slick";
import Image from "next/image";
import telefon from "../Images/telefon.png"
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Mainservices({arg}) {
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
    });
  })

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
      {arg.service_data?.map((Services, index) => (
      <section id="services" key={index} className="uslugi">
        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="col-md-12 col-12 text-center d-flex flex-column ulugi-text-container">
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
              <div data-aos="fade-up" data-aos-duration="200" className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_one)} />
                  <p>
                    {Services.Service_one}
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="300" className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_two)} />
                  <p>
                    {Services.Service_two}
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="400" className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_three)} />
                  <p>
                    {Services.Service_three}
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="500" className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_four)} />
                  <p>
                    {Services.Service_four}
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="600" className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_five)} />
                  <p>
                    {Services.Service_five}
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="700"  className="services-slider-container">
                <div className="slider-content">
                  <img src={urlFor(Services.Image_six)} />
                  <p>
                    {Services.Service_six}
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
      ))}
    </>
  );
}
