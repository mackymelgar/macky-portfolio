export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <p className="contact-intro">
        Interested in working together or have a question?  
        Feel free to reach out — I’m always open to discussing new opportunities.
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">✉</span>
            <a href="mailto:melgarmacky@gmail.com">
              melgarmacky@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">f</span>
            <a
              href="https://web.facebook.com/markedre.melgar/"
              target="_blank"
              rel="noreferrer"
            >
              markedre.melgar
            </a>
          </div>
        </div>



        {/* Contact Form */}
        <form
          className="contact-form"
          action="https://formspree.io/f/maqqqope"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* Formspree enhancements */}
          <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
          <input type="hidden" name="_next" value="https://your-site-url/#contact" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <button type="submit">Send Message</button>
      </form>

      </div>
    </section>
  )
}
