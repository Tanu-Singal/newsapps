import React  from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

const App=()=> {

  return (
   <div >
           <Navbar/>
      
          <Routes>
            <Route path="/" element={<News key="business" pageSize={5} country="in" category="business" />}/>
            <Route path="/business" element={<News key="business" pageSize={5} country="in" category="business" />} />
            <Route path="/science" element={<News key="science" pageSize={5} country="in" category="science" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology" />} />
            <Route path="/health" element={<News key="health" pageSize={5} country="in" category="health" />} />
          </Routes>


   </div>
  )
}

export default App;
