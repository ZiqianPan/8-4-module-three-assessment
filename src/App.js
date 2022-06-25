import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [allLocations, setAllLocations] = useState([])

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data);
        // console.log(allMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((res) => res.json())
      .then((data) => {
        setAllPeople(data);
        // console.log(allMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/locations`)
      .then((res) => res.json())
      .then((data) => {
        setAllLocations(data);
        // console.log(allMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div className="App">
     <Router>
        <div>
          <Nav />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies allMovies={allMovies} setAllMovies={setAllMovies}/>} />
            <Route path="/people" element={<People allPeople={allPeople} setAllPeople={setAllPeople}/>} />
            <Route path="/locations" element={<Locations allLocations={allLocations} setAllLocations={setAllLocations} />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
