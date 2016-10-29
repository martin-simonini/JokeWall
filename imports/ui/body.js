import { Template } from 'meteor/templating';
import '../../lib/routes.js';
import './body.html';

Template.body.helpers({
    jokes: [
      { text:"This is the best joke ever"},
      { text: "this is also a good joke"}
    ],
});
