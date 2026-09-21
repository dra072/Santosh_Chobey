import React, { useState } from "react";
import axios from "axios";
import API from "./API";
import { Toaster, toast } from "react-hot-toast";

import logo from "./assets/aisect_logo.png";
import img1 from "./assets/sir1.webp";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";


function App() {

  return (
    <>
      <section id="Header">
        <div className="navbar">
          <img src={logo} alt="AISECT" />
          <button className="bluebtn">Send Wish</button>
        </div>
      </section>

      <section id="Hero">
        <h4>Dedicated with deep admiration by the Department of CS & IT</h4>
        <h1>Celebrating the Visionary <br /> <span>Hon. Shri Santosh Choubey Ji</span></h1>
        <p>"Pioneering Technocrat • Acclaimed Poet & Novelist • Architect of Grassroots Digital Literacy • Chancellor & Mentor to Millions"</p>
        <img src={img2} alt="" />
      </section>

      <section id="Impact">
        <h4>Pillars of Impact</h4>
        <h2>The Journey of an Epoch Maker</h2>
        <div className="card">
          <div>
            <i className="fa fa-briefcase"></i>
            <h3>From IIT to Social Revolution</h3>
            <hr />
            <p>
              Graduating from IIT Delhi and qualifying for prestigious Indian Engineering and Civil Services, he chose an unconventional path—leaving administrative comfort to establish AISECT in 1985 to take computer technology to rural India.
            </p>
          </div>
          <div>
            <i className="fa fa-briefcase"></i>
            <h3>Architect of Universities</h3>
            <hr />
            <p>
              Founded Rabindranath Tagore University (RNTU), Dr. C.V. Raman University, SGSU, and an expansive higher education network focused on research, innovation, vernacular computing, and hands-on skill development.
            </p>
          </div><div>
            <i className="fa fa-briefcase"></i>
            <h3>Literary & Cultural Patron</h3>
            <hr />
            <p>
              An illustrious novelist, essayist, and poet. He envisioned 'Vishwa Rang', one of the globe's largest festivals celebrating Indian literature, culture, and arts across over 50 nations.
            </p>
          </div><div>
            <i className="fa fa-briefcase"></i>
            <h3>Vernacular IT & Localization</h3>
            <hr />
            <p>
              Championed local language computing, translating complex computational paradigms into Hindi and regional tongues, breaking the linguistic barrier that kept millions away from IT careers.
            </p>
          </div>
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </section>

      <section id="Message">
        <div className="first">
          <h4>Departmental Reverence</h4>
          <h2>Message crafted by the CS & IT Department Faculty, Scholars, and Students.</h2>
          <div>
            <strong>Respected and Beloved Chancellor Sir,</strong>
            <p>On behalf of every faculty member, research scholar, and student within the <span>Department of Computer Science & Information Technology</span>, we extend our most respectful, loving, and joyous birthday wishes to you.</p>
            <p>In computer science, we often speak of architectures, optimization, and scalable algorithms. Yet, when we look upon your lifetime journey, we see the ultimate algorithm of leadership: one that optimizes human dignity, expands accessibility for those previously left behind, and bridges the cold logic of silicon with the warm tenderness of Hindi poetry.</p>
            <p>Your visionary inception of computer education during the 1980s—when personal computers were mere curiosities—planted the seeds from which hundreds of thousands of engineers, developers, and entrepreneurs have blossomed. As we code modern AI models, cloud infrastructures, and cyber architectures today, we are guided by your principle that technology must always serve mankind with conscience and humility.</p>
            <p><i><span>"We pray to the Almighty for your perpetual radiant health, supreme happiness, and infinite creative spirit. May you continue to illuminate our minds and paths for generations to come."</span></i></p>

            <hr />

            <p>Faculty, Researchers & Students <br /> <span>Department of Computer Science & Information Technology</span></p>
          </div>

        </div>

        <div className="second">
          <h4>Congratulatory Board</h4>
          <h2>Departmental Wishes wall </h2>
          <div className="card">
            
            <div className="item">
              <div className="text">
                <p>"Wishing our revered Chancellor Shri Santosh Choubey Sir the happiest of birthdays! Your visionary guidance inspires our faculty and students to push technological boundaries with humanity."</p>
              </div>
              <div className="details">
                
                <span>Uday Ranjan<br /> <i>Dean, CS & IT</i></span>
                <img src={img2} alt="" />
              </div>
            </div><div className="item">
              <div className="text">
                <p>"Wishing our revered Chancellor Shri Santosh Choubey Sir the happiest of birthdays! Your visionary guidance inspires our faculty and students to push technological boundaries with humanity."</p>
              </div>
              <div className="details">
                
                <span>Ravikant Kumar <br /> <i>Head of Department, CS & IT</i></span>
                <img src={img2} alt="" />
              </div>
            </div><div className="item">
              <div className="text">
                <p>"Wishing our revered Chancellor Shri Santosh Choubey Sir the happiest of birthdays! Your visionary guidance inspires our faculty and students to push technological boundaries with humanity."</p>
              </div>
              <div className="details">
                
                <span>Vijay Lal<br /> <i>Assistant Professor, CS & IT</i></span>
                <img src={img2} alt="" />
              </div>
            </div><div className="item">
              <div className="text">
                <p>"Wishing our revered Chancellor Shri Santosh Choubey Sir the happiest of birthdays! Your visionary guidance inspires our faculty and students to push technological boundaries with humanity."</p>
              </div>
              <div className="details">
                <span>Prabhat Kumar<br /> <i>Assistant Professor, CS & IT</i></span>
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="item">
              <div className="text">
                <p>"Wishing our revered Chancellor Shri Santosh Choubey Sir the happiest of birthdays! Your visionary guidance inspires our faculty and students to push technological boundaries with humanity."</p>
              </div>
              <div className="details">
                <span>Ajay Kumar<br /> <i>Assistant Professor, CS & IT</i></span>
                <img src={img2} alt="" />
              </div>
            </div>

            <div className="item">
              <div className="text">
                <p>"Wishing our revered Chancellor Shri Santosh Choubey Sir the happiest of birthdays! Your visionary guidance inspires our faculty and students to push technological boundaries with humanity."</p>
              </div>
              <div className="details">
                
                <span>Danish Raja Akhtar <br /> <i>Lab Instructor, CS & IT</i></span>
                <img src={img2} alt="" />
              </div>
            </div>
            
          </div>

        </div>
      </section>

      <section id="Footer">
        <div>
          
<h1>Department of CS & IT</h1>
<img src={logo} alt="" />
<p>Developed in celebration of the birthday of our Chancellor <br /> Hon'ble Shri Santosh Choubey Ji. <br />AISECT Group of Universities.</p>
<p>Empowered with technology, literature, and educational equity.</p>

        </div>
        
      </section>
    </>
  )
}

export default App
