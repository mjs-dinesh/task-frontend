import Button from 'common_components/ui/button/button.ui';
import InputField from 'common_components/ui/field/field.ui';
import LoginModel from 'components/login_model/login_model.component';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { login, signup } from 'modal/user.modal';

const SignUp = () => {
  const history = useHistory();
  const validationSchema = Yup.object({
    username: Yup.string().required('Username Required'),
    password: Yup.string().required('Password required'),
    email: Yup.string().required('Email required'),
  });

  const initialValue = {
    password: '',
    email: '',
    username: '',
  };

  const submit = async (values) => {
    const { email, ...body } = values;
    body.email = email.toLowerCase();
    try {
      const response: any = await signup(body);
      const loginBody = { email: body.email, password: body.password };
      const loginResponse: any = await login(loginBody);
      const { token } = loginResponse;
      localStorage.setItem('token', token);
      window.location.href = '/';
    } catch (err) {
      toast.error(err.data ? err.data.message : err.message);
    }
  };
  return (
    <div>
      <LoginModel head="Sign up">
        <Formik
          initialValues={initialValue}
          onSubmit={submit}
          validationSchema={validationSchema}>
          <Form>
            <div className="login_field_container">
              <InputField name="username" label="Username" type="text" />
            </div>
            <div className="login_field_container">
              <InputField name="email" label="Email" type="text" />
            </div>
            <div className="login_field_container">
              <InputField name="password" label="password" type="password" />
            </div>
            <div className="login_submit_button">
              <Button value="Signup" className="button_wide" />
            </div>
            <div className="nav_link_container">
              <div className="nav_link_wrapper">
                <div className="login_link_container">
                  Already have an account?
                  <Link to="/login" className="sign_link">
                    Login
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

export default SignUp;
