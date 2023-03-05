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
import designList from "./pages/course/design/DesignList";
import designPre1 from "./pages/course/design/Prepare1";
import designPre2 from "./pages/course/design/Prepare2";
import designPre3 from "./pages/course/design/Prepare3";
import designHtml1 from "./pages/course/design/secHtml1";
import designHtml2 from "./pages/course/design/secHtml2";
import designHtml3 from "./pages/course/design/secHtml3";
import designCss1 from "./pages/course/design/secCss1";
import designCss2 from "./pages/course/design/secCss2";
import designCss3 from "./pages/course/design/secCss3";
import designInvoice1 from "./pages/course/design/invoice1";
import designInvoice2 from "./pages/course/design/invoice2";
import designInvoice3 from "./pages/course/design/invoice3";
import graduatedList from "./pages/course/graduated/GraduatedList";

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
          <Route exact path='/designList' component={designList}/>
          <Route exact path='/design/prepare1' component={designPre1}/>
          <Route exact path='/design/prepare2' component={designPre2}/>
          <Route exact path='/design/prepare3' component={designPre3}/>
          <Route exact path='/design/sechtml1' component={designHtml1}/>
          <Route exact path='/design/sechtml2' component={designHtml2}/>
          <Route exact path='/design/sechtml3' component={designHtml3}/>
          <Route exact path='/design/seccss1' component={designCss1}/>
          <Route exact path='/design/seccss2' component={designCss2}/>
          <Route exact path='/design/seccss3' component={designCss3}/>
          <Route exact path='/design/invoice1' component={designInvoice1}/>
          <Route exact path='/design/invoice2' component={designInvoice2}/>
          <Route exact path='/design/invoice3' component={designInvoice3}/>
          <Route exact patj='/graduatedList' component={graduatedList}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
export default App;