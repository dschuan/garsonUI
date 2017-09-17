import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.methods({
  'getKitchenData'(append){
    this.unblock();
    const url = 'https://f4f4cab1.ngrok.io/restaurants/findrestauranttablelist/' + append;
    try {
      const result = HTTP.call('GET', url);
      return result;
    } catch (e) {
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  }
})
