import React, { Component } from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import { RaisedButton } from 'material-ui';
import { Link, Redirect} from 'react-router-dom';

export default class Main extends Component {

  render(){
    console.log(this.props.match.params._id);
    return(
      <Jumbotron style={{marginTop: '40%', paddingBottom: 200}}>
        <Grid>
          <Row>
            <Col xs={2}/>
            <Col xs={8}>
              <h3 className="justcenter">
                Choose what you want to do:
              </h3>
            </Col>
            <Col xs={2}/>
          </Row>
          <Row>
            <hr />
          </Row>
          <Row>
            <Col xs={2}/>
            <Col xs={4}><Link to="/garson/upload" ><RaisedButton label="Upload"/></Link></Col>
            <Col xs={4}><Link to={"/kitchen/" + this.props.match.params._id}><RaisedButton label="Kitchen"/></Link></Col>
            <Col xs={2}/>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}
