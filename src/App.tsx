import React from 'react';
import './App.css';
import Login from './Components/Login';
import DashPage from './Components/Dash';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App(){
  const Data={
    email:"admin",
    passwrd:'1234'
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login datas={Data}/>} />
          <Route path='/dash' element={<DashPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Login datas={Data}/> */}
    </div>
  );
}

export default App;
