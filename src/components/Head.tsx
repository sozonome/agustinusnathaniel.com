import React, { Component } from 'react'
import { Link } from 'gatsby'
import MyIcon from "../images/avataaars.svg";

export default class Head extends Component {
  render() {
    return (
      <div className="flex text-gray-600 bg-gray-900 sm:bg-black h-24 items-center px-6">
        <div className="w-1/4 sm:w-1/2 font-bold hover:text-white">
          <Link className="flex" to="/">
            <img className="h-12 w-12 mr-2" src={MyIcon}/>
            <p className="py-3 hidden sm:flex">Agustinus Nathaniel</p>
          </Link>
        </div>
        <ul className="flex w-1/2 justify-center sm:justify-end">
          <li className="hover:text-white">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="pl-2 hover:text-white">About</li>
          <li className="pl-2 hover:text-white">Contact</li>
        </ul>
      </div>
    )
  }
}
