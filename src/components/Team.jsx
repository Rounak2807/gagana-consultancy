import React, { Component } from 'react'

export class Team extends Component {
    render() {
        return (
            <div>
                <section id="team">
            <div className="container">
              <div className="section-header">
                <h3>Team</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 wow fadeInUp">
                  <div className="member">
                    <img src="assets/img/Ramgopal.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Ramgopal</h4>
                        <span>Senior Director</span>
                        <div className="social">
                          <a href><i className="fa fa-twitter" /></a>
                          <a href><i className="fa fa-facebook" /></a>
                          <a href><i className="fa fa-google-plus" /></a>
                          <a href><i className="fa fa-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="member">
                    <img src="assets/img/Saroj.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Saroj</h4>
                        <span>Managing Director</span>
                        <div className="social">
                          <a href><i className="fa fa-twitter" /></a>
                          <a href><i className="fa fa-facebook" /></a>
                          <a href><i className="fa fa-google-plus" /></a>
                          <a href><i className="fa fa-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="member">
                    <img src="assets/img/Santosh.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Santosh</h4>
                        <span>Marketing Head</span>
                        <div className="social">
                          <a href><i className="fa fa-twitter" /></a>
                          <a href><i className="fa fa-facebook" /></a>
                          <a href><i className="fa fa-google-plus" /></a>
                          <a href><i className="fa fa-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="member">
                    <img src="assets/img/team-2.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                        <div className="social">
                          <a href><i className="fa fa-twitter" /></a>
                          <a href><i className="fa fa-facebook" /></a>
                          <a href><i className="fa fa-google-plus" /></a>
                          <a href><i className="fa fa-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Team Section */}
 
            </div>
        )
    }
}

export default Team
