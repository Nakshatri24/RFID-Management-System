import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import Login from './pages/Login';
import Locations from './pages/Locations';
import Reports from './pages/Reports';
import Tags from './pages/Tags';
import Time from './pages/Time';
import User from './pages/User';
function App() {
  console.log(window.location);
  let Component;
  switch (window.location.pathname){
    case "/login":
      Component = Login
      break
      case "/time":
      Component = Time
      break
    case "/user":
      Component = User
      break
    case "/tags":
      Component = Tags
      break
    case "/report":
      Component = Reports
      break
    case "/location":
      Component = Locations
      break
    case "/report":
      Component = Reports
      break
    default:
      Component = Login
      break
  }

  return (
    <Component/>
    
  );
}

export default App;
