import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import WorldHistory from './components/WorldHistory'
import Geography from './components/Geography'
import ComputerScience from './components/ComputerScience'
import Football from './components/Football'
import Contribute from './components/Contribute';
import Success from './components/Success';


function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/history' element={<WorldHistory />}></Route>
        <Route path='/geography' element={<Geography />}></Route>
        <Route path='/compsci' element={<ComputerScience/>}></Route>
        <Route path='/football' element={<Football/>}></Route>
        <Route path='/contribute' element={<Contribute />}></Route>
        <Route path='/success' element={<Success />}></Route>
      </Routes>
      </BrowserRouter>
   

  );
}

export default App;
