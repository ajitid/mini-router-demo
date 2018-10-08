import React, { Component } from 'react'
import { Router, Link } from './mini-router'
import './App.css'

const About = () => {
  return (
    <div>
      <p>At /about</p>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <p>At home</p>
    </div>
  )
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Link to='/'>Home</Link> <br />
        <Link to='/about'>About</Link>
        <Router>
          <Home path='/' />
          <About path='/about' />
        </Router>
      </div>
    )
  }
}

export default App
