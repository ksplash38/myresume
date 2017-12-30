import React, { Component } from 'react';
import ReactStars from 'react-stars'


let Table = require("react-bootstrap/lib/Table");
export default class Skill extends Component {


  render() {
    return (

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
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
          <div class="col-lg-5">
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
<div class="col-lg-5">
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



)}
}
