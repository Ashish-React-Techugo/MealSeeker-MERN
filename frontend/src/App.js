import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Na } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';


function App() {
  return (
    <BrowserRouter>
    <Home/>
      <Routes>
      <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
