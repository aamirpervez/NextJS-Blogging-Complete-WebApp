import ContactForm from "../components/contact/contact-form";
import Head from 'next/head';

function ContactPage() {

    return (
    <>
        <Head>
            <title>Contact Us</title>
            <meta name="description" content="contact page, send your messages." />
        </Head>

        <ContactForm />
    </>
    )
}

export default ContactPage;