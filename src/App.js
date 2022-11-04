import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Account from './Account';
import Output from './sections/Output';
import Header from './components/Header';
import Error from './Error';

function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account/*' element={<Account />} /> 
          <Route path='*' element={Error} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
