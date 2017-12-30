import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import ReactFancybox from 'react-fancybox';
// @import "~react-fancybox/dist/react-fancybox.css";
import 'jquery';
import ('react-bootstrap/dist/react-bootstrap.min.js');
// import profileLogo from './styles/img/profile.jpg';
// import ReactFancybox from 'react-fancybox';


let Navbar = require("react-bootstrap/lib/Navbar");
let NavItem = require("react-bootstrap/lib/NavItem");
let Nav = require ("react-bootstrap/lib/Nav");
let Breadcrumb = require ("react-bootstrap/lib/Breadcrumb");
let Tab = require ("react-bootstrap/lib/Tab");
let DropdownButton = require ("react-bootstrap/lib/DropdownButton");
let MenuItem = require ("react-bootstrap/lib/MenuItem");
let Col = require ("react-bootstrap/lib/Col");
let Row = require ("react-bootstrap/lib/Row");



export default class NavBar extends Component {
  constructor(props) {
     super(props);

     this.toggle = this.toggle.bind(this);
     this.state = {
       dropdownOpen: false
     };
   }

   toggle() {
     this.setState({
       dropdownOpen: !this.state.dropdownOpen
     });
   }
fancybox(){
   this.fancybox({'width':900,
                         'height':300,
                         'autoSize' : false});}
  render() {
    return (

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">


        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">kelvin</span>
          <span class="d-none d-lg-block">

          <a href="https://thumbs2.imgbox.com/03/57/XhYnzDsP_t.jpg" data-fancybox data-caption="KELVIN ONI IBULU"  class="img-fluid img-profile rounded-circle fancybox" style={{"width": "100" , "height" : "340"}}>
          	<img src="https://thumbs2.imgbox.com/03/57/XhYnzDsP_t.jpg" class="img-fluid img-profile rounded-circle mx-auto mb-2" alt="kelvinibulu" />
          </a>
          
          </span>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
                   <Link to="/" class="nav-link js-scroll-trigger">About </Link>

            </li>
            <li class="nav-item">
   <Link to="/pages/experience" class="nav-link js-scroll-trigger">Experience</Link>

            </li>
            <li class="nav-item">
              <Link to="/pages/education" class="nav-link js-scroll-trigger">Education</Link>
            </li>
            <li class="nav-item">
              <Link to="/pages/skill" class="nav-link js-scroll-trigger" >Skills </Link>
            </li>
            <li class="nav-item">
              <Link to="/pages/award" class="nav-link js-scroll-trigger"  >Awards</Link>
            </li>
            <li class="nav-item">
              <Link to="/pages/interest" class="nav-link js-scroll-trigger">Interests</Link>
            </li>

          </ul>
        </div>
      </nav>

    );
  }
}
