import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - JAG Roofing Solutions</title>
        <meta name="JAG Roofing" content="JAG Roofing Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      </main>
    </div>
  )
}
