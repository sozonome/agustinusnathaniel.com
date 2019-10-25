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
      <div className="">
        <header className="navbar is-fixed-top is-spaced is-dark has-background-black">
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
            <div className="navbar-start">
              <Link to="/" className="navbar-item is-hidden-desktop">Agustinus Nathaniel</Link>
            </div>
            <div className="navbar-end">
              <Link to="/projects" className="navbar-item">Projects</Link>
              <Link to="/" className="navbar-item">Contact</Link>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
