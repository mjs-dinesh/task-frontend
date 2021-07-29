import _, { set } from 'lodash';
import { editUser, logout, view } from 'modal/user.modal';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import './home.screen.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER } from 'utils/types.utils';
import CustomModal from 'common_components/modal/modal.component';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from 'common_components/ui/field/field.ui';
import Button from 'common_components/ui/button/button.ui';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userReducer = useSelector((state: any) => state.user);
  const { user } = userReducer;

  const [open, setstate] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string().required('username required'),
  });

  const initialValue = {
    username: user?.username,
  };

  const GetUser = async () => {
    try {
      const response: any = await view({});
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
      console.log(response);
    } catch (err) {
      toast.error(err.data ? err.data.message : err.message);
    }
  };
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (_.isEmpty(token)) {
      history.push('/login');
    }
    GetUser();
  }, []);
  const handleUpdate = async (body) => {
    try {
      const response: any = await editUser(body);
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
      setstate(false);
    } catch (err) {
      toast.error(err.data ? err.data.message : err.message);
    }
  };
  const handleLogout = async () => {
    try {
      const response: any = await logout({});
      console.log(response);
      window.localStorage.setItem('token', '');
      window.location.href = '/login';
    } catch (err) {
      toast.error(err.data ? err.data.message : err.message);
    }
  };
  return (
    <div className="home_screen">
      <div className="home_container">
        <div className="home_wrapper">
          <div className="card_container">
            <div className="card_wrapper">
              <div className="head h4">Hi {user?.username}</div>
              <div className="user_info_container">
                <div className="user_info_wrapper">
                  <div className="user_info_label"> username : </div>
                  <div className="user_info">{user?.username}</div>
                </div>
                <div className="user_info_wrapper">
                  <div className="user_info_label"> email : </div>
                  <div className="user_info">{user?.email}</div>
                </div>
              </div>
              <div className="action_container">
                <div className="action_wrapper">
                  <div className="update_button_container">
                    <Button
                      value="Edit"
                      onClick={() => setstate(true)}
                      className="update_button"
                    />
                  </div>
                  <div className="logout_button_contauner">
                    <Button
                      value="Logout"
                      onClick={handleLogout}
                      className="logout_button"
                    />
                  </div>
                </div>
              </div>
              <CustomModal open={open} onClose={() => setstate(false)} center>
                <div className="edit_user_container">
                  <div className="edit_user_form">
                    <Formik
                      initialValues={initialValue}
                      validationSchema={validationSchema}
                      onSubmit={handleUpdate}
                      enableReinitialize>
                      <Form>
                        <div className="login_field_container">
                          <InputField
                            name="username"
                            label="username"
                            type="text"
                          />
                        </div>
                        <div className="login_submit_button">
                          <Button value="Update" className="button_wide" />
                        </div>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </CustomModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
