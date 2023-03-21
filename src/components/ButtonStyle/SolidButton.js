import classNames from "classnames/bind";

import styles from "./ButtonStyle.module.scss";

const cx = classNames.bind(styles);

function SolidButton({ type, disable = false, className, children }) {
  return (
    <button type={type}
      disabled={disable}
      className={cx(className, "Button", "SolidBtn")}>
      {children}
    </button>
  )
}

export default SolidButton;
