"use client";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { useState } from "react";
export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
  
      <>
        <section
          id="about"
          className="about-section fix section-padding scrollSpySection"
        >
          <div className="about-shape-4 float-bob-x">
            <Image
              src="/assets/img/about/about-shape-4.png"
              width={367}
              height={772}
              alt="img"
            />
          </div>
          <div className="about-shape-5 float-bob-y">
            <Image
              src="/assets/img/about/about-shape-5.png"
              width={367}
              height={516}
              alt="img"
            />
          </div>
          <div className="container">
            <div className="about-wrapper-2">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="about-image">
                    <Image
                      src="/assets/img/about/e716200b-7822-46ac-9f4b-b8a7dc91e3a2.JPG"
                      alt="img"
                      width={337}
                      height={378}
                      className="wow fadeInLeft"
                      data-wow-delay=".3s"
                    />
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <Image
                        src="/assets/img/about/766cee5c-122f-458b-9274-640341d64f92.JPG"
                        width={303}
                        height={323}
                        alt="img"
                      />
                    </div>
                    <div className="video-items wow fadeInUp">
                      <a
                        onClick={() => setOpen(true)}
                        className="video-btn video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                      <a
                        onClick={() => setOpen(true)}
                        className="video-text video-popup"
                      >
                        Lire la vidéo
                      </a>
                    </div>
                    <div className="bar-shape">
                      <Image
                        src="/assets/img/about/bar.png"
                        width={40}
                        height={207}
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content">
                    <div className="section-title">
                      <h6 className="wow fadeInUp">
                        <i className="fa-regular fa-arrow-left-long" />
                        QUI SOMMES-NOUS ?
                        <i className="fa-regular fa-arrow-right-long" />
                      </h6>
                      <h2 className="splt-txt wow">
                        <AnimatedText text="Votre expert géotechnicien" />{" "}
                        <br />
                        <AnimatedText text="en ILE DE France" />
                      </h2>
                    </div>
                    <p
                      className="mt-3 mt-md-0 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      ABC PRO FORAGE assure les études de sol géotechniques
                      (missions géotechniques G1, G2 et G5), les sondages et les
                      forages dans toute l’île de France
                    </p>
                    <div className="row g-4 mt-3">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="icon-items">
                          <div className="icon">
                            <Image
                              src="/assets/img/icon/05.svg"
                              width={30}
                              height={30}
                              alt="img"
                            />
                          </div>
                          <h5 className="splt-txt wow">
                            <AnimatedText text="Étude et Réalisation de Forage" />
                          </h5>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="icon-items">
                          <div className="icon">
                            <Image
                              src="/assets/img/icon/06.svg"
                              width={30}
                              height={30}
                              alt="img"
                            />
                          </div>
                          <h5 className="splt-txt wow">
                            <AnimatedText text="Offre complète de services" />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <ul
                      className="list-items wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Nous répondons au besoin des particuliers et des
                        professionnels intervenant dans le domaine de la maison
                        individuelle (agents immobiliers, promoteurs immobilier,
                        artisans maçons) et dans le cadre de la rénovation
                        urbaine
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Notre rôle est de vous permettre de construire en toute
                        sécurité en analysant la composition du terrain et en
                        vous prévenant des risques y étant liés.
                      </li>
                      {/* <li>
                    <i className="fa-solid fa-circle-check" />
                    Release of Letraset sheets containing Lorem Ipsum
                  </li> */}
                    </ul>
                    <div className="about-author">
                      <Link
                        href={`/a`}
                        className="theme-btn wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        Découvrir plus{" "}
                        <i className="fa-regular fa-arrow-right" />
                      </Link>
                      <div
                        className="author-image wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <Image
                          src="/assets/img/about/author.png"
                          width={68}
                          height={68}
                          alt="author-img"
                        />
                        <div className="content">
                          <p>ABC PRO FORAGE, CEO</p>
                          <h4>M.Mathlouthi</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId="Cn4G2lZ_g2I"
          onClose={() => setOpen(false)}
        />{" "}
      </>
   
  );
}
