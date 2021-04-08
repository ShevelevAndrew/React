import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './components/app.scss'
import  Routes  from './components/routes'


ReactDOM.render( 
  <div className='layout'>
  <Routes />
  {/* <App /> */}
  </div> ,
  document.getElementById("root")
)