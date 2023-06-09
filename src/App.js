import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProfilePage from "./pages/profilePage";
import Navbarr from './reusables/navbar';
import Foot from './reusables/footer';
import Suggestion from "./pages/suggestion";
import Games from "./pages/games";
import Chatbox from "./pages/chatbox";
import Journal from "./pages/journal";
import Docconnect from "./pages/docconnect";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbarr/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/suggestion" element={<Suggestion />} />
          <Route exact path="/game" element={<Games />} />
          <Route exact path="/chatbox" element={<Chatbox/>} />
          <Route exact path="/journal" element={<Journal/>} />
          <Route exact path="/profile" element={<ProfilePage/>} />
          <Route exact path="/docconnect" element={<Docconnect/>} />
        </Routes>
      <Foot/>
      </Router>
    </div>
  );
}

export default App;
