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
import Admin from "./pages/Admin";
import Gallery from "./pages/Gallery";
import Customize from "./pages/Customize";
import User from "./pages/User";
import{ getProducts } from'./api/db';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

import { getUserInfo, getInfo } from "./api/backend.js"


import * as lol from "./api/backend.js"
window.lol = lol

//ProtectedRoute

function ProtectedRoute({children, user, permission_level, ...rest}) {
  return (

    // this route takes other routes assigned to it from the App.js and return the same route if condition is met
    <Route {...rest} render={(props) => {

      // returns route if there is a valid token set in the cookie
      if (user && user.permission_level > permission_level) {
        return children;
      } else {
        // returns the user to the landing page if there is no valid token set
        return (
          <Redirect
            to={{
              pathname: "/",
              state: {
                // sets the location a user was about to access before being redirected to login
                from: props.location,
              },
            }}
          />
        );
      }
    }}></Route>
  )
}

//App.js
function App() {
  const [ language, setLanguage ] = useState(0)
  const [ products, setProducts ] = useState([]);
  const [ user, setUser ] = useState({})
  const [ info, setInfo ] = useState({})

  useEffect(() => {
    const productsFetched = getProducts();
    productsFetched
        .then(result => setProducts(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
},[]);

  useEffect(() => {
    getUserInfo().then(newUser => {
      setUser(newUser)
    })

    getInfo().then(newInfo => {
      setInfo(newInfo)
    })
  }, [])

  return <Router>
    <NewsletterSignup/>
    <NavBar language={language} setLanguage={setLanguage} user={user} setUser={setUser} />
    <div className="Content-container">
      <Switch>
        <Route exact path="/">
          <Home language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/listing">
          <Listing language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/gallery">
          <Gallery language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/contact">
          <Contacts language={language} setLanguage={setLanguage} info={info} />
        </Route>
        <Route path="/mention">
          <Mentions language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/faq">
          <FAQ language={language} setLanguage={setLanguage} info={info} />
        </Route>
        <Route path="/customize">
          <Customize language={language} setLanguage={setLanguage}/>
        </Route>
        <Route path="/support">
          <Support language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/user" user={user}>
          <User language={language} setLanguage={setLanguage} user={user} />
        </Route>
        {
          products.map((product) =>
            <Route path={"/" + product.name}>
              <Product language={language} setLanguage={setLanguage} product={product}/>
            </Route>
          )
        }
        <ProtectedRoute path="/admin" user={user}>
          <Admin language={language} setLanguage={setLanguage} user={user} />
        </ProtectedRoute>
      </Switch>
    </div>
    <Footer />
  </Router>
}

export default App;
