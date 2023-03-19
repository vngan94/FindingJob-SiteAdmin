import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function ModalDialog({ children }) {
  return (
    <div className={cx("ModalDialog")}>
      {children}
    </div>
  )
}

export default ModalDialog;
