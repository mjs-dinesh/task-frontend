import React, { Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from 'common_components/hoc/main.hoc';
import store from 'store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'screens/home/home.scree';
import Login from 'screens/auth/login.screen';
import SignUp from 'screens/auth/signup.screen';
import ForgotPassword from 'screens/auth/forgot_password.screen';
import ResetPassword from 'screens/auth/reset_password.screen';

const NavRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Main>
        <Component {...props} />
      </Main>
    )}
  />
);

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/sign_up" component={SignUp} />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/rest_password/:id" component={ResetPassword} />

            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
