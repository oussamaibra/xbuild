"use client";
import Link from "next/link";
import Image from "next/image";
import { services2, services3test } from "@/data/services";
export default function ServiceDetails({ serviceItem }) {
  if (!serviceItem) {
    return <div>Loading service details...</div>;
  }
  return (
    <section className="service-details-section section-padding">
      <div className="container">
        <div className="service-details-wrapper">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="service-details-image">
                <Image
                  src={serviceItem.imgSrc}
                  width={740}
                  height={336}
                  alt="img"
                />
              </div>
              <div className="service-details-content">
                <h2>{serviceItem.title}</h2>
                <p>
                 {serviceItem.description_detail}
                </p>
                {/* <p className="mt-4 mb-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum,
                </p> */}
                <div className="row g-4">
                  <div className="col-lg-7">
                    <div className="service-details-image">
                      <Image
                        src={serviceItem.imgSrc}
                        width={413}
                        height={265}
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="content">
                      <h3>Services Benefits:</h3>
                      <p className="mt-2 mb-2">
                      {serviceItem.description_detail}
                      </p>
                      {/* <p>
                        Xbuild h variations of be passages of Lorem Ipsum
                        available,
                      </p> */}
                    </div>
                    <ul className="details-list">
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Une technologie de pointe au service de vos projets de forage
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Parce que la précision est essentielle
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        nous utilisons les équipements de diagnostic les plus avancés du secteur.
                      </li>
                    </ul>
                  </div>
                </div>
                <h4>3 Simple Steps to Process</h4>
                <p className="mt-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum,
                </p>
                <div className="row g-4 mt-2">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="service-details-box">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/15.svg"
                          width={28}
                          height={28}
                          alt="img"
                        />
                        <h5>Planning</h5>
                      </div>
                      <p>
                        There are many Xbuild a variations of passages of Lorem
                        Ipsum
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="service-details-box">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/16.svg"
                          width={36}
                          height={28}
                          alt="img"
                        />
                        <h5>Design</h5>
                      </div>
                      <p>
                        There are many Xbuild a variations of passages of Lorem
                        Ipsum
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="service-details-box">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/17.svg"
                          width={28}
                          height={28}
                          alt="img"
                        />
                        <h5>Get Paid</h5>
                      </div>
                      <p>
                        There are many Xbuild a variations of passages of Lorem
                        Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-1 pt-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum,
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="search-widget">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input type="text" placeholder="Search" />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      {services3test.map((elm, i) => (
                        <li key={i}>
                          <Link href={`/service-details/${elm.id}`}>
                            {elm.title}
                          </Link>
                          <span>
                            <i className="fa-regular fa-arrow-right-long" />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>Download</h3>
                  </div>
                  <div className="brochures-download-items">
                    <div className="brochures-items">
                      <div className="icon">
                        <i className="fal fa-file-pdf" />
                      </div>
                      <div className="content">
                        <h5>Our Brochures</h5>
                        <p>Download</p>
                      </div>
                    </div>
                    <Link href={`#`} className="download-btn">
                      <i className="fa-light fa-download" />
                    </Link>
                  </div>
                  <div className="brochures-download-items">
                    <div className="brochures-items">
                      <div className="icon">
                        <i className="fal fa-file-pdf" />
                      </div>
                      <div className="content">
                        <h5>Company Details</h5>
                        <p>Download</p>
                      </div>
                    </div>
                    <Link href={`#`} className="download-btn active">
                      <i className="fa-light fa-download" />
                    </Link>
                  </div>
                </div>
                <div className="service-sidebar-widget">
                  <div
                    className="contact-bg text-center bg-cover"
                    style={{
                      backgroundImage:
                        'url("/assets/img/service/contact-bg.jpg")',
                    }}
                  >
                    <p>Do You Need Help? We're Here to Support You</p>
                    <Image
                      src="/assets/img/service"
                      width={149}
                      height={64}
                      alt="img"
                    />
                    <Link href={`/contact`} className="theme-btn w-100">
                      Contact us now
                      <i className="fa-regular fa-arrow-right" />
                    </Link>
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
