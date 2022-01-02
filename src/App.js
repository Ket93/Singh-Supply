import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/home.js";
import Jordans from "./pages/jordans.js";
import Nike from "./pages/nike.js";
import Contact from "./pages/contact.js";
import Addidas from "./pages/addidas.js";

function App() {
  return (
    <body>

      <Router>
        <div className="App">
          <header className="App-header">

            <Navbar />

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/jordans" element={<Jordans />}></Route>
              <Route path="/nike" element={<Nike />}></Route>
              <Route path="/addidas" element={<Addidas />}></Route>
              <Route path="/contact" element={<Contact />}></Route>

            </Routes>

          </header>
        </div>
      </Router>
    </body>
  );
}

export default App;
