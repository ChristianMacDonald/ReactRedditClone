import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header, SideBar } from './components';
import { Home, MyAccount, Pond } from './pages';

function App() {
  return (
    <Router>
      <Header/>
      <SideBar/>
      <Routes path='/'>
        <Route index element={<Home/>}/>
        <Route path='my-account' element={<MyAccount/>}/>
        <Route path='p/:name' element={<Pond/>}/>
      </Routes>
    </Router>
  );
}

export default App;