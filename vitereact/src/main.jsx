import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Myapp(){
  return (
    
    <h1>Custom React</h1>
  )
}


// const reactElement = {
//   type :'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'

//   },
//   children:'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank' >Visit Google </a>

)

// Given below is the proper syntax of using reactElement

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click me to visit Google',

)


ReactDOM.createRoot(document.getElementById('root')).render(

  <App/>
  
)
