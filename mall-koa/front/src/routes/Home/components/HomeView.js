import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Header from './Header'
import Footer from '../../../components/Footer'

export const HomeView = () => (
  <div>
    <Header/>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />

    <Footer/>
  </div>
)

export default HomeView
