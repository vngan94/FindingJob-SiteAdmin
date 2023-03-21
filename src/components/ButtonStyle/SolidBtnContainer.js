import classNames from "classnames/bind";

import styles from "./ButtonStyle.module.scss";

const cx = classNames.bind(styles);

function SolidBtnContainer({ className, children }) {
  return (
    <div className={cx(className, "SolidBtnContainer")}>
      {children}
    </div>
  )
}

export default SolidBtnContainer;
