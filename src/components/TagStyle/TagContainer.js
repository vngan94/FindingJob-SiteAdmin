import classNames from "classnames/bind";

import styles from "./TagStyle.module.scss";

const cx = classNames.bind(styles);

function TagContainer({ isClickable = false, className, tabIndex = 0, children }) {
  return (
    <div tabIndex={tabIndex}
      className={cx(className, "TagStyle__TagContainer")}>
      {children}
    </div>
  )
}

export default TagContainer;
