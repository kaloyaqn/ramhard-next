import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import {AboutButton} from "../components/buttons/AboutButton"

export default function Aboutus() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
      const query = '*[_type == "aboutus"]';
  
      client.fetch(query).then((data) => setAbout(data));
    }, []);

    return (
        <>
            {about.map((About, index) => (
                <section className="aboutus">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-12 section-text-container text-center d-flex flex-column aboutus-text-container">
                                <h1 className="section-title">За <span className="brand-span">Ramhard</span></h1>
                                <div className="section-subtitle">
                                    <PortableText value={About.About_desc}/>
                                </div>                                
                                <AboutButton />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}