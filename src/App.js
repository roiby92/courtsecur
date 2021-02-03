import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import Reports from './pages/Reports'
import Gards from './pages/Gards'
import Pressure from './pages/Pressure'
import Auth from './components/Auth/Auth'
import Week1 from './pages/Week1'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from './store/actions/index'

function App() {
  
  const user = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.authCheckState())
  }, [])

  let routes
  if (user.token == ! null) {
    routes = (
      <Switch>
        <Route path="/auth" exact component={Auth} />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={Week1} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/gards" exact component={Gards} />
        <Route path="/pressure" exact component={Pressure} />
      </Switch>
    )
  }
  return (
    <div >
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;