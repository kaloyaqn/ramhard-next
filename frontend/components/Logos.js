import Script from 'next/script'
import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function Logos() {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    const query = '*[_type == "logos"]';

    client.fetch(query).then((data) => setLogo(data));
  }, []);

    return (
        <>
          <div className='carousel'>
            <div className='carousel__slider'>
              <ul className='carousel__list'>

              </ul>
            </div>
          </div>
        </>
    )
}