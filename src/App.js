import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,trending,comedy,horror,romance,documentaries } from './urls'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPost url={originals} title='Netflif Originals'/>   
      <RowPost url={trending} title='Trending' isSmall/>   
      <RowPost url={action} title='Actions' isSmall/>   
      <RowPost url={comedy} title='Comedy Movies' isSmall/>   
      <RowPost url={horror} title='Horror Movies' isSmall/>   
      <RowPost url={romance} title='Romance Movies' isSmall/>   
      <RowPost url={documentaries} title='Documentaries' isSmall/>  
    </div>
  );
}

export default App;
