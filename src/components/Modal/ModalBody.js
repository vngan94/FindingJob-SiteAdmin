import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

function ModalBody({ children }) {
  return (
    <section className={cx("ModalBody")}>
      {children}
    </section>
  )
}

export default ModalBody;
