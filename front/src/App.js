import Home from "./pages/Home";
import Contacts from "./pages/Contact";
import FAQ from "./pages/Faq";
import Test from "./pages/Test";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

//App.js
function App(){
  return <Router>
    <NavBar/>
      <div className="Content-container">
        <Switch>
          <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
            <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
          </Route>
          <Route path="/contact">
            <Contacts />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
      </div>
    <Footer/>
  </Router>
}

export default App;
