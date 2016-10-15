import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Jokes = new Mongo.Collection('jokes');
