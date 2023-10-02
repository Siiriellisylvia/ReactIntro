import './App.css'
import Columns from './components/Columns'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import Home from './components/Home'
import MyHeader from './components/MyHeader'
import Reactstate from './components/Reactstate'

function App() {

  return (
    <>
    <Home />
    <Greeting name="Natalia" mystyle="lavender" />
    <Greeting name="Natalia" mystyle="lightcoral" />
    <Greeting name="Natalia" mystyle="lightpink" />
    <Greeting name="Natalia" mystyle="lightpink" />
    <Reactstate />

    {/* <span style={{color: 'lavender'}}>Hello</span>

    <span className="lavenderText">I'm Siiri</span>

    <MyComponent /> */}
    </>
  )
}

export default App
