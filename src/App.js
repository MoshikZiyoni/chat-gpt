import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  
            


  return (

<BrowserRouter>
    <div className="App">
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>




    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;