import React from "react";
import "./Preview.css";

const Preview = () => {
  return (
    <>
      <section className=" bgcolor showcase">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div
              id="dress"
              className=" col-lg-3 order-lg-2 text-white showcase-img"
            ></div>
            <div
              id="dress2"
              className=" col-lg-3 order-lg-2 text-white showcase-img"
            ></div>

            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Unique Stylish Dresses </h2>
              <p className="lead mb-0">
                Are you bored to find the same designs in every store? Stay
                tight! We are coming for you!!
              </p>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col-lg-3 text-white showcase-img" id="dress3"></div>
            <div className="col-lg-3 text-white showcase-img" id="dress4"></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Feel Special</h2>
              <p className="lead mb-0">
                Our designers are designers who follow the latest trends and
                follow the different, not the ordinary. Each design is just one
                and will only shine on you!
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-3 order-lg-2 text-white showcase-img"
              id="dress5"
            ></div>
            <div
              className="col-lg-3 order-lg-2 text-white showcase-img"
              id="dress6"
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Do you like our designs?</h2>
              <p className="lead mb-0">
                The dresses in these photos are just preview. Brand new designs
                will be waiting for you in the new year as of 2021. If you like
                our designs, please fill the contact form below and we will
                contact you for more!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
