import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function ModalContainer({ modalRef, handleShowLogin, children }) {
  return (
    <div className={cx("ModalContainer")}
      onClick={(e) => {
        console.log(modalRef.current);
        if (!modalRef.current?.contains(e.target)) {
          handleShowLogin();
        }
      }}>
      {children}
    </div>
  )
}

export default ModalContainer;
