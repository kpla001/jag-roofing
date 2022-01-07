import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSplit}>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <i className="fas fa-phone "></i>
          &nbsp;
          <p>(305)484-1080</p>
          <br />
          <i className="fas fa-envelope"></i>
          &nbsp;
          <p>garciajoe@jagroofing.com</p>
        </div>
        <div className={styles.hours}>
          <h1>Business Hours</h1>
          <div className={styles.schedule}>
            <p>
              <span className={styles.column1}>Mon - Fri:</span>
              <span> 8:00am - 5:30pm </span>
            </p>
            <p>
              <span className={styles.column1}>Sat & Sun:</span>
              <span>Closed</span>
            </p>
          </div>
        </div>
        <div className={styles.license}>
          <h1>License #</h1>
          <p>CCC1333509</p>
        </div>
      </div>
    </div>
  )
}
