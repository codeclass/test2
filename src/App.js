import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Myform} from "./Form/Myform";
import {useState} from "react";

function App() {


    return (

    <div className="App">
      <div className="row">
          <Myform></Myform>
      </div>
    </div>
  );
}

export default App;
