import "../styles/Contact.css";

import Header from "../components/Header";
const Contact = () => {
  return (
    <>
      <Header/>
      <div className="contact-page">
        <div className="contact">
          <section className="contact-section">
            <div className="contact-container">
              <div className="contact-info">
                <h1>Get in Touch</h1>
                <p>
                  WE’D LOVE TO HEAR FROM YOU!
                  <br />
                  Got a question about your order? Need help finding the perfect
                  pair? Our team is here to assist you.
                </p>
                <p>
                  <strong>E-Mail:</strong> info@shoepalace.com <br />
                  <strong>Phone:</strong> +94 xx xxx xxx <br />
                  <strong>Address:</strong> 123 Sneaker Street, Los Angeles, CA,
                  90001
                </p>
                <button className="more-info">More Info</button>
              </div>

              <div className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="E-Mail" />
                <textarea placeholder="Message"></textarea>
                <button className="contact-submit-btn">Submit</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
