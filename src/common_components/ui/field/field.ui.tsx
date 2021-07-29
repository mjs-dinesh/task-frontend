import { ErrorMessage, Field } from 'formik';
import React from 'react';
import './field.ui.scss';
import ValidationError from '../error/error.ui';

interface InputProps {
  className?: string;
  label?: string;
  type: string;
  placeholder?: string;
  name: string;
}

const InputField = (props: InputProps) => {
  const { label, type, name, className, placeholder } = props;
  return (
    <div className="input_container">
      <div className="label_container h5">{label}</div>
      {type === 'text' && (
        <div className="field_wrap">
          <Field
            name={name}
            type={type}
            className={`${className} input h5`}
            autocomplete="off"
            placeholder={placeholder}
          />
          <ErrorMessage name={name} component={ValidationError} />
        </div>
      )}
      {type === 'password' && (
        <div className="field_wrap">
          <Field
            name={name}
            type={type}
            className={`${className} input h5`}
            autocomplete="off"
            placeholder={placeholder}
          />
          <ErrorMessage name={name} component={ValidationError} />
        </div>
      )}
      {type === 'number' && (
        <div className="field_wrap">
          <Field
            name={name}
            type={type}
            className={`${className} input h5`}
            autocomplete="off"
            placeholder={placeholder}
          />
          <ErrorMessage name={name} component={ValidationError} />
        </div>
      )}
      {type === 'textarea' && (
        <div className="field_wrap">
          <Field
            as="textarea"
            name={name}
            type="textarea"
            className={`${className} input input_textarea h5`}
            placeholder={placeholder}
          />
          <ErrorMessage name={name} component={ValidationError} />
        </div>
      )}
    </div>
  );
};

InputField.defaultProps = {
  className: '',
  label: '',
  placeholder: '',
};

export default InputField;
