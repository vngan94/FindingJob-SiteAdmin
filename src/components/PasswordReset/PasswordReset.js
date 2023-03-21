import classNames from "classnames/bind";

import styles from "./PasswordReset.module.scss";
import { TextFieldContainer, TextFieldInput, TextFieldLabel } from "../TextFieldStyle";
import Paragraph from "../ParagraphStyle/Paragraph";

const cx = classNames.bind(styles);

function PasswordReset() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className={cx("GlintContainer")}>
      <section className={cx("Section")}>
        <h3 className={cx("TitleStyles__Title", "aries-typography-title", "Title")} color="#000000">
          Bạn quên mật khẩu?
        </h3>
        <div className={cx("FormContainer")}>
          <form novalidate="" onSubmit={handleSubmit}>
            <TextFieldContainer className={"aries-textfield"}>
              <TextFieldInput type="email" name="email" ariaLabel="Địa chỉ email"
                placeholder={"Địa chỉ email"} />
              <TextFieldLabel>
                Địa chỉ email
              </TextFieldLabel>
            </TextFieldContainer>
            <p class="ParagraphStyles__Paragraph aries-typography-paragraph" color="#EC272B">
              Địa chỉ e-mail là bắt buộc
            </p>
            <Paragraph color="#EC272B"
              className={cx("aries-typography-paragraph", "FieldError")}>
              lorem
            </Paragraph>
            <p className={cx("ParagraphStyles__Paragraph aries-typography-paragraph FieldDescription")} color="#000000">
              Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn.
            </p>
            <div className={cx("ButtonStyle__SolidBtnContainer aries-solid-btn SubmitBtn")}>
              <button className={cx("ButtonStyle__Button ButtonStyle__SolidBtn solid-btn-content")} type="submit">
                Gửi email
              </button>
            </div>
            <div className={cx("ButtonStyle__GhostBtnContainer aries-ghostbtn SubmitBtn")}>
              <button className={cx("ButtonStyle__Button ButtonStyle__GhostBtn ghostbtn-content")} type="button">
                Back
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default PasswordReset;
