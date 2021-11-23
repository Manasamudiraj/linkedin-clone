
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';
import {BrowserRouter as BrowserRouter,Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';

import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[]);
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

const mapStateToprops=(state)=>{
  return {};
};
const mapDispatchToprops=(dispatch)=>({
  getUserAuth:()=>dispatch(getUserAuth()),
});

export default connect(mapStateToprops,mapDispatchToprops)(App);
