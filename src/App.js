import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
