import React from 'react';
import './login_model.component.scss';

interface loginModelProps {
  head: any;
  children: any;
}

const LoginModel = (props: loginModelProps) => {
  const { head, children } = props;
  return (
    <div className="login_screen">
      <div className="login_container">
        <div className="login_wrapper">
          <div className="login_screen_head_container">
            <div className="login_screen_head_wrapper">
              <div className="login_head h1">{head}</div>
            </div>
          </div>
          <div className="login_form_container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;
