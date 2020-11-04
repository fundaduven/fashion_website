import React from "react";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = (event) => {
    event.preventDefault();
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  };

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <section className="call-to-action text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mx-auto">
              <h2 className="mb-4 newsletter">
                {" "}
                Subscribe to our newsletter and receive %25 off your first
                purchase!{" "}
              </h2>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email..."
                      ref={(node) => (email = node)}
                    ></input>
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="signupbtn btn btn-block btn-lg btn-primary"
                      onClick={submit}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomForm;
