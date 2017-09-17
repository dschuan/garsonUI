import React, { Component } from 'react';

export default class RestMenuItem extends Component{
  constructor(props){
    super(props);
    this.state({
      name: '',
      type: '',
      desc: ''
    })
  }
  render(){
    return(
      <p>MenuItem</p>
    )
  }
}
