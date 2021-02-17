import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Showlist from './components/Showlist';
import Showinfo from './components/Showinfo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exac path="/home" component={Home} />
        <Route exac path="/about" component={About} />
        <Route exac path="/shows/:id" component={Showinfo} />
        <Route exac path="/shows" component={Showlist} />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
