import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLinksContainer}>
        <Link href="/">
          <a>Logo</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/services">
          <a>Services</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </nav>
  )
}
