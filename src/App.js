import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { AuthProvider} from "./AuthService";
import LoggedInRoute from "./LoggedInRoute";

import Home from "./Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import terms from "./pages/Terms";
import privacy from "./pages/Privacy";
import userInfo from "./pages/UserInfo";
import law from "./pages/Law";
import DesignList from "./pages/course/design/DesignList";
import DesignPre1 from "./pages/course/design/Prepare1";
import DesignPre2 from "./pages/course/design/Prepare2";
import DesignPre3 from "./pages/course/design/Prepare3";
import DesignHtml1 from "./pages/course/design/secHtml1";
import DesignHtml2 from "./pages/course/design/secHtml2";
import DesignHtml3 from "./pages/course/design/secHtml3";
import DesignCss1 from "./pages/course/design/secCss1";
import DesignCss2 from "./pages/course/design/secCss2";
import DesignCss3 from "./pages/course/design/secCss3";
import DesignInvoice1 from "./pages/course/design/invoice1";
import DesignInvoice2 from "./pages/course/design/invoice2";
import DesignInvoice3 from "./pages/course/design/invoice3";
import graduatedList from "./pages/course/graduated/GraduatedList";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path='/' component={Home} />
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/terms' component={terms}/>
          <Route exact path='/privacy' component={privacy}/>
          <Route exact path='/userInfo' component={userInfo}/>
          <Route exact path='/law' component={law}/>
          <Route exact path='/designList' component={DesignList}/>
          <Route exact path='/design/prepare1' component={DesignPre1} itemId='prepare1'/>
          <Route exact path='/design/prepare2' component={DesignPre2}/>
          <Route exact path='/design/prepare3' component={DesignPre3}/>
          <Route exact path='/design/sechtml1' component={DesignHtml1}/>
          <Route exact path='/design/sechtml2' component={DesignHtml2}/>
          <Route exact path='/design/sechtml3' component={DesignHtml3}/>
          <Route exact path='/design/seccss1' component={DesignCss1}/>
          <Route exact path='/design/seccss2' component={DesignCss2}/>
          <Route exact path='/design/seccss3' component={DesignCss3}/>
          <Route exact path='/design/invoice1' component={DesignInvoice1}/>
          <Route exact path='/design/invoice2' component={DesignInvoice2}/>
          <Route exact path='/design/invoice3' component={DesignInvoice3}/>
          <Route exact patj='/graduatedList' component={graduatedList}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
export default App;