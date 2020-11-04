import React from "react";
import "./ContactForm.css";

const ContactForm = ({ status, message, onValidated }) => {
  let email, name, surname, nmb;
  const isSubmitting = status === "sending";
  if (status === "success") {
    email = "";
    name = "";
    surname = "";
    nmb = "";
  }

  const submit = (event) => {
    event.preventDefault();
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: name.value,
        LNAME: surname.value,
        PHONE: nmb.value,
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
      <div className="contactform">
        <h1>Let's Get In Touch!</h1>
        <form>
          <label for="fname">First Name </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name is ..."
            ref={(node) => (name = node)}
          ></input>
          <label for="lname">Last Name </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name is ..."
            ref={(node) => (surname = node)}
          ></input>
          <label for="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="name@example.com"
            ref={(node) => (email = node)}
          ></input>
          <label for="phone">Phone number</label>
          <br />
          <input
            type="tel"
            id="telNo"
            name="telNo"
            placeholder="+49 1234 567 8990"
            ref={(node) => (nmb = node)}
          ></input>
          <br />
          <input
            type="submit"
            value={isSubmitting ? "sending" : "submit"}
            disabled={isSubmitting}
            onClick={submit}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
