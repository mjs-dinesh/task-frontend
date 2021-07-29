import { instance } from 'helper/axios.helper';

export const signup = (body) => {
  const promise = new Promise((resolve, reject) => {
    instance()
      .post('/user/user_signup', body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response);
        } else {
          reject(err);
        }
      });
  });
  return promise;
};

export const login = (body) => {
  const promise = new Promise((resolve, reject) => {
    instance()
      .post('/user/user_login', body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response);
        } else {
          reject(err);
        }
      });
  });
  return promise;
};

export const forgetPassword = (body) => {
  const promise = new Promise((resolve, reject) => {
    instance()
      .post('/user/forget_password', body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response);
        } else {
          reject(err);
        }
      });
  });
  return promise;
};

export const resetPassword = (body) => {
  const promise = new Promise((resolve, reject) => {
    instance()
      .post('/user/reset_password', body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response);
        } else {
          reject(err);
        }
      });
  });
  return promise;
};

export const editUser = (body) => {
  const promise = new Promise((resolve, reject) => {
    instance()
      .post('/user/edit_user', body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response);
        } else {
          reject(err);
        }
      });
  });
  return promise;
};

export const view = (body) => {
  const promise = new Promise((resolve, reject) => {
    instance()
      .post('/user/view', body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response);
        } else {
          reject(err);
        }
      });
  });
  return promise;
};

export const logout = (body) => {
  const promise = new Promise((resolve, reject) => {
    instance()
      .post('/user/logout', body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response);
        } else {
          reject(err);
        }
      });
  });
  return promise;
};
