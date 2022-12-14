import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import {LastctaButton} from "../Buttons/buttons/LastctaButton"

export default function LastCta({arg}) {
    return (
      <>
        {arg.cta_data?.map((Cta, index) => (
          <section key={index} className="lastcta__section">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-12 lastcta__text_container">
                  <div className="lastcta__heading">
                   <PortableText value={Cta.Title}/>
                  </div>
                </div>
                <div className="button-container d-flex justify-content-center col-md-12 col-sm-12">
                     <LastctaButton />
                  </div>
              </div>
            </div>
          </section>
        ))}
      </>
    );
}