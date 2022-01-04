import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <i className="fas fa-phone "></i>
        &nbsp;
        <p>(305)484-1080</p>
        <br />
        <i className="fas fa-at"></i>
        &nbsp;
        <p>info@jagroofing.com</p>
      </div>
      <div className={styles.hours}>
        <h1>Business Hours</h1>
        <div className={styles.schedule}>
          <p>
            <span>Monday - Friday:</span>
            <br />
            <span> 8:00am - 5:30pm </span>
          </p>
          <p>
            <span>Saturday & Sunday:</span>
            <br />
            <span>closed</span>
          </p>
        </div>
      </div>
    </div>
  )
}
