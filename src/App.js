import React from "react";
import 'antd/dist/antd.min.css';
import Main from "./components/Main";
import './style/style.css';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Main />
    </BrowserRouter>
  );
}

export default App;
