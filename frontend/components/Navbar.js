import { PriButton } from "../Buttons/buttons/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent aos-init aos-animate">
          <div className="container-fluid">
            <Link href="/">
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
                  <Link href="#hero">
                    <a className="nav-link">Начало</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#why">
                    <a className="nav-link">Защо нас?</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#services">
                    <a className="nav-link">Услуги</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#about">
                    <a className="nav-link">За нас</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#faq">
                    <a className="nav-link">ЧЗВ</a>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Език
                  </a>
                  <ul className="dropdown-menu">
                    {/*ен*/}

                    <li>
                      <Link
                        className="dropdown-item d-flex justify-content-center"
                        href="/en"
                      >
                        <img
                          width={50}
                          height={50}
                          src="https://cdn-icons-png.flaticon.com/512/206/206626.png"
                        />
                      </Link>
                    </li>
                    {/*тр*/}

                    <li>
                      <Link
                        className="dropdown-item d-flex justify-content-center"
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
