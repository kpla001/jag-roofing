import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

import logo from '../../public/Images/logo.jpg'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLinksContainer}>
        <Link href="/">
          <a>
            <Image src={logo} layout="fixed" alt="jag roofing logo" width="54" height="50" />
          </a>
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
