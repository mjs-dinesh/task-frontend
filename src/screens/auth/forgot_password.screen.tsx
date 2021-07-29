import LoginModel from 'components/login_model/login_model.component';
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from 'common_components/ui/field/field.ui';
import Button from 'common_components/ui/button/button.ui';
import { forgetPassword } from 'modal/user.modal';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const history = useHistory();
  const initialValue = {
    email: '',
  };
  const submit = async (values) => {
    try {
      const response: any = await forgetPassword(values);
      history.push(`/rest_password/${response.data}`);
    } catch (err) {
      toast.error(err.data ? err.data.message : err.message);
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email required'),
  });
  return (
    <div>
      <LoginModel head="Forgot Password">
        <Formik
          initialValues={initialValue}
          onSubmit={submit}
          validationSchema={validationSchema}>
          <Form>
            <div className="login_field_container">
              <InputField name="email" label="Email" type="text" />
            </div>
            <div className="login_submit_button">
              <Button value="Submit" className="button_wide btn_purple" />
            </div>
            <div className="nav_link_container">
              <div className="nav_link_wrapper">
                <div className="login_link_container">
                  Remember password ?
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

export default ForgotPassword;
