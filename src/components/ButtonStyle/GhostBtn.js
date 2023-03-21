import classNames from "classnames/bind";

import styles from "./ButtonStyle.module.scss";

const cx = classNames.bind(styles);

function GhostBtn({ type, className, children }) {
  return (
    <button type={type}
      className={cx(className, "Button", "GhostBtn")} >
      {children}
    </button>
  )
}

export default GhostBtn;
