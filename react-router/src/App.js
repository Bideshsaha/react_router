// import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Mainheader from './components/Mainheader';

import {NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Labs">Labs</NavLink>
            </li>
          </ul>
        </nav>
      </div>

<Routes>
  <Route path="/" element={<Mainheader/>}>
  {/* home is default route */}
    <Route index element={<Home/>}></Route>
    <Route path="/Support" element={<Support/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Labs" element={<Labs/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
  </Route>
</Routes>
    </div>
  );
}

export default App;
