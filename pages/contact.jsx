import Head from 'next/head'
import styles from '../styles/Contact.module.css'

import ContactForm from '../components/ContactForm/ContactForm'

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <Head>
        <title>Home - JAG Roofing Solutions - Contact us</title>
        <meta
          name="JAG Roofing - Contact Us"
          content="JAG Roofing Solutions - South Florida roofing, repairs, and waterproofing"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <ContactForm />
    </div>
  )
}
