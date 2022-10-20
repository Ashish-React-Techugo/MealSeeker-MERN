import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Na } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Header from './components/Header';


function App() {
  // fetch('http://localhost:8000/login',{
  //   method:'post',
  //   body:JSON.stringify({
  //     loginfield:'9650321168',
  //     password:"ashish"
  //   }),
  //   headers:{
  //     'Content-Type':'application/json'
  //   }
  // }).then(res=>res.json()).then(json=>console.log(json))
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
