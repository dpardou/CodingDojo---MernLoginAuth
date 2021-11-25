import './App.css';
import ContactAdmin from './components/contacts/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import RegisterForm from './components/register/Form';
import LoginForm from './components/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/contacts/*" element={<ContactAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
