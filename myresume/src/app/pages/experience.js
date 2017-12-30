import React, { Component } from 'react';

export default class Experience extends Component {


  render() {
    return (

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <section className='violet' ref={(section) => { this.Experience = section; }}></section>
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Software Engineering & IT Service / Helpdesk</h3>
              <div class="subheading mb-3">Network Solutions And Hardware Fixing</div>
              <p>I have an experience of Networking, which I did in Stamford International University as an Intern. <br />
              <ul><h5>TASKS: </h5>
              <li>Troubleshoot for network or Software problems </li>
              <li>Rectify Problem and fix or excalate to appropriate attendant </li>
              <li>Attend to Tickets </li>
              <li>Installation of Operating System </li>
              <li>Anser and Respond to calls, offering help and service </li>
              <li>Maintain Network </li></ul> </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">JUNE 2016 - AUGUST 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Software Testing</h3>
              <div class="subheading mb-3">Testing Spyware Softwares</div>
              <p>  <ul><h5>TASKS: </h5>
                <li>Using release notes and corrections made to carry out Tests on Development Software </li>
                <li>Install New Operating Systems </li>
                <li>Create Report </li>
          </ul> </p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">JULY 2016 - OCTOBER 2016</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">WEB DESIGNER</h3>
              <div class="subheading mb-3">Create web & mobile app</div>
              <p>I am the sole owner and creator of an existing web and mobile(android) application called Grapevine. Created as a single platform using Ruby on Rails for stamford Students to Interract better, get news and announcements faster and reliable.
              <br/> <a href="http://studentgrapevine.stamford.edu/" target="_blank" >Stamford Grapevine</a></p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">OCTOBER - PRESENT</span>
            </div>
          </div>



        </div>

      </section>





)}
}
