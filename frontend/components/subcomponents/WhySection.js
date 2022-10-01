import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from '../../pages/client'

export default function WhySection() {
    
    const [why, setWhy] = useState([]);

    useEffect(() => {
        const query = '*[_type == "whyus"]';

        client.fetch(query)
            .then((data) => setWhy(data))            
    }, []);

    return (
        <>
            {why.map((whyus, index) => (
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h2>{whyus.Title_two}</h2>
                        <p>{whyus.Subtitle_two}</p>
                    </div>
                    <div className="col-md-1 col-12"></div>
                    <div className="col-md-5 col-12">
                        Kartinka
                    </div>
                </div>
            ))}
        </>
    )
}