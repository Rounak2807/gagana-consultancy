import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div>
            <section id="contact">
            <div className="container-fluid">
              <div className="section-header">
                <h3>Contact Us</h3>
              </div>
              <div className="row wow fadeInUp">
                <div className="col-lg-6">
                  <div className="map mb-4 mb-lg-0">
                    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.191370787949!2d77.7143993140952!3d12.95960299086377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae123b7d4f39a3%3A0x961d42c357e0f85b!2sIndiQube%20Omega!5e0!3m2!1sen!2sin!4v1591286050460!5m2!1sen!2sin"  frameBorder={0} style={{border: 0, width: '100%', height: '312px'}} allowFullScreen />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-5 info">
                      <i className="ion-ios-location-outline" />
                      <p>IndiQube-Omega, No.7/2,Old,78, New Maruthi Emerald, Graphite India Main Rd,ITPL Main Road 
                        Bengaluru Karnatka 560066 </p>
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
          </section>{/* End Contact Section */}

            </div>
        )
    }
}

export default Contact
