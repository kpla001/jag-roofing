import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import homeImage from '../public/Images/IMG_0954.JPG'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Home - JAG Roofing Solutions</title>
        <meta
          name="JAG Roofing"
          content="JAG Roofing Solutions - South Florida roofing & waterproofing"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.body}>
        <header className={styles.header}>
          <div className={styles.split}>
            <h1>Your reliable South Florida roofing & waterproofing solutions provider</h1>
            <p>
              A local father-son business with over 20 years of experience serving residential and
              commercial clients in our community.
            </p>
          </div>
        </header>
        <Image src={homeImage} layout="responsive" alt="rooftop view of a house" />
        <section className={styles.section}>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              &nbsp;Family owned
            </li>
            <li>
              <i className="fas fa-check"></i>
              &nbsp;Certified, licensed, and insured
            </li>
            <li>
              <i className="fas fa-check"></i>
              &nbsp;Free estimates provided
            </li>
            <li>
              <i className="fas fa-check"></i>
              &nbsp;Hurricane ready
            </li>
            <li>
              <i className="fas fa-check"></i>
              &nbsp;Hundreds of roofs repaired
            </li>
            <li>
              <i className="fas fa-check"></i>
              &nbsp;Honest & upfront pricing
            </li>
            <li>
              <i className="fas fa-check"></i>
              &nbsp;Quality guaranteed
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

// ✅ Family owned
// ✅ Certified, licensed, and insured
// ✅ Free estimates provided
// ✅ Hurricane ready
// ✅ Hundreds of roofs repaired
// ✅ Honest & upfront pricing
// ✅ Quality guaranteed
