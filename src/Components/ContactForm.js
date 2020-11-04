import React, { useState, useEffect } from "react";
import "./ContactForm.css";

const ContactForm = ({ status, message, onValidated }) => {
  const isSubmitting = status === "sending";

  useEffect(() => {
    if (status === "success") {
      setFirstname("");
      setLastname("");
      setEmail("");
      setNMB("");
    }
  }, [status]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [nmb, setNMB] = useState("");

  const submit = (event) => {
    event.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        FNAME: firstname,
        LNAME: lastname,
        PHONE: nmb,
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
      <div className="contactform">
        <h1>Let's Get In Touch!</h1>
        <form>
          <label htmlFor="fname">First Name </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name is ..."
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          ></input>
          <label htmlFor="lname">Last Name </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name is ..."
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          ></input>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <label htmlFor="phone">Phone number</label>
          <br />
          <input
            type="tel"
            id="telNo"
            name="telNo"
            placeholder="+49 1234 567 8990"
            value={nmb}
            onChange={(event) => setNMB(event.target.value)}
          ></input>
          <br />
          <input
            type="submit"
            value={isSubmitting ? "Sending" : "Submit"}
            disabled={isSubmitting}
            onClick={submit}
          ></input>
        </form>
      </div>
      <div className="formMsg">
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
      </div>
    </div>
  );
};

export default ContactForm;
