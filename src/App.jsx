import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BillionairePage from './billionairespages/BillionairePage';
import Mark_Zuckerberg from './billionairespages/Mark_Zuckerberg';
import ElonMusk from './billionairespages/ElonMusk';
import Jeff_Bezos from './billionairespages/Jeff_Bezos'
import LarryPage from './billionairespages/LarryPage'
import Oprah_Winfrey from './billionairespages/Oprah_Winfrey'
import Peter_Thiel from './billionairespages/Peter_Thiel'
import Reed_Hastings from './billionairespages/Reed_Hastings'
import Richard_Branson from './billionairespages/Richard_Branson'
import Tim_Cook from './billionairespages/Tim_Cook'
import Warren_Buffett from './billionairespages/Warren_Buffett'
import NavBar from './billionairespages/NavBar';
import FooterBillion from './billionairespages/FooterBillion';
function App() {

  return (
    <>
      <BrowserRouter basename='/billionaire'>
      <NavBar/>
      <Routes>
         <Route path='/' element={<BillionairePage/>} />
         <Route path='/markZuckerberg' element={<Mark_Zuckerberg/>}/>
         <Route path='/elonMusk' element={<ElonMusk/>}/>
         <Route path='/jeffBezos' element={<Jeff_Bezos/>}/>
         <Route path='/larryPage' element={<LarryPage/>}/>
         <Route path='/oprahWinfrey' element={<Oprah_Winfrey/>}/>
         <Route path='/peterThiel' element={<Peter_Thiel/>}/>
         <Route path='/reedHasting' element={<Reed_Hastings/>}/>
         <Route path='/richardBranson' element={<Richard_Branson/>}/>
         <Route path='/timCook' element={<Tim_Cook/>}/>
         <Route path='/warrenBuffet' element={<Warren_Buffett/>}/>
         
      </Routes>
      <FooterBillion />
      </BrowserRouter>
    </>
  )
}

export default App
