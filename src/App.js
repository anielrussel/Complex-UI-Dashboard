import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Billing, Dashboard, Profile, SignIn, SignUp, Tables } from './components'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/tables' element={<Tables />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
