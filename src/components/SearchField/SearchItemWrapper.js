import classNames from "classnames/bind";

import styles from "./SearchField.module.scss";
import { SearchIcon } from "../Icon";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../redux/filterSlice";

const cx = classNames.bind(styles);

function SearchItemWrapper({ keyword, onClick }) {
  const dispatch = useDispatch();

  return (
    <li className={cx("SearchItemWrapper")}
      onClick={() => {
        onClick(false);
        dispatch(updateSearch(keyword));
      }} >
      <SearchIcon />
      <div className={cx("SuggestionItem")}>
        {keyword}
      </div>
    </li>
  )
}

export default SearchItemWrapper;
