import WhySection from "./subcomponents/WhySection";
import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from '../pages/client'

export default function Why() {

    const [why, setWhy] = useState([]);

    useEffect(() => {
        const query = '*[_type == "whyus"]';

        client.fetch(query)
            .then((data) => setWhy(data))            
    }, []);

    return (
        <>
            {why.map((whyus, index) => (
                <section className="why">
                    <div className="container">
                        <div className="row">
                                <div className="col-md-12 col-12 text-center">
                                    <div>
                                        <h1>{whyus.Title_one}</h1>
                                        <h3>{whyus.Subtitle_one}</h3>
                                    </div>
                                </div>
                        </div>
                        <WhySection />
                    </div>
                </section>
            ))}
        </>
    )
}