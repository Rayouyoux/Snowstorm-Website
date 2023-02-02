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
import {Cart} from './pages/Cart';
import { getProductsById } from './api/db';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useState, useEffect } from "react";

import { getUserInfo, getInfo, setInfo as setAdminInfo } from "./api/backend.js"


import * as lol from "./api/backend.js"
window.lol = lol

//ProtectedRoute

function ProtectedRoute({ children, user, permission_level, ...rest }) {
  return (

    // this route takes other routes assigned to it from the App.js and return the same route if condition is met
    <Route {...rest} render={(props) => {

      // returns route if there is a valid token set in the cookie
      if (user && user.waiting)
        return <h1>Loading...</h1>
      else if (user && user.permission_level >= Number(permission_level))
        return children;
      else {
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
  const [language, setLanguage] = useState(0)
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({ waiting: true })
  const [info, setInfo] = useState({})
  /*
    useEffect(() => {
      const productsFetched = getProducts();
      productsFetched
          .then(result => setProducts(result))
          .catch(error=>console.error("Erreur avec notre API :",error.message));
  },[]);
  */

  useEffect(() => {
    getUserInfo().then(newUser => {
      setUser(newUser)
    })

    getInfo().then(newInfo => {
      setInfo(newInfo)
    })
  }, [])

  useEffect(() => {
    if (user && user.permission_level >= 200) setAdminInfo(info)
  }, [info])

  return <><Router>
    {user ? <NewsletterSignup language={language} setLanguage={setLanguage} user={user} setUser={setUser} /> : null}
    <NavBar language={language} setLanguage={setLanguage} user={user} setUser={setUser} />
    <div className="Content-container">
      <Switch>
        <Route exact path="/">
          <Home language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/cart">
          <Cart language={language} setLanguage={setLanguage} />
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
          <FAQ language={language} setLanguage={setLanguage} user={user} info={info} setInfo={setInfo} className="faq-container" />
        </Route>
        <Route path="/customize">
          <Customize language={language} setLanguage={setLanguage} />
        </Route>
        <Route path="/support">
          <Support language={language} setLanguage={setLanguage} />
        </Route>
        <ProtectedRoute path="/user" user={user} permission_level="0">
          <User language={language} setLanguage={setLanguage} user={user} setUser={setUser} />
        </ProtectedRoute>
        {/*
          products.map((product) =>
            <Route path={"/" + product._id}>
              <Product language={language} setLanguage={setLanguage} product={product}/>
            </Route>
          )
        */}
        <Route path="/product/:id">
          <Product language={language} setLanguage={setLanguage} />
        </Route>

        <ProtectedRoute path="/admin" user={user} permission_level="200">
          <Admin language={language} setLanguage={setLanguage} user={user} />
        </ProtectedRoute>
      </Switch>
    </div>
    <Footer />
  </Router></>
}

export default App;
