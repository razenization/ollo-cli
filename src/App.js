import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner/LoadingSpinner';
// import { Dev } from "./util/pages/Dev/Dev";
// import { Telegram } from "./util/pages/Telegram/Telegram";
// import { CsMain } from "./cs/pages/CsMain/CsMain";

const Dev = React.lazy(() => import('./util/pages/Dev/Dev'));
const Telegram = React.lazy(() => import('./util/pages/Telegram/Telegram'));
const CsMain = React.lazy(() => import('./cs/pages/CsMain/CsMain'));
const CsPrematch = React.lazy(() => import('./cs/pages/CsPrematch/CsPrematch'));

const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/cs/:mid" exact>
        <CsPrematch />
      </Route>
      <Route path="/cs/" exact component={CsMain}></Route>
      <Route path="/" exact>
        <Dev />
      </Route>
      <Route path="/tg" exact>
        <Telegram />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <Suspense
        fallback={
          <div className="center">
            <LoadingSpinner />
          </div>
        }
      >
        {routes}
      </Suspense>
    </Router>
  );
};

export default App;
