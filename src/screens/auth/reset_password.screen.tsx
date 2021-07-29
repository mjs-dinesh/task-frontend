import LoginModel from 'components/login_model/login_model.component';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import './forgot_password.screen.scss';
import { toast } from 'react-toastify';
import { resetPassword } from 'modal/user.modal';
import Button from 'common_components/ui/button/button.ui';
import InputField from 'common_components/ui/field/field.ui';
import { useParams } from 'react-router-dom';

const ResetPassword = (props: any) => {
  const params: any = useParams();
  const initialValue = {
    password: '',
    confirmpassword: '',
  };
  const submit = async (values) => {
    try {
      const body = {
        password: values.password,
        reset_password_hash: params.id,
      };
      await resetPassword(body);
      window.location.href = '/login';
    } catch (err) {
      toast.error(err.data ? err.data.message : err.message);
    }
  };
  const validationSchema = Yup.object({
    password: Yup.string().required('New password required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password required'),
  });
  return (
    <div>
      <LoginModel head="Reset Password">
        <Formik
          initialValues={initialValue}
          onSubmit={submit}
          validationSchema={validationSchema}>
          <Form>
            <div className="forgot_password_form_field">
              <InputField
                name="password"
                label="New Password"
                type="password"
              />
            </div>
            <div className="forgot_password_form_field">
              <InputField
                name="confirmpassword"
                label="Confirm Password"
                type="password"
              />
            </div>
            <div className="forgot_password_form_field">
              <Button value="Submit" className="btn_wide btn_purple" />
            </div>
          </Form>
        </Formik>
      </LoginModel>
    </div>
  );
};

export default ResetPassword;
