import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light static-top">
          <div className="container"></div>
        </nav>
        <header className="masthead text-black text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">
                  Soon, you will be looking at the most stylish clothes in the
                  mirror
                </h1>
                <h2> But how about a preview for now? </h2>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
