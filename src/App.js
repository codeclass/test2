import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Myform} from "./Form/Myform";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Mainpage} from "./Main/Mainpage";
import {Newspage} from "./News/Newspage";

function App() {


    return (

    <div className="App">
      <div className="row">
          <BrowserRouter>
              <Routes>
                  <Route path="" element={<Mainpage />} />
                  <Route path="contacts" element={<Myform />} />
                  <Route path="news" element={<Newspage />} />
              </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
