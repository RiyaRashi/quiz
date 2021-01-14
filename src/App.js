import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import QuizSummary from "./pages/QuizSummary";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  

  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/instructions" component={Instructions} />
          <Route exact path="/about" component={About} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/summary" component={QuizSummary} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;