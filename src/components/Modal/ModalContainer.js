import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function ModalContainer({ modalRef, handleShowModal, className, children }) {
  return (
    <div className={cx("ModalContainer", { [className]: className })}
      onClick={(e) => {
        console.log(modalRef.current);
        if (!modalRef.current?.contains(e.target)) {
          handleShowModal();
        }
      }}>
      {children}
    </div>
  )
}

export default ModalContainer;
