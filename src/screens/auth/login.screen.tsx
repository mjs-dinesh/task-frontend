import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from 'common_components/ui/field/field.ui';
import Button from 'common_components/ui/button/button.ui';
import { login } from 'modal/user.modal';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import './login.screen.scss';
import LoginModel from 'components/login_model/login_model.component';

const Login = () => {
  const history = useHistory();
  const validationSchema = Yup.object({
    password: Yup.string().required('Password required'),
    email: Yup.string().required('Email required'),
  });

  const initialValue = {
    password: '',
    email: '',
  };

  const submit = async (values) => {
    const { email, ...body } = values;
    body.email = email.toLowerCase();
    try {
      const response: any = await login(body);
      const { token, data: user } = response;
      localStorage.setItem('token', token);
      window.location.href = '/';
    } catch (err) {
      toast.error(err.data ? err.data.message : err.message);
    }
  };

  return (
    <div className="login_screen">
      <LoginModel head="Login">
        <Formik
          initialValues={initialValue}
          onSubmit={submit}
          validationSchema={validationSchema}>
          <Form>
            <div className="login_field_container">
              <InputField name="email" label="Email" type="text" />
            </div>
            <div className="login_field_container">
              <InputField name="password" label="password" type="password" />
            </div>
            <div className="login_submit_button">
              <Button value="Login" className="button_wide" />
            </div>
            <div className="nav_link_container">
              <div className="nav_link_wrapper">
                <div className="login_link_container">
                  New user?
                  <Link to="/sign_up" className="sign_link">
                    Signup
                  </Link>
                </div>
                <div className="login_link_container">
                  <Link to="/forgot_password" className="sign_link">
                    forgot password?
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </LoginModel>
    </div>
  );
};

export default Login;
