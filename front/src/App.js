import Home from "./pages/Home";
import Contacts from "./pages/Contact";
import Mentions from "./pages/Mention";
import FAQ from "./pages/Faq";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Support from "./pages/Support";
import NewsletterSignup from "./components/PopupNewsletter";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

//App.js
function App() {
  return <Router>
    <NewsletterSignup />
    <NavBar />
    <div className="Content-container">
      <Switch>
        <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
        <Route path="/mention">
          <Mentions />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
      </Switch>
    </div>
    <Footer />
  </Router>
}

export default App;
