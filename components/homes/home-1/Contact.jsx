"use client";
import Image from "next/image";
import AnimatedText from "@/components/common/AnimatedText";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section fix section-padding bg-cover scrollSpySection"
      style={{ backgroundImage: 'url("/assets/img/contact-bg.jpg")' }}
    >
      <div className="contact-image float-bob-x">
        <Image
          src="/assets/img/testimonial/crop-man-with-blueprints-helmet.jpg"
          width={353}
          height={398}
          alt="image"
        />
      </div>
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="contact-items">
                <h3 className="splt-txt wow">
                  <AnimatedText text="Contactez-nous !" />
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-4 mt-md-0"
                >
                  <div className="row g-4">
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Nom"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          placeholder="Téléphone"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div className="form-clt">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Objet"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Écrivez votre message..."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".4s">
                      <button type="submit" className="theme-btn">
                        Envoyer le message <i className="fas fa-long-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title">
                  <h6 className="text-white wow fadeInUp">
                    <i className="fa-regular fa-arrow-left-long" />
                    Parlons ensemble
                    <i className="fa-regular fa-arrow-right-long" />
                  </h6>
                  <h2 className="text-white splt-txt wow">
                    <AnimatedText text="Forer avec passion, garantir votre satisfaction" />
                  </h2>
                </div>
                <p
                  className="text-white mt-3 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Depuis plus de 25 ans, ABC Pro Forage accompagne ses clients dans
                  leurs projets de forage, en garantissant des solutions fiables,
                  durables et adaptées à chaque besoin.
                </p>
                <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                  <div className="icon">
                    <i className="fa-solid fa-phone-volume" />
                  </div>
                  <div className="content">
                    <span>Appelez-nous</span>
                    <h4>
                      <a href="tel:+33">+33 </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
