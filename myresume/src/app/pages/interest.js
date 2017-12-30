import React, { Component } from 'react';
import ReactStars from 'react-stars'


let Table = require("react-bootstrap/lib/Table");
export default class Interest extends Component {


  render() {
    return (

      <section class=" p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <section className='violet' ref={(section) => { this.Interests = section; }}></section>
          <h2 class="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time playing Musical Instruments and Singing. I like to explore new things and learn new things. I enjoy mountain biking</p>
          <p class="mb-0">When forced indoors, I learn something new about programing or research for things about programing languages I didnt know. I also follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring Musician, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
        </div>
      </section>


)}
}
