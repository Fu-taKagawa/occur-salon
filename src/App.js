import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { AuthProvider} from "./AuthService";
import LoggedInRoute from "./LoggedInRoute";

import Home from "./Home";
import Login from "./pages/Login";
import terms from "./pages/Terms";
import privacy from "./pages/Privacy";
import userInfo from "./pages/UserInfo";
import law from "./pages/Law";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/terms' component={terms}/>
          <Route exact path='/privacy' component={privacy}/>
          <Route exact path='/userInfo' component={userInfo}/>
          <Route exact path='/law' component={law}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
export default App;