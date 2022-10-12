import { PortableText } from "@portabletext/react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function CookiePolicy() {

  const [prop, setProp] = useState([]);

  useEffect(() => {
    const query = '*[_type == "cookies_policy"]';

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
                  <PortableText value={Data.cookie_bg} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}