import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./Error.module.scss";
import GlintContainer from "../GlintContainer";

const cx = classNames.bind(styles);

function Error() {
  return <GlintContainer>
    <div className={cx("Container")}>
      <div className={cx("Content")}>
        <FontAwesomeIcon className={cx("Icon")} icon={faTriangleExclamation} />
        <h1 className={cx("Code")}>404</h1>
        <h1 className={cx("TitleStyles__Title", "Title")}>Không Tìm Thấy Trang</h1>
        <p className={cx("ParagraphStyle__Paragraph", "Description")}>(Không thể tìm thấy trang bạn đã yêu cầu, hoặc trang này đã được loại bỏ)</p>
        <div className={cx("ButtonStyle__SolidBtnContainer", "Button")}>
          <a href="/" className={cx("ButtonStyle__Button", "ButtonStyle__SolidBtn")}>
            Quay Lại Trang Chủ
          </a>
        </div>
      </div>
    </div>
  </GlintContainer>
}

export default Error;
