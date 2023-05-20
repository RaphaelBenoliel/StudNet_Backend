/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';

const UserInfo = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      index: { unique: false, dropDups: true },
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default: 'https://www.linkpicture.com/q/user_5.png',
    },

  },
  {
    collection: 'UserInfo',
    timestamps: true,
  },
);

mongoose.model('UserInfo', UserInfo);
