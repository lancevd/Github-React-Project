import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Account from './Account';
import Output from './sections/Output';
import Header from './components/Header';
import Error from './Error';
import ErrorBoundaryTestPage from './ErrorBoundaryTestPage';

function App() {
  return (
    <Router>
      <div className="App ">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/account/*' element={<Account />} /> 
          <Route path='/*' element={<Error/>} />
          <Route path='/test' element={<ErrorBoundaryTestPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Show a list of repos **
// List should have pagination **
// Page Showing data from a single repo clicked **
// Use nested routes **
// Implement SEO
// Error Boundary **
// SHow page to test Srror Boundary **
// 404 Pages **
// Good UI and Design

