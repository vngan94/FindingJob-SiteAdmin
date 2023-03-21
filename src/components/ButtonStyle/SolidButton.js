import classNames from "classnames/bind";

import styles from "./ButtonStyle.module.scss";

const cx = classNames.bind(styles);

function SolidButton({ type, className, children }) {
  return (
    <button type={type}
      className={cx(className, "Button", "SolidBtn")}>
      {children}
    </button>
  )
}

export default SolidButton;
