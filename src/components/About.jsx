import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
              <section id="about">
            <div className="container">
              <header className="section-header">
                <h3>About Us</h3>
                <p>One company can maintain your accounting and market your Manufacturing  product to  world wide buyers..</p>
              </header>
              <div className="row about-container">
                <div className="col-lg-6 content order-lg-1 order-2">
                  <p>
                  Our Company Objectives  to create future for people, We will be Bridge to Buyer and supplier. 
                  One company can maintain your book keeping A/C and market your Manufacturing product to world wide Buyers.
                  To buy  great product from right place & Maintains your accounts.
                  </p>
                  <div className="icon-box wow fadeInUp">
                    <div className="icon"><i className="fa fa-bar-chart" /></div>
                    <h4 className="title"><a href>Accounting</a></h4>
                    <p className="description">Providing Tailored Financial Services for Forward-Thinking Business Owners Helps in improving the company’s financial efficiency</p>
                  </div>
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon"><i className="fa fa-photo" /></div>
                    <h4 className="title"><a href>Online Bridge to Buyer and supplier.</a></h4>
                    <p className="description">Providing Platform for small scale supplier to market their products to get right buyer</p>
                  </div>
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon"><i className="fa fa-shopping-bag"/></div>
                    <h4 className="title"><a href>Dolor Sitema</a></h4>
                    <p className="description">Our Company Objectives  to create future for People.</p>
                  </div>
                </div>
                <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                  <img src="assets/img/about-img.svg" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="row about-extra">
                <div className="col-lg-6 wow fadeInUp">
                  <img src="assets/img/about-extra-1.svg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                  <h4>Services that we're providing 1:</h4>
                  <p>
                  We Undertake: Company Compliance, Audit Assignments, Tax Assistance In: Income tax, GST & TDS. Consultancy for Accounts and Tax it is Association of Qualified, MBA’& M. Com, B. Com, BBM & CA Graduates. Experience the field of Accounts Finance & Audit
                  </p>
                  <p>
                  We mainly focus on Small scale and medium scale supplier, manufacture to build their future.
                  </p>
                </div>
              </div>
              <div className="row about-extra">
                <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                  <img src="assets/img/about-extra-2.svg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                  <h4>Our Services 2:</h4>
                  <p>
                  We have great Source suppliers  for all products, we can fulfill your requirements  from right suppliers as you need with 100% Quality Assurances.
                  </p>
                  <p>
                  We have  experts  Free lance. CAD designer , Fashion Designer & Product developments.  As per your direction and new innovation  (R & D).
                  </p>
                  <p>
                  We mainly focus on Small scale and medium scale supplier, manufacture to build their future.
                  </p>
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
 
            </div>
        )
    }
}

export default About
