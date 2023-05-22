/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import express from 'express';
import nodemailer from 'nodemailer';
import { getUsers } from '../TableActions/UserActions.js';
export const requestFailure = (data) => ({ success: false, data });

const mailRouter = express.Router();
mailRouter.use(express.json());

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',
  port: '465',
  secure: true,
  auth: {
    user: 'studnet831@gmail.com',
    pass: 'ysvvvmpopzjrizfq'
  }
});

mailRouter.post('/email', async (req, res) => {
    const userResponse = await getUsers({ email: req.body.email});
    if (!userResponse.success && userResponse.message === 'user not found') return requestFailure({ message: 'Invalid email.' });
   console.log(userResponse.data[0].password);
    const mailOptions = {
        from: 'studnet831@gmail.com',
        to: req.body.email,
        subject: 'Recover password',
        text: `Hello, this is your password: ${userResponse.data[0].password}`
      };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
    
  });

  export default mailRouter;