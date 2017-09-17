import React, { Component } from 'react';
import { Button, Modal, PageHeader, Grid, Row, Col, Well, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MenuItem from 'material-ui/MenuItem';
import RestMenuItem from '../RestMenuItem';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';



export default class MenuForm extends Component{
  constructor(props){
    super(props);
      this.state = {
        showModal: false,
        redirect: false,
        name: '',
        address: '',
        numberOfTables:'',
        numberOfItems: 1,
        menuList:{
          def: {
            name: '',
            price: '',
            desc: ''
          }
        }
      }
  }
  handleChangeName(e){
    console.log(this.state);
    this.setState({name: e.target.value})
  }
  handleChangeAdd(e){
    console.log(this.state);
    this.setState({address: e.target.value})
  }
  handleChangeTab(e){
    console.log(this.state);
    this.setState({numberOfTables: e.target.value})
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }
  renderMenuList(){
    const dishType = ["Appetizer","Entree","Drink","Dessert"]
    let tmp = [];
    let shortid = require('shortid');
    for (let x = 0; x < this.state.numberOfItems; x++){
      tmp.push(x);
    }
    return tmp.map(()=>{
      let y= shortid.generate();
      return (
        <Well key = {y}>
          <Row style={{padding: 10 }}>
            <FormGroup controlId="formValidationNull" validationState={null}>
              <AutoComplete
                floatingLabelText="Dish Type"
                filter={AutoComplete.caseInsensitiveFilter}
                dataSource={dishType}
              />
            </FormGroup>
            <FormGroup controlId="formValidationNull" validationState={null}>
              <TextField
                  fullWidth={true}
                  id="text-field-def"
                  floatingLabelText="Enter dish price"/>
            </FormGroup>
            <FormGroup controlId="formValidationNull" validationState={null}>
              <TextField
                  multiLine={true}
                  fullWidth={true}
                  id="text-field-def2"
                  floatingLabelText="Enter description"/>
            </FormGroup>
          </Row>

        </Well>
      )
    })

  }
  addItem(){
    console.log(this.state);
    let tmp2 = this.state.numberOfItems + 1
    this.setState({numberOfItems: tmp2});
  }
  render(){
    return(
    <Grid>
      <Row>
        <PageHeader>Upload your Menu! </PageHeader>
      </Row>
      <Row>
        <FormGroup controlId="formValidationNull" validationState={null}>
          <TextField
              type="text"
              value={this.state.name}
              floatingLabelText="Enter business name"
              onChange={this.handleChangeName.bind(this)}/>
        </FormGroup>
        <br/>
      </Row>
      <Row>
        <FormGroup controlId="formValidationNull" validationState={null}>
          <TextField type="text"
            value={this.state.address}
            floatingLabelText="Enter Business Address"
            onChange={this.handleChangeAdd.bind(this)}/>
        </FormGroup>
        <br/>
      </Row>
      <Row>
        <FormGroup controlId="formValidationNull" validationState={null}>
          <TextField type="text"
            value={this.state.numberOfTables}
            floatingLabelText="Enter number of tables available"
            onChange={this.handleChangeTab.bind(this)}/>
        </FormGroup>
      </Row>
      <br/>
      <Row><PageHeader><small><h2>Menu Items</h2></small></PageHeader><hr />
</Row>
      {this.renderMenuList()}
      <Row>
        <Col xs={4}/>
        <Col xs={3}>
          <FloatingActionButton onClick={this.addItem.bind(this)}><ContentAdd /></FloatingActionButton>
        </Col>
        <Col xs={3}/>

      </Row>
      <hr/>
      <Row><Col xs={3}/><Col xs={4}><RaisedButton label="Submit" onClick={this.showModal.bind(this)}fullWidth={true} /></Col><Col xs={3}/></Row>
      <Modal
         bsSize='small'
         show={this.state.show}
         onHide={this.hideModal}
       >

         <Modal.Body>
           <h4>Form Submitted</h4>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.hideModal.bind(this)}>Close</Button>
         </Modal.Footer>
       </Modal>
    </Grid>
    )

  }
}
