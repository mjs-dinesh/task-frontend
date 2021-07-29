import React from 'react';
import './button.ui.scss';
import { TouchBallLoading } from 'react-loadingg';

interface ButtonProps {
  value: string;
  onClick?: any;
  className?: string;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { value, onClick, className, loading } = props;
  return (
    <div className="button_container">
      <button className={`${className} button`} type="submit" onClick={onClick}>
        {loading ? <TouchBallLoading color="white" size="small" /> : value}
      </button>
    </div>
  );
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  loading: false,
};

export default Button;
