import classNames from "classnames/bind";

import styles from "./InfiniteScroll.module.scss";

const cx = classNames.bind(styles);

function InfiniteScrollContainer({ isVisible = false, width = "2rem", height = "2rem", children }) {
  // alert("test");
  return (
    <div className={cx("InfiniteScrollContainer")}>
      <div
        style={{ width: width, height: height }}
      ></div>
      <span>{children}</span>
    </div>
  )
}

export default InfiniteScrollContainer;
