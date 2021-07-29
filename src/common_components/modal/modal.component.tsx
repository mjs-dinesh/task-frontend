import React from 'react';
import Modal from 'react-responsive-modal';
import './modal.component.scss';
import 'react-responsive-modal/styles.css';

const CustomModal = (props: any) => {
  const { open, onClose, children, ...restProps } = props;
  return (
    <div className="custom_modal_container">
      <Modal
        open={open}
        onClose={() => onClose(false)}
        classNames={{ modal: 'custom_modal' }}
        showCloseIcon
        {...restProps}>
        {children}
      </Modal>
    </div>
  );
};

export default CustomModal;
