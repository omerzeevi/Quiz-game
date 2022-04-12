import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
import './App.css';

function App() {

  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./blueburst.png)" }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/quiz' element={<Quiz 
                                          score={score} 
                                          setScore={setScore} 
                                      />}
          /> 
          <Route path='/result' element={<Result />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
