import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon.</p>
  );
};

const ContactForm = () => {
  const [result, setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mknnqeh",
        "template_j7t6o0f",
        form.current,
        "3cmsMiWKszg0T_j68"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  setTimeout(() => {
    setResult(false);
  }, 30000);

  return (
    <form className="mb-5" ref={form} onSubmit={sendEmail}>
      <div className="d-flex gap-3 mb-4">
        <input
          style={{ borderRadius: "4px", height: "40px", borderHover: "none" }}
          className="w-50 ps-2"
          type="text"
          placeholder="Your Name"
          required
          name="fullName"
        />
        <input
          style={{ borderRadius: "4px", height: "40px" }}
          className="w-50 ps-2"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>
      <input
        style={{ borderRadius: "4px", height: "40px" }}
        className="w-100 ps-2"
        type="text"
        placeholder="Subject"
        required
      />
      <textarea
        style={{ height: "150px", borderRadius: "4px" }}
        className="w-100 mt-4 ps-2"
        placeholder="Message"
        required
        name="message"
      />
      <input
        style={{ height: "40px", borderRadius: "50px" }}
        className="px-5 mt-3 contact-submit-btn"
        type="submit"
        value="Send Message"
      />
      <div>{result ? <Result /> : null}</div>
    </form>
  );
};

export default ContactForm;
