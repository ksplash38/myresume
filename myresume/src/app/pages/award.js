import React, { Component } from 'react';
import ReactStars from 'react-stars'


let Table = require("react-bootstrap/lib/Table");
export default class Skill extends Component {


  render() {
    return (

      <section class=" p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <section className='violet' ref={(section) => { this.Award = section; }}></section>
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning" />
              Google Analytics Certified Developer - 2017</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning" />
                AdWords Fundamentals - Google Certification - 2017</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning" />
              AdWords Search - Google Certification - 2017</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning" />
            AdWords Display
            - Google Certification - 2017</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning" />
              Google Analytics Certified Developer - 2017</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning" />
                DigitalEndpoint Certificate of internship (Software Tester) - 2016</li>

              <li>
                <i class="fa-li fa fa-trophy text-warning" />
              Organising & Facilitating Tech Slam - 2017</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning" />
                Stamford Tech Slam - 2015</li>



          </ul>
        </div>
      </section>


)}
}
