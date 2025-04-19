"use client";

import { closeMobilemenu } from "@/utlis/toggleMobilemenu";
import Link from "next/link";
import Image from "next/image";

export default function Offcanvas({ children }) {
  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info ">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="">
                  <Link href="/">
                    <Image
                      src="/assets/img/logo/black-logo.png"
                      width={100}
                      height={64}
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div
                  onClick={() => closeMobilemenu()}
                  className="offcanvas__close"
                >
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
              ABC Pro Forage vous accompagne dans vos projets de forage
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <a
                    href="#nav"
                    className="meanmenu-reveal"
                    style={{ right: 0, left: "auto", display: "inline" }}
                  >
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul style={{ display: "none" }}>{children}</ul>
                  </nav>
                </div>
              </div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        9 bis, chemin de la Grange du breuil <br /> 
                        91160 Ballainvilliers
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:pro-forages@wanadoo.fr">
                        <span className="mailto:pro-forages@wanadoo.fr">
                        pro-forages@wanadoo.fr
                        </span>
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Lundi-Vendredi, 09:00 h - 17:00 h 
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fa fa-briefcase" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:01 64 54 89 53">Bureau :01 64 54 89 53</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:06 86 37 38 08">M.Mathlouthi : 06 86 37 38 08</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:06 76 26 71 71">M.Mathlouthi : 06 76 26 71 71</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a href="contact.html" className="theme-btn text-center">
                    <span>
                      Nous Contactez
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay " onClick={() => closeMobilemenu()} />
    </>
  );
}
