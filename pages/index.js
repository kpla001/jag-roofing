import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
      </Head>

      <main className={styles.body}>
        <header className={styles.header}></header>
      </main>
    </div>
  )
}
