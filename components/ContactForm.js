import{ init } from 'emailjs-com';
init("user_SRT2TwH7scoeFetUCyUp8");

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r66dc5p', 'template_53wyaxh', form.current, 'user_SRT2TwH7scoeFetUCyUp8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <h1 className="text-light mb-3">Contact Me!</h1>
      <form
        className="row g-3"
        name="contact-form"
        method="POST"
      >
        <div className="col-md-6">
          <label for="firstName" className="form-label">
            <h5 className="fw-bold text-light">First Name</h5>
          </label>
          <input type="text" className="form-control border border-primary bg-light" id="firstName" required name="from_firstName" placeholder="First Name"/>
        </div>
        <div className="col-md-6">
          <label for="lastName" className="form-label">
            <h5 className="fw-bold text-light">Last Name</h5>
          </label>
          <input type="text" className="form-control border border-primary bg-light" id="lastName" required name="from_lastName" placeholder="Last Name"/>
        </div>
        <div className="col-md-8">
          <label for="emailInfo" className="form-label">
            <h5 className="fw-bold text-light">E-mail</h5>
          </label>
          <input
            type="email"
            className="form-control border border-primary bg-light"
            id="emailInfo"
            required
            name="mail_mail"
            placeholder="E-mail"
          />
        </div>
        <div className="col-md-4">
          <label for="phoneNumber" className="form-label">
            <h5 className="fw-bold text-light">Phone Number</h5>
          </label>
          <input
            type="text"
            className="form-control border border-primary bg-light"
            id="phoneNumber"
            placeholder="+54 (11) 1111-1111"
            name="from_phone"
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
            className="form-control textarea border border-primary bg-light"
            id="comments"
            rows="3"
            required
            name="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div className="col-md-12 d-grid w-50 position-relative top-100 start-50 translate-middle mt-4">
          <input type="submit" value="Send" className="btn btn-primary btn-lg"/>
        </div>
      </form>
    </>
  );
}

export default ContactForm;