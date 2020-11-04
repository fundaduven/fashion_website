import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import ContactForm from "./Components/ContactForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./Components/CustomForm";
import Icons from "./Components/Icons";
import Preview from "./Components/Preview";

const URL =
  "https://gmail.us2.list-manage.com/subscribe/post?u=7feac0984ebcb4e3d9519efc7&amp;id=bd3db09a99";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Icons />
        <Preview />

        <MailchimpSubscribe
          url={URL}
          render={({ subscribe, status, message }) => (
            <ContactForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />

        <MailchimpSubscribe
          url={URL}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
