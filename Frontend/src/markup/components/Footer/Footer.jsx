import React from 'react';
// My Additional 
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="main-footer">
      <div className="upper-box">
        <div className="auto-container">
          <div className="row no-gutters">
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content" style={{ paddingLeft: "25px" }}>
                  <div className="icon">
                    <span className="flaticon-pin"></span>
                  </div>
                  <div className="text" style={{ paddingRight: "95px" }}>
                    Addis Ababa, Ethiopia
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content" style={{ paddingLeft: "25px" }}>
                  <div className="icon">
                    <span className="flaticon-email"></span>
                  </div>
                  <div className="text" style={{ paddingRight: "30px" }}>
                    Email us : <br />{" "}
                    {/* <a href="mailto:contact.contact@autorex.com"> */}
                    <a href="/contact">mymom0937@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content" style={{ paddingLeft: "25px" }}>
                  <div className="icon">
                    <span className="flaticon-phone"></span>
                  </div>
                  <div className="text" style={{ paddingRight: "27px" }}>
                    Call us on : <br />
                    <strong>+251 937 59 79 17</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* **** */}

        {/* **** */}
      </div>
      <div className="widgets-section">
        <div className="auto-container">
          <div className="widgets-inner-container">
            <div className="row clearfix">
              <div className="footer-column col-lg-4">
                <div className="widget widget_about">
                  <div className="text">
                    Streamline your operations by leveraging the latest
                    technology to identify key areas for improvement. Optimize
                    your workflow to increase efficiency and customer
                    satisfaction with our advanced garage app management system.
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="widget widget_links">
                      <h4 className="widget_title">Usefull Links</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li>
                            <a href="/home">Home</a>
                          </li>
                          <li>
                            <a href="/about">About Us</a>
                          </li>
                          <li>
                            <a href="#">Appointment</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="/contact">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="widget widget_links">
                      <h4 className="widget_title">Our Services</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li>
                            <a href="#">Performance Upgrade</a>
                          </li>
                          <li>
                            <a href="#">Transmission Service</a>
                          </li>
                          <li>
                            <a href="#">Break Repair & Service</a>
                          </li>
                          <li>
                            <a href="#">Engine Service & Repair</a>
                          </li>
                          <li>
                            <a href="#">Trye & Wheels</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-4">
                <div className="widget widget_newsletter">
                  <h4 className="widget_title">Newsletter</h4>
                  <div className="text">Get latest updates and offers.</div>
                  <div className="newsletter-form"></div>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/https://www.linkedin.com/in/seid-endris-dev/">
                        <span className="fab fa-linkedin-in"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/mymom0937/">
                        <span className="fab fa-github"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-google-plus-g"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="footer-bottom">
          <div className="copyright-text">
            © Copyright <a href="#">Abe Garage</a> 2024 . All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;