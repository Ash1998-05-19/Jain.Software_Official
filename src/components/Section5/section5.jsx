import React from 'react';
import Feature from '../../components/feature/Feature';
import './section5.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Jain Software" text="The main thing about “Jain Software Developers” is “Flexible” and that’s makes us Central India’s best choice in delivering perfection over any business challenges. We’re the team of logical thinkers which consist of 70% IITians & NITians. We can code in any programming language, any platform that gonna suits BEST as per your BUSINESS and that makes us BEST IT Company." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore Our Site</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Software Development Science?" text="Jain Software develop customized software for users as per the requirements." />
      <Feature title="iPhone/Android App Development ?" text="Our Android/IOS App Development team is there to make an app as per your requirements." />
      <Feature title="React + CSS4 on Dream Website Development ?" text="Your dream, our work! We will provide you websites or applications with best creative designing." />
    </div>
  </div>
);

export default WhatGPT3;
