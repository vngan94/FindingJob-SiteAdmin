import classNames from "classnames/bind";

import { SearchIcon, LocationIcon, CloseIcon } from "../Icon";
import styles from './SearchContainer.module.scss';

const cx = classNames.bind(styles);

function SearchContainer() {
  return (
    <div className={cx("Container")}>
      <div className={cx("FieldWrapper")}>
        <div className={cx("TextFieldStyled__TextFieldContainer")}>
          <input className={cx("TextFieldStyled__TextFieldInput")}
            placeholder="Tìm kiếm việc làm"
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
        >TÌM KIẾM</button>
      </div>
    </div>
  )
}

export default SearchContainer;
