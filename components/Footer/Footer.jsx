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
        <p>garciajoe@jagroofing.com</p>
      </div>
      <div className={styles.hours}>
        <h1>Business Hours</h1>
        <div className={styles.schedule}>
          <p>
            <span className={styles.column1}>Monday - Friday:</span>
            <span> 8:00am - 5:30pm </span>
          </p>
          <p>
            <span className={styles.column1}>Saturday & Sunday:</span>
            <span>Closed</span>
          </p>
        </div>
        <div className={styles.license}>
          <h1>License #</h1>
          <p>CCC1333509</p>
        </div>
      </div>
    </div>
  )
}
