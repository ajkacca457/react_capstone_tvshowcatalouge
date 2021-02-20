import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exac path="/home" component={Home} />
          <Route exac path="/about" component={About} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
