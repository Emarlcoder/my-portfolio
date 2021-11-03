import Layout from "../components/Layout";

const Contact = () => (
  <Layout footer={false}>
    <div className="row py-2">
      <div className="col-4 bg-dark text-light py-5">
        <h1>Contact Info:</h1>
        <h4 className="fw-bold text-light"><i className="cib-mail-ru"></i> emarlcoder@gmail.com</h4>
        <h4 className="fw-bold text-light"><i className="cib-github"></i> <a href="https://www.github.com/emarlcoder" className="text-light" target="_blank">emarlcoder</a></h4>
        <h4 className="fw-bold text-light"><i className="cib-linkedin"></i> <a href="https://www.linkedin.com/in/emanuel-romero-lópez/" className="text-light" target="_blank">Emanuel Romero López</a></h4>
        <h4 className="fw-bold text-light"><i className="cib-whatsapp"></i> +54 11 3092-2409</h4>
      </div>
      <div className="col-1 bg-light"></div>
      <div className="col-6 bg-dark text-light py-5">
          <h1>Contact Me!</h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" required/>
            </div>
            <div className="col-md-6">
              <label for="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" required/>
            </div>
            <div className="col-md-8">
              <label for="emailInfo" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="emailInfo" required/>
            </div>
            <div className="col-md-4">
              <label for="phoneNumber" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phoneNumber" placeholder="+54 (11) 1111-1111"/>
            </div>
            <div className="col-md-12">
              <label for="comments" className="form-label">Comments, questions?</label>
              <textarea className="form-control" id="comments" rows="3" required></textarea>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
      </div>
    </div>
  </Layout>
);

export default Contact;