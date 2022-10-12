import { PortableText } from "@portabletext/react";
import { useEffect } from "react";
import {client} from '../pages/client'
import Footer_tr from "../components/Footer_tr";
import Navbar from "../components/Navbar";

export default function CancellationPolicy() {

  const [prop, setProp] = useState([]);

  useEffect(() => {
    const query = '*[_type == "cancellation_policy"]';

    client.fetch(query).then((data) => setProp(data));
  }, []);

  const [tmp, setTmp] = useState([]);

  useEffect(() => {
    const query = '*[_type == "footer_query"]';

    client.fetch(query).then((data) => setTmp(data));
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
                  <PortableText value={Data.right_tr} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer_tr arg={tmp} />
    </>
  );
}