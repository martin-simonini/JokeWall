import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

Users.schema = new SimpleSchema({
  firstName:{
    type: String;
    max: 50;
  },
  lastName:{
    type: String;
    max: 50;
  },
  bio: {
    type: String;
    max: 1000;
    optional: true;
  },
  age:{
    type: Number;
  },
  userId:{
    type: String;
  }
});

Users.attachSchema(Users.schema);
