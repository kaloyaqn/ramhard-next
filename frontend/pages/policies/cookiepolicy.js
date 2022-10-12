import { PortableText } from "@portabletext/react";
import { client } from "../client";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function CookiePolicy(props) {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
            <div className="policies">
              {props.data?.map((Data, index) => 
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

export async function getServerSideProps() {
  const query = '*[_type == "cookies_policy"]';
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
}
