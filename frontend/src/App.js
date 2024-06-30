
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './auth/LoginPage';
import VerifyOtp from './auth/VerifyOtp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/verify-otp' element ={<VerifyOtp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
