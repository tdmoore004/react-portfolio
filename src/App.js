import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Portfolio from "./components/Portfolio.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
