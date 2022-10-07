import Script from 'next/script'
import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import $ from 'jquery'

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

      
    
function slide() {
  $('.logo-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
}



    return (
      <>
      <script>
      var jsdom = require('jsdom');
      $ = require('jquery')(new jsdom.JSDOM().window);
      $(document).ready(function() {
        slide()
      };
      </script>
        <div className="carousel">
          <div className="carousel__slider">
            <ul className="carousel__list">
              <div class="slide">
                <img
                  src="https://i49.vbox7.com/i/d6b/d6b81225a06.jpg"
                  height="100"
                  width="150"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://i49.vbox7.com/i/d6b/d6b81225a06.jpg"
                  height="100"
                  width="150"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://i49.vbox7.com/i/d6b/d6b81225a06.jpg"
                  height="100"
                  width="150"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://i49.vbox7.com/i/d6b/d6b81225a06.jpg"
                  height="100"
                  width="150"
                  alt=""
                />
              </div>
              <div class="slide">
                <img
                  src="https://i49.vbox7.com/i/d6b/d6b81225a06.jpg"
                  height="100"
                  width="150"
                  alt=""
                />
              </div>
            </ul>
          </div>
        </div>
      </>
    );
}