import { PortableText } from "@portabletext/react";
import { useEffect } from "react";
import Footer_en from "../components/Footer_en";
import Navbar from "../components/Navbar";

export default function TermsAndConditions() {

    const [prop, setProp] = useState([]);

    useEffect(() => {
      const query = '*[_type == "terms_and_conditions"]';
  
      client.fetch(query).then((data) => setProp(data));
    }, []);

    return (
        <>
        <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                        <div className="policies">
                        {prop?.map((Data, index) => 
                            <div key={index}>
                                <PortableText value={Data.terms_en}/>   
                            </div>                     
                        )}
                        </div>
                    </div>
                </div>
            </div>
        <Footer_en />
        </>
    )
}