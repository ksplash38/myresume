import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




export default class Another extends Component {
  constructor(props){
    super(props)
    this.state={
      modalOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle(){
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }
  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-12 col-sm-4">
                <h1>Ca</h1>
                <div className="hidden-xs-down">
                <h4></h4>
                <h4></h4>
                <h4>Bags</h4>
                <h4>Accessories</h4>
                <h4>Garden</h4>
                </div>
                <select className="hidden-sm-up">
                    <option>Shoes</option>
                    <option>Clothes</option>
                    <option>Bags</option>
                    <option>Accessories</option>
                    <option>Garden</option>
                </select>
              </div>
              <div className="col-12 col-sm-8">
                  <div className="row">
                  <div className="col-12 col-sm-6 col-md-4">
                    <img className="img-fluid" src="https://s.aolcdn.com/hss/storage/midas/ad22a7e79f2842e462a9489a5c04af5/204732719/2016adidas3drunnerlede-edJT+2.jpg"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <img className="img-fluid" src="https://s.aolcdn.com/hss/storage/midas/ad22a7e79f2842e462a9489a5c04af5/204732719/2016adidas3drunnerlede-edJT+2.jpg"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <img className="img-fluid" src="https://s.aolcdn.com/hss/storage/midas/ad22a7e79f2842e462a9489a5c04af5/204732719/2016adidas3drunnerlede-edJT+2.jpg"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <img className="img-fluid" src="https://s.aolcdn.com/hss/storage/midas/ad22a7e79f2842e462a9489a5c04af5/204732719/2016adidas3drunnerlede-edJT+2.jpg"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <img className="img-fluid" src="https://s.aolcdn.com/hss/storage/midas/ad22a7e79f2842e462a9489a5c04af5/204732719/2016adidas3drunnerlede-edJT+2.jpg"/>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <img className="img-fluid" src="https://s.aolcdn.com/hss/storage/midas/ad22a7e79f2842e462a9489a5c04af5/204732719/2016adidas3drunnerlede-edJT+2.jpg"/>
                  </div>
                  </div>
              </div>
          </div>
          <Button color="danger" onClick={this.toggle}>Modal</Button>
          <Modal isOpen={this.state.modalOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
