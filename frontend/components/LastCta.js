import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import LastctaButton from "./buttons/LastctaButton";

export default function LastCta() {
    const [cta, setCta] = useState([]);

    useEffect(() => {
      const query = '*[_type == "cta"]';
  
      client.fetch(query).then((data) => setCta(data));
    }, []);

    function initialize_map() {
        const ramhard = { lat: 41.932, lng: 25.549 }
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: ramhard,
        });

        const marker = new google.maps.Marker({
            position: ramhard,
            map: map,
        });
    }

    window.initialize_map = initialize_map;

    return (
      <>
        {cta.map((Cta, index) => (
          <section className="lastcta__section">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-12 lastcta__text_container">
                  <div className="lastcta__heading">
                   <PortableText value={Cta.Title}/> {/*vetrove */}
                  </div>
                  <LastctaButton />
                </div>
              </div>
            </div>
            <div id="map"></div>
          </section>
        ))}
      </>
    );
}