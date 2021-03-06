import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout contact>
      <form name="contact" method="post" data-netlify="true" action="/success">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="subject" value="[Zb] Contact reply" />
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p><label>File :<input type="file" name="file" /></label></p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}

export default Contact;