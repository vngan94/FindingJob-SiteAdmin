import classNames from "classnames/bind";

import styles from "./TitleStyle.module.scss";

const cx = classNames.bind(styles);

function Title({ As = "h1", color = "#000", className, children }) {
  return (
    <As style={{
      color: color
    }}
      className={cx(className, "Title")}>
      {children}
    </As>
  )
}

export default Title;
