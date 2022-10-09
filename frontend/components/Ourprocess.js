                                                                                            import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Ourprocess() {
  const [process, setProcess] = useState([]);

  useEffect(() => {
    const query = '*[_type == "ourprocess"]';

    client.fetch(query).then((data) => setProcess(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      {process.map((oProcess, index) => (
        <section key={index} className="ourprocess">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" className="col-md-12 col-12 text-center d-flex flex-column section-text-container">
                <h1 className="section-title">
                  Нашият <span className="brand-span">процес</span>
                </h1>
                <h6 className="section-subtitle">{oProcess.Description}</h6>
              </div>
            </div>
            <div className="row d-flex justify-content-center ourprocess-row">
              <div data-aos="fade-up-right" className="col-md-3 col-12">
                <div className="ourprocess-content d-flex flex-column ">
                  <span className="one">1</span>
                  <div className="zaglavie">
                    <PortableText className="zaglavie" value={oProcess.Arg_one}/>
                  </div>
                  <div className="paragraph">
                    <PortableText className="paragraph" value={oProcess.Desc_arg_one}/>
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-12"></div>
              <div data-aos="fade-up" className="col-md-3 col-12">
                <div className="ourprocess-content d-flex flex-column ">
                  <span className="two">2</span>
                  <div className="zaglavie">
                    <PortableText className="zaglavie" value={oProcess.Arg_two}/>
                  </div>
                  <div className="paragraph">
                    <PortableText className="paragraph" value={oProcess.Desc_arg_two}/>
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-12"></div>
              <div data-aos="fade-up-left" className="col-md-3 col-12">
                <div className="ourprocess-content d-flex flex-column ">
                  <span className="three">3</span>
                  <div className="zaglavie">
                    <PortableText className="zaglavie" value={oProcess.Arg_three}/>
                  </div>
                  <div className="paragraph">
                    <PortableText className="paragraph" value={oProcess.Desc_arg_three}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
