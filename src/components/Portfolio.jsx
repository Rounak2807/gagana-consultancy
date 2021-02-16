import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        return ( 
                <div>
            <section id="portfolio">
            <div className="container">
              <div className="section-header">
                <h3 className="section-title">Our Portfolio</h3></div>
                <div className="row portfolio-container">
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/app1.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">App 1</a></h4>
                        <p>App</p>
                        <div>
                          <a href="assets/img/portfolio/app1.jpg" data-gall="portfolioGallery" title="App 1" className="venobox link-preview"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/web3.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">Web 3</a></h4>
                        <p>Web</p>
                        <div>
                          <a href="assets/img/portfolio/web3.jpg" className="venobox link-preview" data-gall="portfolioGallery" title="Web 3"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/app2.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">App 2</a></h4>
                        <p>App</p>
                        <div>
                          <a href="assets/img/portfolio/app2.jpg" className="venobox link-preview" data-gall="portfolioGallery" title="App 2"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/card2.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">Card 2</a></h4>
                        <p>Card</p>
                        <div>
                          <a href="assets/img/portfolio/card2.jpg" className="venobox link-preview" data-gall="portfolioGallery" title="Card 2"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/web2.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">Web 2</a></h4>
                        <p>Web</p>
                        <div>
                          <a href="assets/img/portfolio/web2.jpg" className="venobox link-preview" data-gall="portfolioGallery" title="Web 2"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/app3.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">App 3</a></h4>
                        <p>App</p>
                        <div>
                          <a href="assets/img/portfolio/app3.jpg" className="venobox link-preview" data-gall="portfolioGallery" title="App 3"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/card1.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">Card 1</a></h4>
                        <p>Card</p>
                        <div>
                          <a href="assets/img/portfolio/card1.jpg" className="venobox link-preview" data-gall="portfolioGallery" title="Card 1"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/card3.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">Card 3</a></h4>
                        <p>Card</p>
                        <div>
                          <a href="assets/img/portfolio/card3.jpg" className="venobox link-preview" data-gall="portfolioGallery" title="Card 3"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
                    <div className="portfolio-wrap">
                      <img src="assets/img/portfolio/web1.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4><a href="#">Web 1</a></h4>
                        <p>Web</p>
                        <div>
                          <a href="assets/img/portfolio/web1.jpg" className="venobox link-preview" data-gall="portfolioGallery" title="Web 1"><i className="ion ion-eye" /></a>
                          <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div> 
              </section>
              </div>)
    }
}

export default Portfolio