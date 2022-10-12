import { PortableText } from "@portabletext/react";
import { useEffect } from "react";
import Footer_tr from "../components/Footer_tr";
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
                                <PortableText value={Data.terms_tr}/>   
                            </div>                     
                        )}
                        </div>
                    </div>
                </div>
            </div>
        <Footer_tr />
        </>
    )
}