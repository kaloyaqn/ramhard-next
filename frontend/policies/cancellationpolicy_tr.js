import { PortableText } from "@portabletext/react";
import { client } from "../pages/client";
import Footer_tr from "../components/Footer_tr";
import Navbar from "../components/Navbar";

export default function CancellationPolicy(props) {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
            <div className="policies">
              {props.data?.map((Data, index) => 
                <div key={index}>
                  <PortableText value={Data.right_tr} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer_tr />
    </>
  );
}

export async function getServerSideProps() {
  const query = '*[_type == "cancellation_policy"]';
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
}
