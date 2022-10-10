import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import AOS from 'aos'

export default function Faq({arg}) {

  useEffect(() => {
    AOS.init({
      once:true
    })
  }, [])


    return (
      <>
      {arg.faq_data?.map((Faq, index) => (        
        <section key={index} id="faq" class="faq">
          <div class="container">
            <div class="row">
              <div data-aos="fade-down" class="col aos-init aos-animate">
                <h1>
                  Често задавани <br />
                  <span>въпроси</span>
                </h1>
              </div>
            </div>
            <div data-aos="fade-up" class="faq-container aos-init aos-animate">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {Faq.Q_one}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <PortableText value={Faq.A_one}/>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      {Faq.Q_two}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <PortableText value={Faq.A_two}/>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      {Faq.Q_three}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <PortableText value={Faq.A_three}/>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree1"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      {Faq.Q_four}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree1"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree1"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <PortableText value={Faq.A_four}/>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree2"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      {Faq.Q_five}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree2"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree2"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                       <PortableText value={Faq.A_five}/>
                    </div>
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