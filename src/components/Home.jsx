import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Services from './Services';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Portfolio from './Portfolio';
export class Home extends Component {
    render() {
        return (
          <React.Fragment>
          <div>
          <section id="intro" className="clearfix">
            <div className="container">
              <div className="intro-img">
                <img src="assets/img/intro-img.svg" alt="" className="img-fluid" />
              </div>
              <div className="intro-info">
                <h2>We create<br /><span>Future</span><br />people to people.</h2>
                <div>
                  {/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
                  <NavLink className="btn-services scrollto" to='/services'>Accounting Services</NavLink>
                  <NavLink className="btn-services scrollto" to='/services'>Bridge to Buyer & Supplier</NavLink>
                  {/* <a href="#services" className="btn-services scrollto">Our Services</a> */}
                </div>
              </div>
            </div>
          </section>{/* End Intro Section */}
          <main id="main">
          <About></About>
            
          <Services></Services>
            {/* <section id="services" className="section-bg">
              <div className="container">
                <header className="section-header">
                  <h3>Services</h3>
                  <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                </header>
                <div className="row">
                  <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                    <div className="box">
                      <div className="icon"><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
                      <h4 className="title"><a href>Lorem Ipsum</a></h4>
                      <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                    <div className="box">
                      <div className="icon"><i className="ion-ios-bookmarks-outline" style={{color: '#e9bf06'}} /></div>
                      <h4 className="title"><a href>Dolor Sitema</a></h4>
                      <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                    <div className="box">
                      <div className="icon"><i className="ion-ios-paper-outline" style={{color: '#3fcdc7'}} /></div>
                      <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                      <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                    <div className="box">
                      <div className="icon"><i className="ion-ios-speedometer-outline" style={{color: '#41cf2e'}} /></div>
                      <h4 className="title"><a href>Magni Dolores</a></h4>
                      <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                    <div className="box">
                      <div className="icon"><i className="ion-ios-world-outline" style={{color: '#d6ff22'}} /></div>
                      <h4 className="title"><a href>Nemo Enim</a></h4>
                      <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                    <div className="box">
                      <div className="icon"><i className="ion-ios-clock-outline" style={{color: '#4680ff'}} /></div>
                      <h4 className="title"><a href>Eiusmod Tempor</a></h4>
                      <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* End Services Section */}
            {/* ======= Why Us Section ======= */}
            {/* <section id="why-us" className="wow fadeIn">
              <div className="container">
                <header className="section-header">
                  <h3>Why choose us?</h3>
                  <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
                </header>
                <div className="row row-eq-height justify-content-center">
                  <div className="col-lg-4 mb-4">
                    <div className="card wow bounceInUp">
                      <i className="fa fa-diamond" />
                      <div className="card-body">
                        <h5 className="card-title">Corporis dolorem</h5>
                        <p className="card-text">Deleniti optio et nisi dolorem debitis. Aliquam nobis est temporibus sunt ab inventore officiis aut voluptatibus.</p>
                        <a href="#" className="readmore">Read more </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="card wow bounceInUp">
                      <i className="fa fa-language" />
                      <div className="card-body">
                        <h5 className="card-title">Voluptates dolores</h5>
                        <p className="card-text">Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur.</p>
                        <a href="#" className="readmore">Read more </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="card wow bounceInUp">
                      <i className="fa fa-object-group" />
                      <div className="card-body">
                        <h5 className="card-title">Eum ut aspernatur</h5>
                        <p className="card-text">Autem quod nesciunt eos ea aut amet laboriosam ab. Eos quis porro in non nemo ex. </p>
                        <a href="#" className="readmore">Read more </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row counters">
                  <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">08</span>
                    <p>Clients</p>
                  </div>
                  <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">1000s</span>
                    <p>Projects</p>
                  </div>
                  <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">24</span>
                    <p>Hours Of Support</p>
                  </div>
                  <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">200</span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </section>End Why Us Section */}
            {/* ======= Portfolio Section ======= */}
            <Portfolio></Portfolio>
            {/* <section id="portfolio" className="clearfix">
              <div className="container">
                <header className="section-header">
                  <h3 className="section-title">Our Portfolio</h3>
                </header>
                <div className="row">
                  <div className="col-lg-12">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">All</li>
                      <li data-filter=".filter-app">App</li>
                      <li data-filter=".filter-card">Card</li>
                      <li data-filter=".filter-web">Web</li>
                    </ul>
                  </div>
                </div>
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
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
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
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
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
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
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
                  </div>
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
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
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
                  </div>
                </div>
              </div>
            </section> */}
            {/* End Portfolio Section */}
            {/* ======= Testimonials Section ======= */}
            {/* <section id="testimonials" className="section-bg">
              <div className="container">
                <header className="section-header">
                  <h3>Testimonials</h3>
                </header>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="owl-carousel testimonials-carousel wow fadeInUp">
                      <div className="testimonial-item">
                        <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt="" />
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                        <p>
                          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        </p>
                      </div>
                      <div className="testimonial-item">
                        <img src="assets/img/testimonial-2.jpg" className="testimonial-img" alt="" />
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                        <p>
                          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        </p>
                      </div>
                      <div className="testimonial-item">
                        <img src="assets/img/testimonial-3.jpg" className="testimonial-img" alt="" />
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                        <p>
                          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        </p>
                      </div>
                      <div className="testimonial-item">
                        <img src="assets/img/testimonial-4.jpg" className="testimonial-img" alt="" />
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                        <p>
                          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                        </p>
                      </div>
                      <div className="testimonial-item">
                        <img src="assets/img/testimonial-5.jpg" className="testimonial-img" alt="" />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <p>
                          Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* End Testimonials Section */}
            {/* ======= Team Section ======= */}
            <Team></Team>
            {/* <section id="team">
              <div className="container">
                <div className="section-header">
                  <h3>Team</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 wow fadeInUp">
                    <div className="member">
                      <img src="assets/img/team-1.jpg" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Walter White</h4>
                          <span>Chief Executive Officer</span>
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
                      <img src="assets/img/team-2.jpg" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Sarah Jhonson</h4>
                          <span>Product Manager</span>
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
                      <img src="assets/img/team-3.jpg" className="img-fluid" alt="" />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>William Anderson</h4>
                          <span>CTO</span>
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
                      <img src="assets/img/team-4.jpg" className="img-fluid" alt="" />
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
            </section> */}
            {/* End Team Section */}
            {/* ======= Clients Section ======= */}
            {/* <section id="clients" className="section-bg">
              <div className="container">
                <div className="section-header">
                  <h3>Our CLients</h3>
                  <p>Release 2.0</p>
                </div>
                { <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="client-logo">
                      <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="client-logo">
                      <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="client-logo">
                      <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="client-logo">
                      <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="client-logo">
                      <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="client-logo">
                      <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="client-logo">
                      <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="client-logo">
                      <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
                    </div>
                  </div>
                </div> }
              </div>
            </section> */}
            {/* End Clients Section */}
            <Contact></Contact>
            {/* ======= Contact Section ======= */}
             
            {/* <section id="contact">
              <div className="container-fluid">
                <div className="section-header">
                  <h3>Contact Us</h3>
                </div>
                <div className="row wow fadeInUp">
                  <div className="col-lg-6">
                    <div className="map mb-4 mb-lg-0">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: '312px'}} allowFullScreen />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-md-5 info">
                        <i className="ion-ios-location-outline" />
                        <p>A108 Adam Street, NY 535022</p>
                      </div>
                      <div className="col-md-4 info">
                        <i className="ion-ios-email-outline" />
                        <p>info@example.com</p>
                      </div>
                      <div className="col-md-3 info">
                        <i className="ion-ios-telephone-outline" />
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>
                    <div className="form">
                      <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="form-row">
                          <div className="form-group col-lg-6">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                          </div>
                          <div className="form-group col-lg-6">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                          <div className="validate" />
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                          <div className="validate" />
                        </div>
                        <div className="mb-3">
                          <div className="loading">Loading</div>
                          <div className="error-message" />
                          <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* End Contact Section */}
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 footer-info">
                    <h4>Gagana Consultants Pvt Ltd</h4>
                    <p>No.7/2, Old, 78 New, Maruthi Emerald, Graphite India Main Rd ITPL Main Road, Bengaluru, Karnataka 560066</p>
                  </div>
                  <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><a href="#">Home</a></li>
                      {/* <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li> */}
                      <li><a href="#">Terms of service</a></li>
                      <li><a href="#">Privacy policy</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Follow Us</h4>
                    {/* <p>Release 2.0.</p> */}
                    <div className="social-links">
                      <a href="https://twitter.com/login" className="twitter"><i className="fa fa-twitter" /></a>
                      <a href="https://en-gb.facebook.com/login/" className="facebook"><i className="fa fa-facebook" /></a>
                      <a href="https://www.instagram.com/accounts/login/?hl=en" className="instagram"><i className="fa fa-instagram" /></a>
                      <a href="https://accounts.google.com/signin" className="google-plus"><i className="fa fa-google-plus" /></a>
                      {/* <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a> */}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Coming soon</p>
                    {/* <form action method="post">
                      <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="copyright">
                 © Copyright <strong>Gagana Consultants Pvt Ltd</strong>. All Rights Reserved 
              </div>
              <div className="credits">
                {/*
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
        */}
                Designed by<a href="https://bootstrapmade.com/">Bootstrap</a>
              </div>
            </div>
          </footer>{/* End Footer */}
          <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
        </div> 
        </React.Fragment>
        )
    }
}

export default Home
