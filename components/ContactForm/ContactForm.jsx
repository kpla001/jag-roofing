import Head from 'next/head'
import { useState } from 'react'
import styles from './ContactForm.module.css'

import fetch from 'node-fetch'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <form className={styles.main}>
          <formGroup className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={e => {
                setName(e.target.value)
              }}
              name="name"
              className={styles.inputField}
            />
          </formGroup>
          <formGroup className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={e => {
                setEmail(e.target.value)
              }}
              name="email"
              className={styles.inputField}
            />
          </formGroup>
          <formGroup className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              onChange={e => {
                setMessage(e.target.value)
              }}
              name="message"
              className={styles.inputField}
            />
          </formGroup>
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}
