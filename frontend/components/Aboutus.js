import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import { AboutButton } from "../components/buttons/AboutButton";
import $ from "jquery";
import React from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Aboutus() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "aboutus"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);

    const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggle = () => {
      setIsReadMore(!isReadMore);
    };


    return (
      <p className="text">
        {about.map((About, index) =>
          isReadMore ? (
            <PortableText value={About.About_desc} />
          ) : (
            <PortableText value={About.About_more} />
          )
        )}
        <button onClick={toggle} className="d-flex justify-content-center col-md-12 col-sm-12 ne_pokazvai">
          <AboutButton />
        </button>
      </p>
    );
  };

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      {about.map((About, index) => (
        <section key={index} className="aboutus">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12 section-text-container text-center d-flex flex-column aboutus-text-container">
                <h1 data-aos="fade-down" className="section-title">
                  За <span className="brand-span">Ramhard</span>
                </h1>
                <div data-aos="fade-up" className="section-subtitle">
                  <ReadMore></ReadMore>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
