import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Kitchen from '../pages/Kitchen';


export default KitchenContainer = withTracker((props) => {
  let ready = false;
  let result = [];
  Meteor.call('getKitchenData', (err, res) => {
    if(err){
      console.log(err);
    } else {
      console.log(res);
      result = res.data[0].tableList;
      ready = true;
      console.log(result);
    }
  })
  return {
      loaded: ready,
      KitchenData: ready ? [] : result
    }

})(Kitchen);
