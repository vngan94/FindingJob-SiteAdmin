import classNames from "classnames/bind";
import { useLog } from "../../hooks";
import styles from "./ScrollTopButton.module.scss";

const cx = classNames.bind(styles);

function ScrollTopContainer({ isVisible, children }) {
  useLog("Render ScrollTopContainer", 0);
  return (
    <a href="#top" style={{ opacity: isVisible ? "1" : "0" }}
      className={cx("ScrollTopContainer")} aria-label="#top"
      title='Back to top'>
      {children}
    </a>
  )
}

export default ScrollTopContainer;
