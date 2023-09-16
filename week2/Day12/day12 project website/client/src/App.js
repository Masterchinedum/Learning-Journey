import './App.css';
import Post from "./post";
import Header from './header';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layout />}>
        <Route index element = {< Post />} />
        <Route path= {'/login'} element ={<div>login</div>} />
      </Route>
    </Routes>

  );
}

export default App;