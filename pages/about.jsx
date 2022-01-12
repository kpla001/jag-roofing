import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>Home - JAG Roofing Solutions - About us</title>
        <meta
          name="JAG Roofing - About Us"
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
    </div>
  )
}
