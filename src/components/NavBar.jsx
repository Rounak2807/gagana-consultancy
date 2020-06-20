import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
export class NavBar extends Component {
    render() {
        return (
            <div>
              <header id="header" className="fixed-top">
          <div className="container">
            <div className="logo float-left">
              {/* Uncomment below if you prefer to use an text logo */}
              {/* <h1 class="text-light"><a href="#header"><span>NewBiz</span></a></h1> */}
              <a href="#intro" className="scrollto">
              <img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            </div>
            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                <li className="active"><NavLink className="active" to='/'>Insights</NavLink></li>
                <li> <NavLink  to='/about'>About Us</NavLink> </li>
                <li> <NavLink  to='/services'>Services</NavLink></li>
                <li><NavLink  to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink  to='/team'>Team</NavLink> </li>
                <li className="drop-down"><a href>Get Appointment</a>
                  <ul>
                  <li className="drop-down"><a href="#">Audit</a>
                      <ul>
                        <li><a href="#">New Company</a></li>
                        <li><a href="#">Tax Revision</a></li>
                        {/*<li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>*/}
                      </ul>
                    </li>
                    <li><a href="#">Business Plan</a></li>
                    <li><a href="#">CA Services</a></li>
                    <li><a href="#">Fashion Design</a></li>
                  </ul>
                </li>
                <li><NavLink  to='/contact'>Contact Us</NavLink> </li>
              </ul>
            </nav>{/* .main-nav */}
          </div>
        </header>{/* #header */}
          </div>
        )
    }
}

export default NavBar
