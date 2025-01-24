import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  
 
  return (
    <div className="App">
    <Routes>
      <Route path ='/register' element={<Register></Register>}></Route>
      <Route path = '/login' element = {<Login></Login>}></Route>
      <Route path = '/home' element = {<Home></Home>}></Route>
      
    </Routes>
  </div>

  );
}

export default App;