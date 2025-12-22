import './App.css'
import Course from './Course';
import Footer from './Footer';
import Navbar from './Navbar';
import image1 from './assets/html.png'
import image2 from './assets/css.jpg'
import image3 from './assets/js.png'

function App() {
  

  return (
      <>
      
      <Course name="HTML Full Course" price = "$49" image={image1}/>
      <Course name="CSS Full Course" price = "$76" image={image2}/>
      <Course name="javaScript Full Course" price = "$90" image={image3}/>
      
      </>
      
    
  )
}

export default App
