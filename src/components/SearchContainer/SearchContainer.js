import classNames from "classnames/bind";
import { useState } from "react";

import { SearchIcon, LocationIcon, CloseIcon } from "../Icon";
import styles from './SearchContainer.module.scss';

const cx = classNames.bind(styles);

function SearchContainer({ setSearchInput }) {
  const [userInput, setUserInput] = useState("");
  const handleSearch = () => {
    setSearchInput(userInput);
  }
  return (
    <div className={cx("Container")}>
      <div className={cx("FieldWrapper")}>
        <div className={cx("TextFieldStyled__TextFieldContainer")}>
          <input className={cx("TextFieldStyled__TextFieldInput")}
            placeholder="Tìm kiếm việc làm"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
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
          onClick={handleSearch}
        >TÌM KIẾM</button>
      </div>
    </div>
  )
}

export default SearchContainer;
