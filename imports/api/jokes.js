import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Jokes = new Mongo.Collection('jokes');

Jokes.schema = new SimpleSchema({
  leadUp:{
    type: String;
    max: 500;
  },
  punchLine:{
    type: String;
    max: 500;
  },
  tag:{
    type: String;
    max: 100;
  },
  user: {
    type: String;
    max: 1000;
  }
});

Jokes.attachSchema(Jokes.schema);
