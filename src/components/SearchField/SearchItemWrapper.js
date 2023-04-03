import classNames from "classnames/bind";

import styles from "./SearchField.module.scss";
import { SearchIcon } from "../Icon";

const cx = classNames.bind(styles);

function SearchItemWrapper({ keyword }) {
  return (
    <li className={cx("SearchItemWrapper")}>
      <SearchIcon />
      <div className={cx("SuggestionItem")}>
        {keyword}
      </div>
    </li>
  )
}

export default SearchItemWrapper;
