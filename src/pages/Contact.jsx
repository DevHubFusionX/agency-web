import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

const Contact = () => {
  return (
    <>
      <div className="pt-16 md:pt-20">
        <ContactForm />
      </div>
      <ContactInfo />
    </>
  )
}

export default Contact