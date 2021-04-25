// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootsrap-overrides.css';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './layout/Navigation';
import Header from './layout/Header';
import Footer from './layout/Footer';
import{BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Doctors from './pages/Doctors';
import CovidUpdate from './pages/CovidUpdate';

function App() {
  return (
    <Router>
    <div>
       <Switch>
      <Home exact path="/" />
      <About path="/about-us" component={About} />
      <Contact path="/contact-us" component={Contact} />
      <Doctors path="/doctors" component={Doctors} />
      <CovidUpdate path="/covid-updates" component={CovidUpdate} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
