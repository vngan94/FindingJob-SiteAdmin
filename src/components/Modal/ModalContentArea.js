import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function ModalContentArea({ modalRef, children }) {
  return (
    <div ref={modalRef} className={cx("ModalContentArea")}>
      {children}
    </div>
  )
}

export default ModalContentArea;
