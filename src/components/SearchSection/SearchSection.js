import classNames from "classnames/bind";

import styles from './SearchSection.module.scss';
import { SearchIcon, LocationIcon, CloseIcon } from "../Icon";

const cx = classNames.bind(styles);

function SearchSection() {
    return (
        <div className={cx("Search")}>
            <h5 className={cx("SectionHeader")}>Khám phá <b>5000+</b> việc làm mới hàng tháng!</h5>
            <div className={cx("SectionSearchContainer")}>
                <div></div>
                <div>
                    <div className={cx("Container")}>
                        <div className={cx("FieldWrapper")}>
                            <div className={cx("TextFieldContainer")}>
                                <input className={cx("TextFieldInput")}
                                    placeholder="Tìm kiếm việc làm"
                                />
                                <div className={cx("SearchIcon")}><SearchIcon /></div>
                            </div>
                        </div>
                        <div className={cx("FieldWrapper")}>
                            <div className={cx("TextFieldContainer")}>
                                <input className={cx("TextFieldInput")}
                                    placeholder="Thêm quốc gia hoặc thành phố"
                                    defaultValue="Vietnam"
                                />
                                <div className={cx("LocationIcon")}><LocationIcon /></div>
                                <div className={cx("CloseIcon")}><CloseIcon /></div>
                            </div>
                        </div>
                        <div className={cx("SearchButton")}>
                            <button type="button"
                                className={cx("btn")}
                            >TÌM KIẾM</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchSection;
