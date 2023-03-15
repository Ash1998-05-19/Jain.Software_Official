import './App.css';
import { Navbar, Carosal, Section3,Section4,Section5,Footer } from './components';
function App() {
  return (
   <div>
    <Navbar/>
    <Carosal/>
    <div className='sec3'>
    <Section3/>
    </div>
    <div className='sec4'>
    <Section4/>
    </div>
    <div className='sec5'>
    <Section5/>
    </div>
    <div className='footer'>
    <Footer/>
    </div>

   </div>
  )
}

export default App;
