import React, { useState } from "react";
import Input from "./shared/Input";
import Button from "./shared/Button";
import axios from "axios";
const Contact = ({ data }) => {
  const {
    name,
    address: { city, zip },
    phone,
    email,
    message,
  } = data;
  const [info, setInfo] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: "",
  });

  console.log(info);
  const handleChange = (e) => {
    setInfo({ [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setInfo({ contactName: "", contactEmail: "", contactMessage: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/contact",
      data: info,
    })
      .then((res) => {
        if (res.data.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (res.data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .then(() => resetForm());
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form
            id="contactForm"
            action="contact"
            name="contactForm"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <Input
                type="text"
                label="Name"
                size="35"
                value={info.contactName}
                id="contactName"
                name="contactName"
                placeholder="Your name.."
                onChange={handleChange}
              />
              <Input
                type="text"
                value={info.contactEmail}
                label="Email"
                size="35"
                id="contactEmail"
                name="contactEmail"
                placeholder="Your email.."
                onChange={handleChange}
              />
              <Input
                type="text"
                value={info.contactMessage}
                label="Message"
                multiline="true"
                size="35"
                id="contactMessage"
                name="contactMessage"
                placeholder="Your message :D"
                rows="15"
                cols="50"
                onChange={handleChange}
              />
              <Button className="submit" type="submit" text="Submit" />
            </fieldset>
          </form>
          {/* Error message */}
          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>
        {/* sides */}
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}
              <br />
              {email} <br />
              {city} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
