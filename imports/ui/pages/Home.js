import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main';
import MenuForm from './MenuForm';
import KitchenContainer from '../containers/KitchenContainer';

const Home = homeProps => (

  <Router>
    <MuiThemeProvider>
      <div className="App" style={{padding: 20, backgroundColor:'#efefef'}}>
          <Switch>
            <Route exact path="/:_id" component={Main} {...homeProps} />
            <Route exact path="/kitchen/:_id" component={KitchenContainer} {...homeProps} />
            <Route path="/garson/upload" component={MenuForm} {...homeProps} />
          </Switch>

      </div>
    </MuiThemeProvider>
  </Router>
);

export default Home;
