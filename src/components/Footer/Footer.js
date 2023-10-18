
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BiSearch } from 'react-icons/bi';
import './Footer.css';
import bg1 from "../../assets/img/bg/bg1.jpg";
import bg2 from "../../assets/img/bg/bg2.jpg";


class Footer extends Component {
  render() {
    return (
      <footer id="foot" className="footer px-0 px-lg-3">
        <Container fluid>
         <div className="main">
            <div className="upper">
              <div className="upper-left">
                <span>Product shell</span>
              </div>
              <div className="upper-right">
              <span><BiSearch/>Search</span>
              <span className="arrow">Last date 30<i id="icon" className="nc-icon nc-stre-down"/></span>
              </div>
            </div>  
            <div className="container">
              <div className="middle">
                 <div className="middle-left">
                   <span>product</span>
                 </div>
                 <div className="middle-right">
                        <span>Stock</span>
                        <span>Price</span>
                        <span>Total Scale</span>
                 </div>
              </div>
              <hr></hr>
             <div className="lower-container">
              <div className="img-container">
                <img src={bg1} alt=""/>
                <div className="img-text">
                     <p className="3d_text">Abstract 3D</p>
                     <span>Lorem Ipsum is simply dummy text of the printing </span>
                </div>
              </div>
              <div className="lower-right">
                  <span className="stock">32 in stock</span>
                  <span className="price">$45.99</span>
                  <span className="sale">20</span>
              </div>
              </div>
              <div className="lower-container">
              <div className="img-container">
                <img src={bg2} alt=""/>
                <div className="img-text">
                     <p className="3d_text">Sharphen illustration</p>
                     <span>Lorem Ipsum is simply dummy text of the printing </span>
                </div>
              </div>
              <div className="lower-right">
                  <span className="stock">32 in stock</span>
                  <span className="price">$45.99</span>
                  <span className="sale">20</span>
              </div>
              </div>

            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
