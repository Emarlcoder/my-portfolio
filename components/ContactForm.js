

const ContactForm = () => {
  return (
    <>
      <h1 className="text-light">Contact Me!</h1>
      <form
        className="row g-3"
        name="contact-form"
        method="POST"
        data-netlify="true"
      >
        <input
          type="hidden"
          name="portfolio-contact-form"
          value="contact-form"
        />
        <div className="col-md-6">
          <label for="firstName" className="form-label">
            <h5 className="fw-bold text-light">First Name</h5>
          </label>
          <input type="text" className="form-control" id="firstName" required />
        </div>
        <div className="col-md-6">
          <label for="lastName" className="form-label">
            <h5 className="fw-bold text-light">Last Name</h5>
          </label>
          <input type="text" className="form-control" id="lastName" required />
        </div>
        <div className="col-md-8">
          <label for="emailInfo" className="form-label">
            <h5 className="fw-bold text-light">E-mail</h5>
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInfo"
            required
          />
        </div>
        <div className="col-md-4">
          <label for="phoneNumber" className="form-label">
            <h5 className="fw-bold text-light">Phone Number</h5>
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="+54 (11) 1111-1111"
          />
        </div>
        <div className="col-md-12">
          <label for="comments" className="form-label">
            <h5 className="fw-bold text-light">
              Type your message here{" "}
              <i className="custom-icon cil-chevron-double-down h5"></i>
            </h5>
          </label>
          <textarea
            className="form-control"
            id="comments"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;