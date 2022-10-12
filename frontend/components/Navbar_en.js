import { PriButton } from "../Buttons/buttons/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar_en() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent aos-init aos-animate">
          <div className="container-fluid">
            <Link href="/en">
              <a className="navbar-brand">ramhard</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link " href="#hero">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#why">
                    Why us?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <ul class="dropdown-menu">
                    {/*бг*/}
                    <li>
                      <Link
                        class="dropdown-item d-flex justify-content-center"
                        href="/"
                      >
                        <img
                          width={50}
                          height={50}
                          src="https://cdn-icons-png.flaticon.com/512/555/555544.png"
                        />
                      </Link>
                    </li>
                    
                    {/*тр*/}

                    <li>
                      <Link
                        class="dropdown-item d-flex justify-content-center"
                        href="/tr"
                      >
                        <img
                          width={50}
                          height={50}
                          src="https://cdn-icons-png.flaticon.com/512/555/555560.png"
                        />
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                    <PriButton />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
