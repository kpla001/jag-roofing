import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import logo from '../public/Images/logo.jpg'
import houses from '../public/Images/houses.svg'
import metalRoof1 from '../public/Images/metalRoof1.JPG'
import buildYourHome from '../public/Images/buildYourHome.svg'
import shingleRoof1 from '../public/Images/shingleRoof1.JPG'
import buildings from '../public/Images/buildings.svg'
import tileRoof1 from '../public/Images/tileRoof1.JPG'

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
        <div className={styles.split}>
          <div className={styles.imageContainer}>
            <Image src={logo} layout="responsive" alt="jag roofing logo" />
          </div>
          <header className={styles.header}>
            <p>
              A local father-son business with over 20 years of experience serving residential and
              commercial clients in our community.
            </p>
          </header>
        </div>
        <video autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
          <source src="/Videos/intro.MOV" type="video/mp4" />
        </video>
        <section className={styles.section}>
          <ul className={styles.benefitsList}>
            <li>
              <i className="fas fa-check"></i>
              &emsp;&emsp;&emsp;&emsp;Family owned
            </li>
            <li>
              <i className="fas fa-check"></i>
              &emsp;&emsp;&emsp;&emsp;Certified, licensed, and insured
            </li>
            <li>
              <i className="fas fa-check"></i>
              &emsp;&emsp;&emsp;&emsp;Free estimates provided
            </li>
            <li>
              <i className="fas fa-check"></i>
              &emsp;&emsp;&emsp;&emsp;Hurricane ready
            </li>
            <li>
              <i className="fas fa-check"></i>
              &emsp;&emsp;&emsp;&emsp;Hundreds of roofs repaired
            </li>
            <li>
              <i className="fas fa-check"></i>
              &emsp;&emsp;&emsp;&emsp;Honest & upfront pricing
            </li>
            <li>
              <i className="fas fa-check"></i>
              &emsp;&emsp;&emsp;&emsp;Better Business Bureau accredited
            </li>
            <li>
              <i className="fas fa-check"></i>
              &emsp;&emsp;&emsp;&emsp;Quality guaranteed
            </li>
          </ul>
        </section>
        <div className={styles.graphic}>
          <Image src={buildings} layout="responsive" alt="graphic image of three houses" />
        </div>
        <section className={styles.serviceSection}>
          <h1>
            <i className="fas fa-shield fa-lg"></i>
            &nbsp; Metal Roofing
          </h1>
          <Image
            src={metalRoof1}
            layout="responsive"
            alt="aerial view picture of home with metal roofing"
          />
          <p>
            Whether you are putting a roof on a new home, or your existing roof requires a total
            makeover, metal roofs can be an attractive option because of their durability, minimal
            maintenance, and energy efficiency.
          </p>
        </section>
        <div className={styles.graphic}>
          <Image
            src={buildYourHome}
            layout="responsive"
            alt="illustration of two persons looking at image of future home"
          />
        </div>
        <section className={styles.serviceSection}>
          <h1>
            <i className="fas fa-home fa-lg"></i>
            &nbsp; Shingle Roofing
          </h1>
          <Image
            src={shingleRoof1}
            layout="responsive"
            alt="aerial view picture of home with shingled roofing"
          />
          <p>
            Asphalt shingles are an excellent affordable option for property owners on a budget.
            They can fit any style, and are easy to install or replace.
          </p>
        </section>
        <div className={styles.graphic}>
          <Image src={houses} layout="responsive" alt="illustration of building skyline" />
        </div>
        <section className={styles.serviceSection}>
          <h1>
            <i className="fas fa-leaf fa-lg"></i>
            &nbsp; Tile Roofing
          </h1>
          <Image
            src={tileRoof1}
            layout="responsive"
            alt="aerial view picture of home with tiled roofing"
          />
          <p>
            Tile roofs are a great choice for homes that experience hot weather or exposure to salt
            air and are ideal for climates where infrequent rains dump large amounts of water in a
            short time, which is why they are such a popular option in South Florida.
          </p>
        </section>
      </main>
    </div>
  )
}
