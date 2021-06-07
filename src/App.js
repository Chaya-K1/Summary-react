import logo from './Images/O-logo.png';
import Home from './Components/Home';
import About from "./Components/About";
import store from "./Redux/store";
import DetailsGlasses from "./Components/DetailsGlasses";
import TotalPayment from "./Components/TotalPayment";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap'
import History from './Components/History';
import Meeting from './Components/Meeting';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt="logo optic" width={48} height={48}></img>ptics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <div className="container">
                  <div className="row">
                    <Link to='/history' className="href m-2">History Optics</Link>
                    <Link to='/response' className="href m-2">Reasons for opening the Optics</Link>
                    <Link to='/glasses' className="href m-2">Choose glasses</Link>
                    <Link to='/meeting' className="href m-2">Optometrist</Link>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path='/history'>
              <History />
            </Route>
            <Route path='/payment'>
              <TotalPayment />
            </Route>
            <Route path='/response'>
              <About />
            </Route>
            <Route path='/glasses'>
              <DetailsGlasses.insertGlasses />
              <DetailsGlasses.allGlasses />
              <DetailsGlasses.itemsChecked />
            </Route>
            <Route path='/meeting'><Meeting/></Route>
            <Route path='/'><Home/></Route>

          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
