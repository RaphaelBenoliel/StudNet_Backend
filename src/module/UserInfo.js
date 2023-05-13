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
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

  },
  {
    collection: 'UserInfo',
  },
);

mongoose.model('UserInfo', UserInfo);
