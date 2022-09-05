import React from "react";
import Home from './Home';
import CatFacts from "./Catfacts";
import CounterProject from "./Counter";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarPortfolio from "./Navbar";
import CapitalizingApp from "./Capitalizingapp";
import ZodiacSign from "./Zodiacsign";
import Container from 'react-bootstrap/Container';


function App() {
  return (<>
    <Router>
      <NavbarPortfolio />
      <Container>
        <div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catfacts" element={<CatFacts />} />
            <Route path="/counter" element={<CounterProject />} />
            <Route path="/capitalizingapp" element={<CapitalizingApp />} />
            <Route path="/zodiacsign" element={<ZodiacSign />} />
          </Routes>

        </div>
      </Container>
    </Router>
  </>

  );
}

export default App;
