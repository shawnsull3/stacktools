// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'sullivansm3@gmail.com',
  from: 'sullivansm3@gmail.com',
  subject: 'check check 1 2 1 2',
  text: 'check',
  html: '<strong>check</strong>',
};
sgMail.send(msg)
  .then( data => console.log(data))
  .catch( error => console.log(error, error.response.body));
