import Home from "./pages/Home";
import Product from "./pages/Product";
import Contacts from "./pages/Contact";
import Mentions from "./pages/Mention";
import FAQ from "./pages/Faq";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Support from "./pages/Support";
import NewsletterSignup from "./components/PopupNewsletter";
import Listing from "./pages/Listing";
import Admin from "./pages/Admin"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import { useState } from "react";

//App.js
function App() {
  const [ language, setLanguage ] = useState(0)

  return <Router>
    <NewsletterSignup />
    <NavBar language={language} setLanguage={setLanguage} />
    <div className="Content-container">
      <Switch>
        <Route exact path="/">
          <Home language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/listing">
          <Listing language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/contact">
          <Contacts language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/mention">
          <Mentions language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/faq">
          <FAQ language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/support">
          <Support language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/admin">
          <Admin language={language} setLanguage={setLanguage} />
        </Route>
      </Switch>
    </div>
    <Footer />
  </Router>
}

export default App;
