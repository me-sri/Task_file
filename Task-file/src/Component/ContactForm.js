import React, { useState } from "react";
import women from "../Images/Woman.png";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert("Data submitted");
      })
      .catch((error) => {
        console.error(error);
        alert("Error submitting data");
      });
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="contact-background">
        <div className="container-fluid  ">
          <div className="container contact-title-top">
            <div className="row">
              <div className="col-lg-6 about-contact">
                <div className="text-center">
                  <h3 className="contact-one-text ">Contact Us</h3>
                  <p className="contact-phara">
                    We are here to help you grow your business
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Full Name*"
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email Address*"
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone Number*"
                    onChange={handleChange}
                    required
                  />

                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </form>
              </div>

              <div className="col-lg-6">
                <div className="small-device-women">
                  <img src={women} alt="women" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactForm;
