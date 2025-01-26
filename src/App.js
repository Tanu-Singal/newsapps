import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

const App=()=> {
  const originalText = "Click on categories to see News related to it.....";
  const [text, setText] = useState(originalText);
  const [isErased, setIsErased] = useState(false);

  useEffect(() => {
    let timer;
    if (!isErased) {
      timer = setTimeout(() => {
        eraseText();
      }, 5000); 
    } else {
      timer = setTimeout(() => {
        revealText();
      }, 1000);
    }

    return () => clearTimeout(timer); 
  }, [isErased]);

  const eraseText = () => {
    let idx = text.length - 1;
    const interval = setInterval(() => {
      if (idx >= 0) {
        setText((prevText) => prevText.slice(0, idx));
        idx--;
      } else {
        clearInterval(interval);
        setIsErased(true);
      }
    }, 100); 
  };

  const revealText = () => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < originalText.length) {
        setText((prevText) => originalText.slice(0, idx + 1));
        idx++;
      } else {
        clearInterval(interval);
        setIsErased(false); 
      }
    }, 100); 
  };

  return (
   <div >
           <Navbar/>
           
           <h2
        style={{
          color: "#DA012D",
          position: "absolute",
          left:"20px",
          top: "80px",
          fontStyle: "italic",
          fontWeight: "bold",
          zIndex: 10,
        }}
      >
        {text}
      </h2>
          <Routes>
            
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
