import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {Fetchdata} from './components/Fetchdata'
import {Footer} from './components/Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/general" element={<Fetchdata cat="general"/>}></Route>
          <Route path="/business" element={<Fetchdata cat="business"/>}></Route>
          <Route path="/entertainment" element={<Fetchdata cat="entertainment"/>}></Route>
          <Route path="/health" element={<Fetchdata cat="health"/>}></Route>
          <Route path="/science" element={<Fetchdata cat="science"/>}></Route>
          <Route path="/sports" element={<Fetchdata cat="sports"/>}></Route>
          <Route path="/technology" element={<Fetchdata cat="technology"/>}></Route>
          
        </Routes>
        <Footer></Footer>
        
      </Router>
      
      
    </div>
  );
}

export default App;
