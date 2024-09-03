import logo from './logo.svg';
import './App.css';
import AddVisitor from './componrents/AddVisitor';
import ViewAll from './componrents/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path ="/" element={<AddVisitor/>}/>
    <Route path ="/view" element={<ViewAll/>}/>
    
    </Routes></BrowserRouter>
  
  )
}

export default App;
