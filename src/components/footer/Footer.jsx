import React from 'react';
import Logo from '../../assets/jainsoftware-2.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Connect With Thinkers</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="" />
        <p>Corporate Office : First Floor ,Jairam Complex,JaiStambh Chowk ,Raipur .<br/> Pincode : 492001,India .<br/> Branches at :Hyderabad . Raipur . Minneapolis .</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Delivering Perfections</h4>
        <p>Careers</p>
        <p>Newsroom</p>
        <p>Knowledgeable Blog</p>
        <p>Events</p>
        <p>Sitemap</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Email : global[at] Jain.software</p>
        <p>Phone: +91-9111554999</p>
        <p>http://jain.software</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© Jain Software Foundation 2021. Business ReDefined by Jain Software | Delivering Perfection</p>
    </div>
  </div>
);

export default Footer;
