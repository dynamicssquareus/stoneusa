import React, { useState, useRef } from "react";
import Head from "next/head";
import ModelBox from "@/components/ModelBox";
import Image from "next/image";
import HomeSlider from "@/components/HomeSlider";
import VerticalTabs from "@/components/VerticalTabs";
import HeroSlider from "@/components/HeroSlider";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Granite Monuments Manufacturer & Exporter from India | Stone Discover
        </title>
        <meta
          name="description"
          content="Stone Discover is a leading Indian manufacturer and exporter of premium granite monuments and headstones, serving memorial dealers worldwide since 1984."
        />
        <link rel="canonical" href="https://www.stonediscover.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Granite Monuments Manufacturer & Exporter from India | Stone Discover"
        />
        <meta
          property="og:description"
          content="Stone Discover is a leading Indian manufacturer and exporter of premium granite monuments and headstones, serving memorial dealers worldwide since 1984."
        />
        <meta property="og:url" content="https://www.stonediscover.com/" />
        <meta property="og:site_name" content="Stone Discover" />
        <meta
          property="og:image"
          content="https://www.stonediscover.com/img/stone-home-o.jpeg"
        />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Stone Discover" />
        <meta
          name="twitter:title"
          content="Granite Monuments Manufacturer & Exporter from India | Stone Discover"
        />
        <meta
          name="twitter:description"
          content="Stone Discover is a leading Indian manufacturer and exporter of premium granite monuments and headstones, serving memorial dealers worldwide since 1984."
        />
        <meta
          name="twitter:image"
          content="https://www.stonediscover.com/img/stone-home-o.jpeg"
        />
      </Head>

      {/* <div className="hero-banner-one">
        <Image
          src="/img/banner/main-bg.jpg"
          alt="Hero Banner"
          fill
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          priority
          className='desh-top'
        />

        <div className="relative z-10">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="hero-banner-content">
                  <h1>Trusted Wholesale Granite Headstones Supplier</h1>
                  <p>A Leading Granite Monuments Manufacturer and Exporter from India </p>
                  <div className="hero-banner-btn">
                    <ModelBox className="btn-three" headerText="Scale Your Store!" buttonText="Get Quote Now" />
                    <ModelBox className="btn-transparent" headerText="Scale Your Store!" buttonText="Request Catalogue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <section className="hero-banner-custom">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="hero-banner-content">
                <h1>Granite Monuments Manufacturer, Supplier & Exporter </h1>
                <p>Premium granite memorials crafted at our own factory in India — supplying monument dealers, funeral homes, and cemetery suppliers across the USA and Canada since 1984. No middlemen. No markups.</p>
                <div className="hero-banner-btn">
                  <ModelBox
                    className="btn-three"
                    headerText="Scale Your Store!"
                    buttonText="Request a Quote"
                  />
                  <ModelBox className="btn-transparent" headerText="Scale Your Store!" buttonText="Request Catalogue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <HeroSlider />

      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="over-imgaa">
              <Image
                src="/img/banner/Granite-Headstones-Monuments.png"
                alt="Hero Banner"
                width={1024}
                height={368}
                className="mobile-newaa"
                priority
              />
            </div>
          </div>
        </div>
      </div> */}

      <section className="about-us-section about-us-section-hh p-b-40 p-t-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-content">
                <h2>
                  Who We Are and Why It Matters to Your Business
                </h2>
                <p>Stone Discover has been a direct-manufacturer and wholesale exporter of premium granite monuments,  supplying memorial dealers, funeral homes, cemetery suppliers, and wholesale distributors across the USA and  Canada since 1984. We are not a trading company or a middleman. We own and operate our complete production chain, from granite sourcing at  quarry base in Khammam, Telangana, through manufacturing at our processing facility, to export-grade packaging and direct container shipment.</p>
                <p>Every <a href="/tombstones-monuments/">Cemetery memorial</a> headstones that leaves our facility has been through a documented quality process, block inspection at source, precision cutting and polishing, multi-point surface checks, and secure export packaging. With a consistent production capacity for bulk and container-load orders, we are built for long-term supply partnerships — not one-off transactions. If you are looking for a granite headstone supplier you can rely on month after month, that is exactly what we have been doing since 1984.</p>
                <div className="d-flex-grd">
                  <div className="grif-list">
                    <span>40+</span>
                    <p>Years of Expertise</p>
                  </div>
                  <div className="grif-list">
                    <span>70+</span>
                    <p>Countries</p>
                  </div>
                  <div className="grif-list">
                    <span>10,000+</span>
                    <p>Container Shipment</p>
                  </div>
                </div>
                <a href="/about-us/" className="btn btn-four m-t-30">
                  Read More<span className="sr-only">about Stone Discover</span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-us-image">
                <Image
                  src="/img/webpages/about-main-one.png"
                  alt="stone discover unite"
                  className="img-fluid"
                  width={670}
                  height={589}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section-one m-p-02">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="heading-center p-b-40">
                <h2 className="m-b-20">
                  <span>From Our Quarry in India to Your Warehouse Door</span>
                </h2>
                <p>We source our granite directly from Khammam, Telangana, one of India's most reliable regions for dense, polishable black and grey granite. Blocks are inspected at the quarry before they reach our processing facility, where they go through precision cutting, hand-finishing, surface polishing, and final quality checks. The result is a headstone that is dimensionally accurate, surface-consistent, and export-ready — packed in fumigated wooden crates designed to survive ocean freight to the USA and Canada without damage.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-02a">
                <HomeSlider />
              </div>
            </div>
          </div>
        </div>
        <div className="container  p-t-80">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-center p-b-40">
                <h2 className="m-b-30">Pillars of Strength</h2>
                <p>We have spent over four decades building a supply system that monument dealers and funeral homes can depend on. These are the five things our trade partners tell us matter most — and the five things we have built our business around.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card-05">
                <div className="card-05-item">
                  <Image
                    src="/img/icons/about-pi-01.png"
                    alt="About Us"
                    className="img-fluid"
                    width={48}
                    height={48}
                  />
                  <span>Finest Quality Stones</span>
                  <p>Each headstone is sourced from certified quarries and passes a multi-point quality inspection before shipment.</p>
                </div>
                <div className="card-05-item">
                  <Image
                    src="/img/icons/about-pi-02.png"
                    alt="About Us"
                    className="img-fluid"
                    width={48}
                    height={48}
                  />
                  <span>Factory-Direct Pricing</span>
                  <p> No agents, no brokers. You buy directly from the manufacturer — which means better margins for your business.
                  </p>
                </div>
                <div className="card-05-item">
                  <Image
                    src="/img/icons/about-pi-03.png"
                    alt="About Us"
                    className="img-fluid"
                    width={48}
                    height={48}
                  />
                  <span>On-time Delivery</span>
                  <p>Standard bulk orders are produced and dispatched within 8-10 weeks. We keep you updated at every stage.
                  </p>
                </div>
                <div className="card-05-item">
                  <Image
                    src="/img/icons/about-pi-04.png"
                    alt="About Us"
                    className="img-fluid"
                    width={48}
                    height={48}
                  />
                  <span>Bulk Order</span>
                  <p> From mixed LCL consignments to full container orders — we have the capacity and systems to scale with your business.
                  </p>
                </div>
                <div className="card-05-item">
                  <Image
                    src="/img/icons/about-pi-05.png"
                    alt="About Us"
                    className="img-fluid"
                    width={48}
                    height={48}
                  />
                  <span>Shipping Worldwide</span>
                  <p>We ship direct to US and Canadian ports — Los Angeles, New York, Houston, Vancouver — with full export documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section-two p-b-80 p-t-100 m-p-03">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-items-center">
              <div className="left-card-01-img">
                <Image
                  src="/img/webpages/headstones-side-pic.png"
                  alt="headstones"
                  className="img-fluid"
                  width={555}
                  height={546}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-content">
                <h2>Why Monument Dealers Choose Stone Discover
                </h2>
                <p>There are many granite exporters in India. What sets Stone Discover apart is not just what we make, but how we operate. We source our premium granite directly from the renowned quarries of Khammam, operate our own factory, manage our own quality checks, and ship directly. That means when you place an order with us, you are dealing with the people who process, finish, and export the stone—not a sales office that contracts the work out.</p>
                <ul className="my-flex-item">
                  <li>
                    <div>
                      <i className="bi bi-check-lg"></i>{" "}
                      <span>Fast Production & Turnaround Times</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="bi bi-check-lg"></i>{" "}
                      <span>Quality Checks Before Shipment</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="bi bi-check-lg"></i>{" "}
                      <span>Manufacturer-direct pricing advantage</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="bi bi-check-lg"></i>{" "}
                      <span>Exclusive focus on granite memorial products</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="bi bi-check-lg"></i>{" "}
                      <span>Bulk order and container supply capability</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="bi bi-check-lg"></i>{" "}
                      <span>Dedicated B2B account support</span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <i className="bi bi-check-lg"></i>{" "}
                      <span>Proven export experience since 1984</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-center p-b-40">
                <h2 className="m-b-30">
                  Timeless <span>Craftsmanship Across</span> Borders
                </h2>
                <p>Stone Discover ships <a href="/headstones/">granite headstones</a> direct to the USA and Canada on a regular container schedule, with established logistics to key ports including Los Angeles, Houston, New York, and Vancouver. All shipments come with full export documentation, fumigated wooden crate packaging, and damage-free delivery commitment. We also supply to Australia, the United Kingdom, Germany, France, Ireland, and New Zealand, making us a single-source granite supplier for distributors operating across multiple markets.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <VerticalTabs />
            </div>
          </div>
        </div>
      </section>

      <section className="new-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-center p-b-40">
                <h2 className="m-b-30">
                  Ready to Source Granite Monuments <span> Direct from the Manufacturer</span>?
                </h2>
                <p>Whether you are placing your first container order or looking to switch from your current granite supplier, our export team is ready to help. Share your requirements with us, including product types, volumes, target market, and delivery port, and we will provide pricing, lead times, and a sample catalogue within 24 hours. Most trade enquiries receive a response within one business day. </p>
              </div>
              <div className="button-center-new text-center">
                <a href="/get-quote-now/" className="btn btn-three">
                  Request a Trade Quote
                </a>
                <a href="/catalog-download/" className="btn btn-four">
                  Download Trade Catalogue
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="p-b-80 p-t-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-center p-b-40">
                <h2 className="m-b-30">
                 Custom Engraving & <span>Blank Headstone Supply</span>
                </h2>
                <p>All granite headstones in our range are available with custom engraving completed at our facility in India, or as polished blank Headstone ready for local engraving by your team. Common engraving options include sandblast engraving, laser engraving, and hand-painted lettering. Custom religious symbols, portraits, and bespoke border designs are available on request. Minimum quantities apply for custom engraving options — contact our team for details.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="grid">
                <figure className="card-001">
                  <Image
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-289.png"
                    alt="granite engraved headstone"
                    width={329}
                    height={288}
                  />
                </figure>
                <figure className="card-001">
                  <Image
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-290.png"
                    alt="granite engraved headstone"
                    width={329}
                    height={288}
                  />
                </figure>
                <figure className="card-001">
                  <Image
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-291.png"
                    alt="granite engraved headstone"
                    width={329}
                    height={288}
                  />
                </figure>
                <figure className="card-001">
                  <Image
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-292.png"
                    alt="granite engraved headstone"
                    width={329}
                    height={288}
                  />
                </figure>
                <figure className="card-001">
                  <Image
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-293.png"
                    alt="granite engraved headstone"
                    width={329}
                    height={288}
                  />
                </figure>
                <figure className="card-001">
                  <Image
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-294.png"
                    alt="granite engraved headstone"
                    width={329}
                    height={288}
                  />
                </figure>
                <figure className="card-001">
                  <Image
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-295.png"
                    alt="granite engraved headstone"
                    width={329}
                    height={288}
                  />
                </figure>
                <figure className="card-001">
                  <Image
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-296.png"
                    alt="granite engraved headstone"
                    width={329}
                    height={288}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-t-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-center p-b-40">
                <h2 className="m-b-30">
                  Delivering <span>Excellence Across</span> Borders
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="map-container grow">
                <span>
                  <img
                    decoding="async"
                    src="img/webpages/world-01.png"
                    alt="world-map"
                  />
                </span>
                <div
                  className="point canada tippy"
                  title="Canada"
                  hover-tooltip="Canada"
                  tooltip-position="top"
                ></div>
                <div
                  className="point usa tippy"
                  title="USA"
                  hover-tooltip="USA"
                  tooltip-position="top"
                ></div>
                <div
                  className="point uk tippy"
                  title="UK"
                  hover-tooltip="UK"
                  tooltip-position="top"
                ></div>
                <div
                  className="point france tippy"
                  title="France"
                  hover-tooltip="France"
                  tooltip-position="top"
                ></div>
                <div
                  className="point germany tippy"
                  title="Germany"
                  hover-tooltip="Germany"
                  tooltip-position="top"
                ></div>
                <div
                  className="point netherlands tippy"
                  title="Netherlands"
                  hover-tooltip="Netherlands"
                  tooltip-position="top"
                ></div>
                <div
                  className="point india tippy"
                  title="India"
                  hover-tooltip="India"
                  tooltip-position="top"
                ></div>
                <div
                  className="point australia tippy"
                  title="Australia"
                  hover-tooltip="Australia"
                  tooltip-position="top"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="heading-center p-b-40">
                <h2 className="m-b-30">
                  Recent <span>Export</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="grid">
                <figure className="card-001">
                  <img
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-305.png"
                    alt="Polished headstones batch"
                  />
                </figure>
                <figure className="card-001">
                  <img
                    loading="lazy"
                    src="/img/webpages/p-2.jpg"
                    alt="Cross monument on base"
                  />
                </figure>
                <figure className="card-001">
                  <img
                    loading="lazy"
                    src="/img/webpages/p-3.jpg"
                    alt="Black granite memorials"
                  />
                </figure>
                <figure className="card-001">
                  <img
                    loading="lazy"
                    src="/img/webpages/p-4.jpg"
                    alt="Granite tomb covers"
                  />
                </figure>
                <figure className="card-001">
                  <img
                    loading="lazy"
                    src="/img/webpages/p-5.jpg"
                    alt="Shield shaped memorial wrapped"
                  />
                </figure>
                <figure className="card-001">
                  <img
                    loading="lazy"
                    src="/img/webpages/Granite-Headstones-306.png"
                    alt="Pallets wrapped for shipping"
                  />
                </figure>
                <figure className="card-001">
                  <img
                    loading="lazy"
                    src="/img/webpages/p-7.png"
                    alt="Crated slabs ready to export"
                  />
                </figure>
                <figure className="card-001">
                  <img
                    loading="lazy"
                    src="/img/webpages/p-8.png"
                    alt="Cartons prepared for dispatch"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
