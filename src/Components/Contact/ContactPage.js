import React from 'react'
import ContactForm from '../Contact/ContactForm.jsx'
import Titles from '../Titles/Titles'
import LeafletMap from './LeafletMap.jsx'

const ContactPage = () => {
    return (
        <div>
            <Titles titulo='Contacto' />
            <ContactForm />
            <LeafletMap />
        </div>
    )
}

export default ContactPage
