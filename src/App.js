import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProfilePage from "./pages/profilePage";
import Navbarr from './reusables/navbar';
import Foot from './reusables/footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbarr/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<ProfilePage />} />
        </Routes>
      <Foot/>
      </Router>
    </div>
  );
}

export default App;
