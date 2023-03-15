import React from "react";
import './navbar.css'
import logo from '../../assets/jainsoftware-2.svg'
const Navbar = () => {
  return (

    <nav>
      <div className="wrapper">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="lalbtn close-btn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <a href="/" className="desktop-item">
              Why Jain Software
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Why Jain Software
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">Overview</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Business Success</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Corporate Case Study</a>
              </li>
              <hr className="style1" />
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Software
            </a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              Software
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="mrow">
                  <header>Microsoft</header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">Operating Systems</a>
                    </li>
                    <hr className="style1" />
                    <li>
                      <a href="/">Microsoft Office</a>
                    </li>
                    <hr className="style1" />
                    <li>
                      <a href="/">Servers</a>
                    </li>
                    <hr className="style1" />
                  </ul>
                </div>
                <div className="mrow">
                  <header>Antivirus & Internet Security</header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">Norton Security</a>
                    </li>
                    <hr className="style1" />
                    <li>
                      <a href="/">Eset Internet Security</a>
                    </li>
                    <hr className="style1" />
                    <li>
                      <a href="/">McAfee Total Protection</a>
                    </li>
                    <hr className="style1" />
                    <li>
                      <a href="/">Kaspersky Internet Security</a>
                    </li>
                    <hr className="style1" />
                  </ul>
                </div>
                <div className="mrow">
                  <header>Adobe</header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">Adobe Photoshop CS6</a>
                    </li>
                    <hr className="style1" />
                    <li>
                      <a href="/">Adobe Illustrator CS6</a>
                    </li>
                    <hr className="style1" />
                    <li>
                      <a href="/">Adobe After Effects CS6</a>
                    </li>
                    <hr className="style1" />
                    <li>
                      <a href="/">Adobe InDesign CS6</a>
                    </li>
                    <hr className="style1" />
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Products
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Why Jain Software
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">GST Smart Billing Software</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Finance Management Software</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Inventory Management System</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Hospital Billing Management Software</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Hotel Management Software</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">MLM Management System</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">School Management Software</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Spa & saloon Management Software</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Transport Management Software</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Magento Eye Prescription</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">General Billing Management Software</a>
              </li>
              <hr className="style1" />
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Portfolio
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Portfolio
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">BigData/Cloud</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Corporate Websites</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Ecommerce</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Online Marketing</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Servers</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Software</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Website Security</a>
              </li>
              <hr className="style1" />
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Services
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Services
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">Software Development Levels</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Software/App/Website Comparison</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">App Development</a>
              </li>
              <hr className="style1" />
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Innovations
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Innovations
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">Check Domain DNS Detail</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Check Domain Whois Detail</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Awareness Against Cyber Crime </a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">ClientExec V5 to WHMCS 6 </a>
              </li>
              <hr className="style1" />
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Companies
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Companies
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">Jain Software Developers</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">MNCHOST Incorporation</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/"> HACKERSMIND Inc</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">TechNIERA Inc</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">Jain Dental Hospital</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/">KarloShop</a>
              </li>
              <hr className="style1" />
              <li>
                <a href="/"> Anajshop | Online Grain ShopHACKERSMIND Inc</a>
              </li>
              <hr className="style1" />
            </ul>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="lalbtn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
   
  );
};

export default Navbar;
