import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Provider from './context';
import { context } from './context';
import { useContext } from 'react';
import Calculator from './calculator';
import Result from './result';


function App() {

  return (
    <div className="App ">
      
              <Provider>
                <BrowserRouter>
                <Routes>
                  <Route path='/' Component={Calculator} />
                  <Route path='result' Component={Result} />
                </Routes>
                </BrowserRouter>
              </Provider>
    </div>
    );
}

export default App;

// for job interview 