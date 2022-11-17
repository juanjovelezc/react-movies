import { useState } from "react";

import "./App.css";

import Routers from "./routers/routers";

function App() {


  return (
    <div>
      <header>
        <h1 className="title">: Películas</h1>
      </header>
      <Routers/>
    </div>
  );
}

export default App;
