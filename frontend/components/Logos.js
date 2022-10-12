import Script from "next/script";
import { useState } from "react";
import { useEffect } from "react";
import { urlFor, client } from "../pages/client";
import { PortableText } from "@portabletext/react";
import { useRef } from "react";
import React, { Component } from "react";
import Slider from "react-slick";

export default function Logos() {
  return (
    <>
      <div className="logos-container">
        <div class="container-fluid h-100">
          <div class="row align-items-center h-100">
            <div class="container rounded">
              <div class="slider">
                <div class="logos">
                  <i class="fab fa-js fa-4x"></i>
                  <i class="fab fa-linkedin-in fa-4x"></i>
                  <i class="fab fa-dribbble fa-4x"></i>
                  <i class="fab fa-medium-m fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                </div>
                <div class="logos">
                  <i class="fab fa-js fa-4x"></i>
                  <i class="fab fa-linkedin-in fa-4x"></i>
                  <i class="fab fa-dribbble fa-4x"></i>
                  <i class="fab fa-medium-m fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                  <i class="fab fa-github fa-4x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
