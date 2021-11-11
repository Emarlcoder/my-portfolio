import Layout from "../components/Layout";
import { FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'

const Contact = () => {
  const regexName = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/
  const regexPhone = /^[+0-9]/

  const contactSchema = Yup.object().shape({
    firstName: Yup.string()
    .matches(regexName, 'Nombre inválido')
    .required('Requerido'),
    lastName: Yup.string()
    .matches(regexName, 'Apellido inválido')
    .required('Requerido'),
    email: Yup.string()
    .email('Correo invalido')
    .required('Requerido'),
    phoneNumber: Yup.string()
    .matches(regexPhone, 'Número inválido'),
    subject: Yup.string()
    .min(5, 'Mínimo 5 caracteres.')
    .max(100, 'Máximo 100 caracteres.')
    .required('Requerido'),
    message: Yup.string()
    .min(20, 'Mínimo 20 caracteres.')
    .max(350, 'Máximo 350 caracteres.')
    .required('Requerido'),
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: async (values , { setSubmitting, resetForm }) => {
      try {
        await emailjs.send('service_r66dc5p','template_53wyaxh',values,'user_SRT2TwH7scoeFetUCyUp8')
        resetForm()
        setSubmitting(false)
      } catch (error) {
        console.log(error)
        setSubmitting(false)
      }
      console.log(values)
    }
  })

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik

  return (
    <Layout footer={false}>
      <FormikProvider value={formik}>
        <div className="container bg-dark rounded p-5">
          <h1 className="text-light mb-3">Contact Me!</h1>
          <form className="row g-3" name="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="col-md-6">
              <label className="form-label">
                <h5 className="fw-bold text-light">First Name</h5>
              </label>
              <input
                type="text"
                className="form-control border border-primary bg-light"
                id="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={values.firstName}
                disabled={isSubmitting}
              />
              <span>{errors.firstName}</span>
            </div>
            <div className="col-md-6">
              <label className="form-label">
                <h5 className="fw-bold text-light">Last Name</h5>
              </label>
              <input
                type="text"
                className="form-control border border-primary bg-light"
                id="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={values.lastName}
                disabled={isSubmitting}
              />
              <span>{errors.lastName}</span>
            </div>
            <div className="col-md-8">
              <label className="form-label">
                <h5 className="fw-bold text-light">E-mail</h5>
              </label>
              <input
                type="email"
                className="form-control border border-primary bg-light"
                id="email"
                placeholder="E-mail"
                onChange={formik.handleChange}
                value={values.email}
                disabled={isSubmitting}
              />
              <span>{errors.email}</span>
            </div>
            <div className="col-md-4">
              <label className="form-label">
                <h5 className="fw-bold text-light">Phone Number</h5>
              </label>
              <input
                type="text"
                className="form-control border border-primary bg-light"
                id="phoneNumber"
                placeholder="+54 (11) 1111-1111"
                onChange={formik.handleChange}
                value={values.phoneNumber}
                disabled={isSubmitting}
              />
              <span>{errors.phoneNumber}</span>
            </div>
            <div className="col-md-12">
              <label className="form-label">
                <h5 className="fw-bold text-light">Subject</h5>
              </label>
              <input
                type="text"
                className="form-control border border-primary bg-light"
                id="subject"
                placeholder="Subject"
                onChange={formik.handleChange}
                value={values.subject}
                disabled={isSubmitting}
              />
              <span>{errors.subject}</span>
            </div>
            <div className="col-md-12">
              <label className="form-label">
                <h5 className="fw-bold text-light">
                  Type your message here{" "}
                  <i className="custom-icon cil-chevron-double-down fs-5"></i>
                </h5>
              </label>
              <textarea
                className="form-control textarea border border-primary bg-light"
                id="message"
                rows="3"
                placeholder="Type your message here..."
                onChange={formik.handleChange}
                value={values.message}
                disabled={isSubmitting}
              ></textarea>
              <span>{errors.message}</span>
            </div>
            <div className="col-md-12 d-grid w-50 position-relative top-100 start-50 translate-middle mt-4">
              <input
                type="submit"
                value="Send"
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
              />
            </div>
          </form>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center flex-column">
              <h1 className="text-light mb-3 text-center">Find me here!<i className="custom-icon cil-chevron-double-down"></i></h1>
              <div className="d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/emanuel-romero-lópez/" className="text-light text-decoration-none me-5" target="_blank"><i className="cib-linkedin fs-1"></i></a>
                <a href="https://www.github.com/emarlcoder" className="text-light text-decoration-none" target="_blank"><i className="cib-github fs-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </FormikProvider>
    </Layout>
  );
}


export default Contact;