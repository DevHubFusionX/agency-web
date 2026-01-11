import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

const Contact = () => {
  return (
    <>
      <div className="pt-24 md:pt-32">
        <ContactForm />
      </div>
      <ContactInfo />
    </>
  )
}

export default Contact