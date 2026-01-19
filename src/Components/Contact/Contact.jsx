import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import arrow from "../../assets/white-arrow.png";
import "@fortawesome/fontawesome-free/css/all.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "94790097-b59d-4ba2-a874-165442b60297");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <div className="exp-head">
        <p className="exp-starter">CONTACT ME</p>
        <h2 className="exp-title">Get in Touch</h2>
      </div>

      <div className="contact-wrap">
        <div className="contact-col contact-card">
          <h3 className="contact-subhead">
            Send me a message <img src={msg_icon} alt="" />
          </h3>

          <p className="contact-text">
            Any questions? I'd love to hear from you!
          </p>

          <ul className="contact-links">
            <li>
              <a href="mailto:danirenn16@gmail.com" className="social-icon" aria-label="Email">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="mailto:danirenn16@gmail.com" className="contact-link">Email</a>
            </li>

            <li>
              <a
                href="https://github.com/danicodes1"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://github.com/danicodes1"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://ca.linkedin.com/in/dani-ren"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://ca.linkedin.com/in/dani-ren"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-col contact-card">
          <form onSubmit={onSubmit} className="contact-form">
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required />

            <label>Phone number</label>
            <input type="text" name="Email" placeholder="Enter your email" required />

            <label>Your message</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required />

            <button type="submit" className="contact-btn">
              Submit <img src={arrow} alt="" />
            </button>

            <span className="contact-result">{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
