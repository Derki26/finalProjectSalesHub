import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../src/Components/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
          <Route path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          </Routes>
        <Footer/>    
    </>
  )
}

export default App