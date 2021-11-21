
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';
import {BrowserRouter as BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}> </Route>
      <Route path="/home" element={<><Header/><Home/></>}></Route>
      
      
  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
