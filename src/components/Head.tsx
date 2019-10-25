import React, { Component } from 'react'
import { Link } from 'gatsby';

const NavbarBurger = (props:any) => (
  <div 
    onClick={props.toggleMenu}
    className={`navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
)

export default class Head extends Component {
  state = {
    activeMenu: false,
  }

  toggleMenu=()=>{
    this.setState({
      activeMenu: !this.state.activeMenu
    })
  }
  render() {
    return (
      <header className="navbar has-shadow is-fixed-top">
        <div className="navbar header">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={require("../images/coconate.png")} alt=""/>
            </Link>
            <div className="navbar-item is-hidden-touch">Agustinus Nathaniel</div>
            <NavbarBurger
              active={this.state.activeMenu}
              toggleMenu={this.toggleMenu}
            />
          </div>
          <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
          {/* <div className={`navbar-menu`}>           */}
            {/* <div className="navbar-start">
              <Link to="/" className="navbar-item">Agustinus Nathaniel</Link>
            </div> */}
            <div className="navbar-end">
              <Link to="/about" className="navbar-item">About</Link>
              <Link to="/" className="navbar-item">Contact</Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
