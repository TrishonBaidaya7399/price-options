import './App.css'
import LineChart from './assets/Components/LineChart/LineChart'
import Nav from './assets/Components/Nav/Nav'
import Phones from './assets/Components/Phones/Phones'
import PriceOptions from './assets/Components/PriceOptions/PriceOptions'
// import DaisyNav from './assets/Components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
    {/* Navbar */}
    <Nav></Nav>
    {/* DaisyNav */}
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-center text-6xl lg:mt-8'>Price Options</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
