import React from 'react'
import ContactForm from '../Contact/ContactForm.jsx'
import Titles from '../Titles/Titles'

const ContactPage = () => {
    return (
        <div>
            <Titles titulo='Contacto' />
           //Datos de contacto
           <ContactForm />
        </div>
    )
}

export default ContactPage
