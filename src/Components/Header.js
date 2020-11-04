import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-light bg-light static-top">
          <div class="container"></div>
        </nav>
        <header class="masthead text-black text-center">
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-xl-9 mx-auto">
                <h1 class="mb-5">
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
