import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Update from './Components/Update/Update';
import Add from './Components/Add/Add';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path='/' element={<Home />}  />
              <Route exact path='/Update' element={<Update />}  />
              <Route exact path='/Add' element={<Add />}  />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
