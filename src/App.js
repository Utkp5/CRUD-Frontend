import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Update from './Components/Update/Update';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path='/' element={<Home />}  />
              <Route exact path='/Update/:id' element={<Update />}  />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
