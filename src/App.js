import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './components/Homepage';
import Focus from './components/Focus'
import ClickCounter from './components/ClickCounter';
import DarkLightMode from './components/DarkLightMode';
import Assets from './components/Assets';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/focus" className="nav-item">Focus</Link>
        <Link to="/click-counter" className="nav-item">Click Counter</Link>
        <Link to="/dark-light-mode" className="nav-item">Dark or Light Mode</Link>
        <Link to="/assets" className="nav-item">Assets</Link>

      </nav>
      <Routes>
        <Route path="/" element={Homepage}/>
        <Route path="/focus" element={Focus}/>
        <Route path="/click-counter" element={ClickCounter}/>
        <Route path="/dark-light-mode" element={DarkLightMode}/>
        <Route path="/assets" element={Assets}/>
      </Routes>
      
    </div>
  );
}

export default App;
