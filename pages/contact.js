import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const Contact = () => (
  <Layout footer={false}>
    <div className="row py-2">
      <div className="col-4 bg-dark text-light py-5">
        <h1 className="text-light">Contact Info:</h1>
        <h4 className="fw-bold text-light"><i className="cib-mail-ru"></i> <a href="mailto: emarlcoder@gmail.com" className="text-light" target="_blank">emarlcoder@gmail.com</a></h4>
        <h4 className="fw-bold text-light"><i className="cib-github"></i> <a href="https://www.github.com/emarlcoder" className="text-light" target="_blank">emarlcoder</a></h4>
        <h4 className="fw-bold text-light"><i className="cib-linkedin"></i> <a href="https://www.linkedin.com/in/emanuel-romero-lópez/" className="text-light" target="_blank">Emanuel Romero López</a></h4>
        <h4 className="fw-bold text-light"><i className="cib-whatsapp"></i> <a href="https://wa.me/541130922409" className="text-light" target="_blank">+54 11 3092-2409</a></h4>
      </div>
      <div className="col-1 bg-light"></div>
      <div className="col-6 bg-dark text-light py-5">
        <ContactForm />
      </div>
    </div>
  </Layout>
);

export default Contact;