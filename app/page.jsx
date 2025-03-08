/* eslint-disable @next/next/no-img-element */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./(components)/css/intro.css"
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <div
      style={{
        margin: 0,
        backgroundImage: "url(/bb2.jpg)",
        backgroundSize: "100% auto",
      }}
    >
      <img
        src="/bb2.jpg"
        style={{ width: "100%", height: "100%", position: "fixed", zIndex: -1 }}
        alt="Background"
      />
      <Navbar />
      <div id="intro">
        <div className="title">
          <span>The Mortals</span>
          <span className="slogan">
            <b>
              <i>
                Beyond objectification and beyond doubt, towards humility and
                humanity.
              </i>
            </b>
          </span>
        </div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ zIndex: 0 }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/biph.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/bisz.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/bigz.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div
          style={{
            backgroundImage: "url('./bb5.jpeg')",
            backgroundSize: "100% auto",
            height: "670px",
            width: "100%",
            textAlign: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              padding: "20px 20px 40px 20px",
            }}
          >
            <span className="header" style={{ fontFamily: "titleFont" }}>
              Brief Introduction
            </span>
            <p
              style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: "35px",
              }}
            >
              Human life rarely lasts beyond a century – we appear and vanish
              like flickers of light, a mere blink in the vast expanse of the
              cosmos. As mortals, our flesh may not endure through time’s
              inevitability. Still, our arts, our cultures, and our thoughts may
              cross generations, as our magazine The Mortals seeks to broaden
              students&apos; perspectives, aiming to impart knowledge,
              creativity, and the essence of humanity beyond the years spent on
              campus, beyond the “shelf life” of our mortal souls, celebrating
              individuality with connections to societies. We welcome anyone and
              everyone, beyond objectification and beyond doubt, towards
              humility and humanity.
            </p>
          </div>
        </div>
      </div>
      <div id="featured" className="container" style={{ paddingTop: "20px" }}>
        <div
          className="row g-0 text-center"
          style={{ paddingLeft: "5%", paddingRight: "5%" }}
        >
          <div
            className="col-3"
            style={{ backgroundColor: "rgb(82, 147, 250)" }}
          >
            <h1
              className="text-white"
              style={{ marginTop: "77%", fontFamily: "featuredFont" }}
            >
              <b>Featured</b>
            </h1>
          </div>
          <div id="carouselExampleCaptions" className="carousel slide col-9">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="d-block w-100"
                  style={{
                    backgroundImage: "url(/featured.png)",
                    backgroundSize: "100% auto",
                    height: "500px",
                  }}
                  alt="..."
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={{
                    padding: "10px",
                    marginBottom: "80px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="articleTitle">
                    Several Experiments with Descriptive Language
                  </span>

                  <h4>
                    <span style={{ fontFamily: "quoteFont" }}>
                      &quot;The silence, a weight most intangible but heavy,
                      permeates the forest, its trees dead and barren and the
                      ground thick with mud as incorporeal shadows sway and
                      merge with the ghastly trees.&quot;
                    </span>
                  </h4>
                  <h3 style={{ textAlign: "right", fontFamily: "quoteFont" }}>
                    --Timmy Zhang
                  </h3>
                  <a href="https://www.mortalsmag.com/post/several-experiments-with-descriptive-language">
                  <button className="buttonRM">
                    <span>Read More</span>
                    <i
                      className="bi bi-arrow-right-circle-fill"
                      style={{ paddingLeft: "5px" }}
                    ></i>
                  </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="d-block w-100"
                  style={{
                    backgroundImage: "url(/featured2.jpg)",
                    backgroundSize: "100% auto",
                    height: "500px",
                  }}
                  alt="..."
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={{
                    padding: "10px",
                    marginBottom: "110px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="articleTitle">
                    The Paradox of Justified Injustice
                  </span>

                  <h4>
                    <span style={{ fontFamily: "quoteFont" }}>
                      &quot;Bam - the sound of conviction, or freedom.&quot;
                    </span>
                  </h4>
                  <h3 style={{ textAlign: "right", fontFamily: "quoteFont" }}>
                    --Alex Huang
                  </h3>
                  <a href="https://www.mortalsmag.com/post/the-paradox-of-justified-injustice">
                  <button className="buttonRM">
                    <span>Read More</span>
                    <i
                      className="bi bi-arrow-right-circle-fill"
                      style={{ paddingLeft: "5px" }}
                    ></i>
                  </button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="d-block w-100"
                  style={{
                    backgroundImage: "url(/featured3.webp)",
                    backgroundSize: "100% auto",
                    height: "500px",
                  }}
                  alt="..."
                />
                <div
                  className="carousel-caption d-none d-md-block"
                  style={{
                    padding: "10px",
                    marginBottom: "90px",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                >
                  <span className="articleTitle">
                    Nations and Nationalistic Symbols
                  </span>

                  <h4>
                    <span style={{ fontFamily: "quoteFont" }}>
                      &quot;Tourists simplify nations to iconic symbols due to
                      modern constraints.&quot;{" "}
                    </span>
                  </h4>
                  <h3 style={{ textAlign: "right", fontFamily: "quoteFont" }}>
                    --James Hong
                  </h3>
                  <h4>
                    <span
                      style={{
                        fontFamily: "'Times New Roman', Times, serif",
                        textAlign: "center",
                      }}
                    >
                      Discover how limited holidays, social media, and low-cost
                      carriers shape our travel perceptions.
                    </span>
                  </h4>
                  <a href="https://www.mortalsmag.com/post/nations-and-nationalistic-symbols">
                  <button className="buttonRM">
                   
                    <span>Read More</span>
                    
                    <i
                      className="bi bi-arrow-right-circle-fill"
                      style={{ paddingLeft: "5px" }}
                    ></i>
                  </button>
                  </a>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
