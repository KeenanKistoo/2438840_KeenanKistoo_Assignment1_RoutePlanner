import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar';
import RouteAvail from './Pages/Avail/RouteAvail';
import RouteInfo from './Pages/Info/RouteInfo';
import Purchase from './Pages/Purchase/Purchase';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<RouteAvail/>}/>
        <Route path='/info' element={<RouteInfo/>}/>  
        <Route path='/purchase' element={<Purchase/>}></Route>
      </Routes>      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
