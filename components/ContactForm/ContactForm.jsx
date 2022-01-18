import Head from 'next/head'
import { useState } from 'react'
import styles from './ContactForm.module.css'
import fetch from 'node-fetch'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // console.log('Sending')
    let data = {
      name,
      phone,
      email,
      message,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      //   console.log('Response received', res.status)
      if (res.status === 200) {
        // console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
      }
    })
  }
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <form className={styles.main}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder=" Full name"
              onChange={e => {
                setName(e.target.value)
              }}
              name="name"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              placeholder=" +1(111)111-1111"
              type="tel"
              size="20"
              maxLength="16"
              onChange={e => {
                setPhone(e.target.value)
              }}
              name="phone"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder=" email@domain.com"
              onChange={e => {
                setEmail(e.target.value)
              }}
              name="email"
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              rows="10"
              type="text"
              placeholder=" Tell us more about what you're looking for."
              onChange={e => {
                setMessage(e.target.value)
              }}
              name="message"
              className={styles.inputField}
            />
          </div>
          <input
            type="submit"
            onClick={e => {
              handleSubmit(e)
            }}
          />
        </form>
      </div>
    </div>
  )
}
