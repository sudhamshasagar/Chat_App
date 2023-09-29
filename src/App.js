import { useContext } from 'react';
import './App.css';
import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthenticationContext';

function App() {

  const {currentUser} = useContext(AuthContext);
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to='/login'/>
    }
      return children
  }
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route index element={<ProtectedRoute><Home/></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
