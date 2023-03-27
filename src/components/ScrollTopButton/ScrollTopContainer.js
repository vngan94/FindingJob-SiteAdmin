import classNames from "classnames/bind";
import styles from "./ScrollTopButton.module.scss";

const cx = classNames.bind(styles);

function ScrollTopContainer({ isVisible, children }) {
  return (
    <a href="#top" style={{ opacity: isVisible ? "1" : "0" }}
      className={cx("ScrollTopContainer")} aria-label="#top"
      title='Back to top'>
      {children}
    </a>
  )
}

export default ScrollTopContainer;
