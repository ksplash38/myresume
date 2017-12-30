import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSquare , faSpinner } from '@fortawesome/fontawesome-free-solid'
import * as FontAwesome from 'react-icons/lib/fa'
import FadeIn from 'react-fade-in';

import scrollToComponent from 'react-scroll-to-component';
import nl2br from 'react-newline-to-break';

import ReactStars from 'react-stars';
import './../styles/devicons/css/devicons.min.css';
import './../styles/font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
let Table = require("react-bootstrap/lib/Table");







export default class indexpage extends Component {
  constructor(props){
    super(props)
    this.state={
      modalOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }1

  toggle(){
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  componentDidMount() {
    scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }

  render() {
    return (


          <div class="row">

              <div class="col-lg-10">
  <section className='violet' ref={(section) => { this.top = section; }}></section>
  <section className='violet' ref={(section) => { this.About = section; }}></section>
                <div class=" p-0">

              <section class=" p-3 p-lg-1 d-flex d-column" id="about">

                   <FadeIn>
                <div class="my-auto">

 <FontAwesomeIcon icon={faSpinner} />
  <div class="animated infinite bounce" style={{ "animation-delay":"1s"}} >Front-End Developer</div>

<style>{"\
             .rr{\
               color:red; \
             }\
           "}</style>



                  <h1 class="mb-0" >KELVIN
                    <span class="text-primary"> IBULU</span>

                  </h1>



                  <div class="subheading mb-5">52/2 Ramkamheng Street <br /> Bangkapi, Hua Mak· Bangkok Thailand<br /> <a href="tel:+66992515517" >(+66) 099-25155-17 </a><br />
                    <a href="mailto:kelvin.oniibulu@students.stamford.edu">kelvin.oniibulu@students.stamford.edu</a>
                  </div>
                  <p class="mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                  <ul class="list-inline list-social-icons mb-0">
                    <li class="list-inline-item">
                      <a href="https://facebook.com/kelvin.ibulu" >
                        <span class=" fa-3x circle" >
                               <FadeIn  >
                       <FontAwesome.FaFacebookOfficial class="rounded-circle hvr-float"    />

</FadeIn>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="https://github.com/ksplash38">
                        <span class="fa-3x circle">
                         <FadeIn  >
                         <div class="animated rollIn" style={{"animation-timing-function":"ease-in" , "animation-delay":"0.5s"}}>
                  <FontAwesome.FaGithub class="rounded-circle hvr-float"  />
   </div>
                     </FadeIn>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-3x circle">


                        </span>
                      </a>
                    </li>



                  </ul>
                </div>
                </FadeIn>
              </section>


              <section class="resume-section p-3 p-lg-1 d-flex flex-column" id="experience">
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



              <section class=" p-3 p-lg-1 d-flex flex-column" id="education">
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
<hr/>

              <section class="resume-section p-3 p-lg-1 d-flex flex-column" id="skills">
                <div class="my-auto">
                  <section className='violet' ref={(section) => { this.Skill = section; }}></section>
                  <h2 class="mb-5">Skills</h2>

                  <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                  <ul class="list-inline list-icons">
                    <li class="list-inline-item">


   <i class="devicons devicons-html5"></i>
                    </li>
                    <li class="list-inline-item">

                         <i class="devicons devicons-css3"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="devicons devicons-javascript"></i>

                    </li>
                    <li class="list-inline-item">
                      <i class="devicons devicons-jquery"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="devicons devicons-sass"></i>
                    </li>

                    <li class="list-inline-item">
                      <i class="devicons devicons-bootstrap"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="devicons devicons-wordpress"></i>
                    </li>

                    <li class="list-inline-item">
                      <i class="devicons devicons-npm"></i>
                    </li>
                  </ul>

                  <div class="subheading mb-3">Workflow</div>
                  <div class="row">
                  <div class="col-lg-5 col-md-6">
                  <Table>
                        <thead>
                          <tr>

                            <th>WEB DEVELOPMENT</th>


                          </tr>
                        </thead>
                        <tbody>
                          <tr class="hvr-grow hvr-bounce-to-right">

                            <td><h4>HTML & CSS</h4></td>
                            <td >  <ReactStars count={6}
                              value={6}
                              size={24}
                              edit={false}
                              color2={'#ffd700'}  /></td>

                          </tr>


                          <tr class="hvr-grow hvr-bounce-to-right">

                            <td><h4>RUBY ON RAILS</h4></td>
                            <td><ReactStars count={6}
                              value={5}
                              size={24}
                              edit={false}
                              color2={'#ffd700'} /></td>

                          </tr>


                          <tr class="hvr-grow hvr-bounce-to-right">

                            <td><h4>REACT</h4></td>
                            <td><ReactStars count={6}
                              value={4}
                              size={24}
                              edit={false}
                              color2={'#ffd700'} /></td>

                          </tr>

                          <tr class="hvr-grow hvr-bounce-to-right">

                            <td ><h4>PHP</h4></td>
                            <td ><ReactStars count={6}
                              value={1}
                              size={24}
                              edit={false}
                              color2={'#ffd700'} /></td>

                          </tr>


                        </tbody>
                      </Table>
</div>
<div class="col-lg-5 col-md-6">
<Table>
      <thead>
        <tr>

          <th>PROGRAMMING</th>


        </tr>
      </thead>
      <tbody>


        <tr class="hvr-grow hvr-underline-from-left">

          <td><h4>JAVASCRIPT</h4></td>
          <td >  <ReactStars count={6}
            value={4}
            size={24}
            edit={false}
            color2={'#ffd700'}  /></td>

        </tr>

        <tr class="hvr-grow hvr-underline-from-left">

          <td><h4>JAVA</h4></td>
          <td >  <ReactStars count={6}
            value={3}
            size={24}
            edit={false}
            color2={'#ffd700'}  /></td>

        </tr>


        <tr class="hvr-grow hvr-underline-from-left">

          <td><h4>C#</h4></td>
          <td><ReactStars count={6}
            value={3}
            size={24}
            edit={false}
            color2={'#ffd700'} /></td>

        </tr>


        <tr class="hvr-grow hvr-underline-from-left">

          <td><h4>PYTHON</h4></td>
          <td><ReactStars count={6}
            value={1}
            size={24}
            edit={false}
            color2={'#ffd700'} /></td>

        </tr>




      </tbody>
    </Table>
</div>


</div>


<div class="row">
<div class="col-lg-5">
<Table>
      <thead>
        <tr>

          <th>FRAMEWORKS, LIBRARIES, CMS</th>


        </tr>
      </thead>
      <tbody>




      <tr class="hvr-grow hvr-bounce-to-right">

        <td ><h4>HOVER</h4></td>
        <td ><ReactStars count={6}
          value={6}
          size={24}
          edit={false}
          color2={'#ffd700'} /></td>

      </tr>

      <tr class="hvr-grow hvr-bounce-to-right">

        <td ><h4>FANCYBOX</h4></td>
        <td ><ReactStars count={6}
          value={5}
          size={24}
          edit={false}
          color2={'#ffd700'} /></td>

      </tr>
        <tr class="hvr-grow hvr-bounce-to-right">

          <td><h4>BOOTSTRAP</h4></td>
          <td >  <ReactStars count={6}
            value={5}
            size={24}
            edit={false}
            color2={'#ffd700'}  /></td>

        </tr>


        <tr class="hvr-grow hvr-bounce-to-right">

          <td><h4>JQUERY</h4></td>
          <td><ReactStars count={6}
            value={4}
            size={24}
            edit={false}
            color2={'#ffd700'} /></td>

        </tr>
        <tr class="hvr-grow hvr-bounce-to-right">

          <td><h4>JOOMLA
      </h4></td>
          <td><ReactStars count={6}
            value={3}
            size={24}
            edit={false}
            color2={'#ffd700'} /></td>

        </tr>

        <tr class="hvr-grow hvr-bounce-to-right">

          <td><h4>WORDPRESS
</h4></td>
          <td><ReactStars count={6}
            value={2}
            size={24}
            edit={false}
            color2={'#ffd700'} /></td>

        </tr>




      </tbody>
    </Table>
</div>
<div class="col-lg-7">
<Table>
<thead>
<tr>

<th>SOFTWARE</th>


</tr>
</thead>
<tbody>

<tr class="hvr-grow hvr-underline-from-left">

<td><h4>MICROSOFT OFFICE</h4></td>
<td><ReactStars count={6}
value={6}
size={24}
edit={false}
color2={'#ffd700'} /></td>

</tr>

<tr class="hvr-grow hvr-underline-from-left">

<td><h4>IMOVIE</h4></td>
<td><ReactStars count={6}
value={5}
size={24}
edit={false}
color2={'#ffd700'} /></td>

</tr>

<tr class="hvr-grow hvr-underline-from-left">

<td><h4>ADOBE DREAMWEAVER</h4></td>
<td><ReactStars count={6}
value={5}
size={24}
edit={false}
color2={'#ffd700'} /></td>

</tr>
<tr class="hvr-grow hvr-underline-from-left">

<td><h4>ADOBE PHOTOSHOP</h4></td>
<td >  <ReactStars count={6}
value={4}
size={24}
edit={false}
color2={'#ffd700'}  /></td>

</tr>










</tbody>
</Table>
</div>


</div>




                </div>
              </section>



              <section class=" p-3 p-lg-1 d-flex flex-column" id="awards">
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
              <hr />
              <section class=" p-3 p-lg-1 d-flex flex-column" id="interests">
                <div class="my-auto">
                  <section className='violet' ref={(section) => { this.Interests = section; }}></section>
                  <h2 class="mb-5">Interests</h2>
                  <p>Apart from being a web developer, I enjoy most of my time playing Musical Instruments and Singing. I like to explore new things and learn new things. I enjoy mountain biking</p>
                  <p class="mb-0">When forced indoors, I learn something new about programing or research for things about programing languages I didnt know. I also follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring Musician, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
                </div>
              </section>



      </div>      </div>


      <div class="col-md-3 col-lg-1 hidden-sm hidden-xs" style={{position:'fixed' , right:'0' }}>
            <div class="panel panel-default panel-affix" id="myScrollspy">
      <div class="panel-heading">
        HEADING
      </div>
      <div class="panel-body">
        <ul class="nav nav-pills nav-stacked">
          <li className="active"><a href="#sectionOne"  data-offset="200"  onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>About</a></li>
          <li><a href="#sectionTwo" data-offset="40" onClick={() => scrollToComponent(this.Experience, { offset: 0, align: 'top', duration: 1500})}>Experience</a></li>
          <li><a href="#sectionThree" data-offset="40" onClick={() => scrollToComponent(this.Education, { offset: 0, align: 'top', duration: 1500})}>Education</a></li>
          <li><a href="#sectionFour" data-offset="40" onClick={() => scrollToComponent(this.Skill, { offset: 0, align: 'top', duration: 1500})}>Skills</a></li>
              <li><a href="#sectionSix"  data-offset="40" onClick={() => scrollToComponent(this.Award, { offset: 0, align: 'top', duration: 1500})}>Certificate</a></li>
          <li><a href="#sectionFive" data-offset="40" onClick={() => scrollToComponent(this.Interests, { offset: 0, align: 'top', duration: 1500})}>Interests</a></li>




          <li role="presentation" class="divider"></li>
          <li><a href="#toTop" data-offset="40" onClick={() => scrollToComponent(this.top, { offset: 0, align: 'top', duration: 1500})}>Back To Top <span class="glyphicon glyphicon-hand-up"></span></a></li>
        </ul>
      </div>
      </div>
      </div>



      </div>







    );
  }
}
