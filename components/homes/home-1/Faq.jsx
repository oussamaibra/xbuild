import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";
import { faqs } from "@/data/faq";
export default function Faq() {
  return (
    <section
    className="faq-section fix section-padding section-bg-2 bg-cover"
    style={{ backgroundImage: 'url("/assets/img/faq/bg-shape.png")' }}
  >
    <div className="track-shape float-bob-x">
      <Image src="/assets/img/track.png" width={163} height={79} alt="img" />
    </div>
    <div className="container">
      <div className="faq-wrapper">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="section-title">
                <h6 className="wow fadeInUp">
                  <i className="fa-regular fa-arrow-left-long" />
                  FAQ
                  <i className="fa-regular fa-arrow-right-long" />
                </h6>
                <h2 className="splt-txt wow">
                  <AnimatedText text="Questions Fréquemment" /> <br />
                  <AnimatedText text="Posées" />
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                Dans le cadre de nos projets de forage, certaines questions reviennent souvent. 
                Vous trouverez ici des réponses claires pour mieux comprendre nos services et notre expertise.
              </p>
              <div className="icon-items wow fadeInUp" data-wow-delay=".2s">
                <div className="icon">
                  <i className="fa-regular fa-check" />
                </div>
                <div className="content">
                  <h5>PROJETS SUR MESURE</h5>
                  <span>
                    Chaque site est unique, c’est pourquoi nous adaptons nos solutions de forage
                    aux spécificités du terrain et aux besoins de nos clients.
                  </span>
                </div>
              </div>
              <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
                <div className="icon">
                  <i className="fa-regular fa-check" />
                </div>
                <div className="content">
                  <h5>TECHNOLOGIE MODERNE</h5>
                  <span>
                    Nous utilisons des équipements de pointe pour garantir efficacité,
                    sécurité et précision sur chaque projet de forage.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-accordion">
              <div className="accordion" id="accordion">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="accordion-item mb-3 wow fadeInUp"
                    data-wow-delay={faq.delay}
                  >
                    <h5 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          faq.expanded ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${faq.id}`}
                        aria-expanded={faq.expanded}
                        aria-controls={`faq${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h5>
                    <div
                      id={`faq${faq.id}`}
                      className={`accordion-collapse collapse ${
                        faq.expanded ? "show" : ""
                      }`}
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}
