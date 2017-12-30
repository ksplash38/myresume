import React, { Component } from 'react';

export default class Education extends Component {


  render() {
    return (

      <section class=" p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
            <section className='violet' ref={(section) => { this.Education = section; }}></section>
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Stamford International University</h3>
              <div class="subheading mb-3">Bachelor of Science & Technology</div>
              <div>Information Technology</div>
              <p>GPA: 3.42</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">October 2014 - Present</span>
            </div>
          </div>



        </div>
      </section>




)}
}
