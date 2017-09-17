import React, { Component } from 'react';
import { Well, Grid, PageHeader, Row, Col} from 'react-bootstrap';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Paper from 'material-ui/Paper';
import { Tracker } from 'meteor/tracker';

export default class Kitchen extends Component{
  constructor(props){
    super(props);
    this.state = {
      kitchenData: props.kitchenData,
      loaded: props.loaded
    }
  }
  componentWillMount(){
    const nondescript = Tracker.autorun(() => {
      Meteor.call('getKitchenData', (this.props.match.params._id),(err, res) => {
        if(err){
          console.log(err);
        } else {
          console.log(res);
          result = res.data[0].tableList;
          ready = true;
          this.setState({
            name: res.data[0].name,
            kitchenData: result,
            loaded: ready
          })
          console.log(result);
        }
      })
    });
  }
  renderOrderList(a){
    return a.map((order) => {
      return (
        <small><li>{order}</li></small>
      )
    })
  }
  renderColor(reserved){
    if(reserved){
      return { backgroundColor: '#990000', color:'#dddddd', padding:10, opacity: 0.85, boxShadow: '5px 5px 3px grey'}
    } else {
      return { backgroundColor: '#003300', color:'#dddddd', padding:10, opacity: 0.85, boxShadow: '5px 5px 3px grey'}
    }
  }
  renderGrid(){
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      },
      gridList: {
        width: 500,
        height: 900,
        overflowY: 'auto',
        fontColor: 'white'
      },
      header: {
        height: 60,
        opacity: 0.9,
        backgroundColor:'#f4f4f4',
        width: '100%',
        padding: 10,
        textAlign: 'center',
        fontFamily:'helvetica'
      }
    };
    if(this.state.loaded === true) {
      return (
          <div>
            <Paper zDepth={2} style={styles.header}>
              <h3><b>{this.state.name}&apos;s Kitchen</b></h3>
            </Paper>
            <br />
              <GridList cellHeight={160} cols= {2} padding={10} style={styles.root}>
                {this.state.kitchenData.map((tile) => {
                  const shortid = require('shortid');
                  let tmp = shortid.generate();
                  return (
                  <GridTile
                    key={tmp}
                    title={tile.tableId + 1}
                    style={this.renderColor(tile.reserved)}
                    actionIcon={tile.reserved ? <IconButton iconClassName="muidocs-icon-custom-github"/> : <IconButton iconClassName="muidocs-icon-custom-github"/>}
                  >
                  <ol>
                  {this.renderOrderList(tile.order)}
                  </ol>
                  </GridTile>
                )}
              )}
              </GridList>
          </div>
      )
    } else {
      return <p>Loading</p>
    }
  }
  render(){
    console.log(this.state)
    return(
      <div >
        {this.renderGrid()}
      </div>
    )
  }
  componentDidMount(){
    if(this.state.loaded === false){
      this.forceUpdate();
    }
  }
}
