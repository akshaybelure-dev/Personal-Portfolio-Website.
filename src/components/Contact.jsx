import { useState } from "react";
import emailIcon from "../assets/gmail.png";
import githubIcon from "../assets/gitHub.webp";
import linkedinIcon from "../assets/linkedin.webp";
import phoneIcon from "../assets/Phone.png";

function Contact() {
  const phoneNumber = "+91 8080168594";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <h3>Contact</h3>

      <div className="contact-grid">
         <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abelure4@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="contact-box"
>
          <span className="icon">
            <img src={emailIcon} alt="Email" />
          </span>
          <span>Email</span>
        </a>

        <button
  className="contact-box contact-copy"
  onClick={handleCopy}
  type="button"
>
  <span className="icon">
    <img src={phoneIcon} alt="Phone" />
  </span>
  <span>{copied ? "+91 8080168594 copied!!" : "Phone"}</span>
</button>


        <a
          href="https://github.com/akshaybelure-dev"
          target="_blank"
          rel="noreferrer"
          className="contact-box"
        >
          <span className="icon">
            <img src={githubIcon} alt="GitHub" />
          </span>
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/akshaybelure"
          target="_blank"
          rel="noreferrer"
          className="contact-box"
        >
          <span className="icon">
            <img src={linkedinIcon} alt="LinkedIn" />
          </span>
          <span>LinkedIn</span>
        </a>
      </div>
    </>
  );
}

export default Contact;
