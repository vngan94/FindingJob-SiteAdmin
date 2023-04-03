import classNames from "classnames/bind";

import styles from "./SearchField.module.scss";

const cx = classNames.bind(styles);

function SuggestionDropdown({ children }) {
  return (
    <ul className={cx("SuggestionDropdown")}>
      {children}
    </ul>
  )
}

export default SuggestionDropdown;
