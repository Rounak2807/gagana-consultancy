import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div>
               <section id="services" className="section-bg">
            <div className="container-fluid">
              <header className="section-header">
                <h3>Services</h3>
                {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
              </header>
              <div className="row">
                <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
                    <h4 className="title"><a href>01</a></h4>
                    <p className="description">Accounting, Auditing Services</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i className="ion-ios-bookmarks-outline" style={{color: '#e9bf06'}} /></div>
                    <h4 className="title"><a href>02</a></h4>
                    <p className="description">New Company Registration GST & Bank Compliance</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i className="ion-ios-paper-outline" style={{color: '#3fcdc7'}} /></div>
                    <h4 className="title"><a href>03</a></h4>
                    <p className="description">TDS & ITR Return Filing Contractor Licenses</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i className="ion-ios-speedometer-outline" style={{color: '#41cf2e'}} /></div>
                    <h4 className="title"><a href>04</a></h4>
                    <p className="description">IEC & MSME Registration</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i className="ion-ios-world-outline" style={{color: '#d6ff22'}} /></div>
                    <h4 className="title"><a href>05</a></h4>
                    <p className="description">SERVICES REGARDING TAXATION FOR APARTMENTS</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i className="ion-ios-clock-outline" style={{color: '#4680ff'}} /></div>
                    <h4 className="title"><a href>06</a></h4>
                    <p className="description">Books of Accounts in Electronic mode / Tally.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff986b'}} /></div>
                    <h4 className="title"><a href>07</a></h4>
                    <p className="description">Preparation & Presentation of Weekly, Monthly & Yearly wise.</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i className="ion-ios-clock-outline" style={{color: '#4680ff'}} /></div>
                    <h4 className="title"><a href>08</a></h4>
                    <p className="description">Company Business operation funds flow solution.</p>
                  </div>
                </div>
              </div>
            </div>
          </section> 
            </div>
        )
    }
}

export default Services
