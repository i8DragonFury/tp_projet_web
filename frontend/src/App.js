import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Accueil from './component/pagesStatic/accueil';
import FAQ from './component/pagesStatic/faq';
import Users from './user/pages/Users';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import Footer from './Footer';
import ProfilStagiaires from './component/pagesStatic/profils';
import Gestion from './component/pagesStatic/gestion';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((userId) => {
    setIsLoggedIn(true);
    setUserId(userId);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
        </Route>
        <Route path="/places/new" exact>
        </Route>
        <Route path="/places/:placeId">
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Accueil />
        </Route>
        <Route path="/FAQ" exact>
          <FAQ />
        </Route>
        <Route path="/gestion" exact>
          <Gestion/>
        </Route>
        <Route path="/profils" exact>
          <ProfilStagiaires/>
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, userId:userId, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
        <Footer></Footer>
      </Router>
    </AuthContext.Provider>
  )
};

export default App;
