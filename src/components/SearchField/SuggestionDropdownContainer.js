import classNames from "classnames/bind";

import styles from "./SearchField.module.scss";

const cx = classNames.bind(styles);

function SuggestionDropdownContainer({ children }) {
  return (
    <div className={cx("SuggestionDropdownContainer")}>
      {children}
    </div>
  )
}

export default SuggestionDropdownContainer;
