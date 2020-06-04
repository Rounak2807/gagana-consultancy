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
                <li className="active"><NavLink className="active" to='/'>Home</NavLink></li>
                <li> <NavLink  to='/about'>About Us</NavLink> </li>
                <li> <NavLink  to='/services'>Services</NavLink></li>
                {/* <li><a href="#portfolio">Portfolio</a></li> */}
                <li><NavLink  to='/team'>Team</NavLink> </li>
                <li className="drop-down"><a href>Drop Down</a>
                  <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    {/* <li className="drop-down"><a href="#">Drop Down 2</a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li> */}
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    <li><a href="#">Drop Down 5</a></li>
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
