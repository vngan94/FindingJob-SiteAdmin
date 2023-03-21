import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../redux/filterSlice";

import { SearchIcon, LocationIcon, CloseIcon } from "../Icon";
import styles from './SearchContainer.module.scss';

const cx = classNames.bind(styles);

function SearchContainer() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const testArray = useRef(Array.from({ length: 2 }));
  const savePastJobSearch = (keyword) => {
    if (testArray.current.length >= 2) {
      testArray.current?.shift();
    }
    testArray.current.push(keyword);
    console.log("test array", testArray);
  }
  return (
    <div className={cx("Container")}>
      <div className={cx("FieldWrapper")}>
        <div className={cx("TextFieldStyled__TextFieldContainer")}>
          <input className={cx("TextFieldStyled__TextFieldInput")}
            placeholder="Tìm kiếm việc làm" spellCheck={false}
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // handleSearch();
                savePastJobSearch(userInput);
                dispatch(searchFilter(userInput));
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
            savePastJobSearch(userInput);
            dispatch(searchFilter(userInput));
          }}
        >TÌM KIẾM</button>
      </div>
    </div>
  )
}

export default SearchContainer;
