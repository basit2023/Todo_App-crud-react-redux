
import './App.css';
import Create from './components/Create.js';
import Update from './components/Update.js';
import MainReducer from './components/mainReducer.js';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainReducer/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
