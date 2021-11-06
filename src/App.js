import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Visitors from "./pages/Visitors";
import Welcome from "./pages/Welcome";
import CovidUpdates from "./components/covid-updates";
import Footer from "./components/footer/footer";
import Navbar2PointO from "./components/navbar2.0";
import Tickets from "./pages/Tickets";
import ScrollTop from "../src/ScrollTop";
import { useEffect } from "react";

function App() {
  return (
    <ScrollTop>
      <Router>
        <CovidUpdates />
        <div className="home">
          <Navbar2PointO />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/visitors" component={Visitors} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/business" component={Business} />
            <Route exact path="/tickets" component={Tickets}/>
          </Switch>

          <Footer />
        </div>
      </Router>
    </ScrollTop>
  );
}

export default App;
