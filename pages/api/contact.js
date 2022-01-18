export default function mail(req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'bot.jagroofing@gmail.com',
      pass: `${process.env.PASSWORD}`,
    },
    secure: true,
  })

  const mailData = {
    from: 'bot.jagroofing@gmail.com',
    to: 'bot.jagroofing@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<h3>Contact Info</h3>
    <p>Email: ${req.body.email}</p>
    <p>Name: ${req.body.name}</p>
    <p>Phone: ${req.body.phone}</p>
    <br/>
    <h3>Inquiry</h3>
    <div>${req.body.message}</div>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200).end()
}
