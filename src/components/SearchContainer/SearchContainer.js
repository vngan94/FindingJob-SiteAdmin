import classNames from "classnames/bind";
import { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { usePastJobSearch } from "../../contexts/pastJobSearchContext";
import { useSearchInput } from "../../contexts/searchInputContext";
import { searchFilter } from "../../redux/filterSlice";

import { SearchIcon, LocationIcon, CloseIcon } from "../Icon";
import styles from './SearchContainer.module.scss';

const cx = classNames.bind(styles);

function SearchContainer() {
  // console.log("Render SearchContainer");
  const dispatch = useDispatch();
  const PastJobSearchContext = usePastJobSearch();
  const { pastJobSearch, updatePastJobSearch } = PastJobSearchContext;
  const SearchInputContext = useSearchInput();
  const { searchInput, setSearchInput } = SearchInputContext;
  // const [userInput, setUserInput] = useState("");
  // const testArray = useRef(Array.from({ length: 2 }));
  const testArray = [...pastJobSearch];
  const savePastJobSearch = (keyword) => {
    if (keyword) {
      if (testArray?.length >= 3) {
        testArray?.shift();
      }
      testArray?.push({
        label: "Tìm kiếm gần đây:",
        keyword: keyword
      });
      updatePastJobSearch({
        label: "Tìm kiếm gần đây:",
        keyword: keyword
      });
      if (testArray.length) {
        localStorage.setItem("pastJobSearch", JSON.stringify(testArray));
      }
    }
  }
  return (
    <div className={cx("Container")}>
      <div className={cx("FieldWrapper")}>
        <div className={cx("TextFieldStyled__TextFieldContainer")}>
          <input className={cx("TextFieldStyled__TextFieldInput")}
            placeholder="Tìm kiếm việc làm" spellCheck={false}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // handleSearch();
                savePastJobSearch(searchInput);
                dispatch(searchFilter(searchInput));
              }
            }}
          />
          <div className={cx("TextFieldStyled__StartIconContainer")}>
            <SearchIcon className={cx("IconStyle__VerticalCenteredSvg")} />
          </div>
        </div>
      </div>
      <div className={cx("FieldWrapper")}>
        <div className={cx("TextFieldStyled__TextFieldContainer")}>
          <input className={cx("TextFieldStyled__TextFieldInput")}
            placeholder="Thêm quốc gia hoặc thành phố"
            defaultValue="Vietnam"
          />
          <div className={cx("TextFieldStyled__StartIconContainer")}>
            <LocationIcon className={cx("IconStyle__VerticalCenteredSvg")} />
          </div>
          <div className={cx("TextFieldStyled__IconContainer")}>
            <CloseIcon className={cx("IconStyle__VerticalCenteredSvg")} />
          </div>
        </div>
      </div>
      <div className={cx("ButtonStyle__SolidBtnContainer")}>
        <button type="button"
          className={cx("ButtonStyle__Button", "ButtonStyle__SolidBtn")}
          onClick={() => {
            // handleSearch();
            savePastJobSearch(searchInput);
            dispatch(searchFilter(searchInput));
          }}
        >TÌM KIẾM</button>
      </div>
    </div>
  )
}

export default SearchContainer;
