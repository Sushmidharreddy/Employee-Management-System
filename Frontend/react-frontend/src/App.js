import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Component/UpdateEmployeeComponent';


function App() {
  return (
    <div>

    <HeaderComponent/>

    <Router>

<div className="container">
  <Routes>
      <Route exact path="/" Component={ListEmployeeComponent}></Route>
      <Route path="/employees" Component={ListEmployeeComponent}></Route>
      <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
      <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
  </Routes>	
</div>
</Router>
    <FooterComponent/>

    </div> 
  );
}

export default App;
