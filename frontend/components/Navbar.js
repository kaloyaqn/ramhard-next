import {PriButton } from "./buttons/Button";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Navbar() {

  useEffect(() => {
    AOS.init();
  }, [])


    return (
        <>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent aos-init aos-animate">
        <div className="container-fluid">
          <a className="navbar-brand" href="">ramhard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " href="#hero">Начало</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why">Защо нас?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#process">Процес</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">За нас</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">ЧЗВ</a>
              </li>
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Език
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item d-flex justify-content-center" href="#"><img width={150} height={100} src="https://gradcontent.com/lib/400x296/golqm-duner.jpg" /></a></li>
                <li><a class="dropdown-item" href="#"><img width={150} height={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsovYsLjiHD7S1ZK0lnq3_WcLL17iU-gsjg&usqp=CAU" /> </a></li>
                <li><a class="dropdown-item" href="#"><img width={150} h={100} src="https://images.genius.com/261eda43a0e647b0de5978bb8313bc2b.1000x1000x1.jpg" /></a></li>
              </ul>
            </li>

              <li className="nav-item">
                <a href="#cta-down">
                  <PriButton />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            </header>
        </>
    )
}