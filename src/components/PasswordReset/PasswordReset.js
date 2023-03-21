import classNames from "classnames/bind";

import styles from "./PasswordReset.module.scss";
import { TextFieldContainer, TextFieldInput, TextFieldLabel } from "../TextFieldStyle";
import Paragraph from "../ParagraphStyle/Paragraph";
import {
  GhostBtn,
  GhostBtnContainer,
  SolidBtnContainer,
  SolidButton
} from "../ButtonStyle";

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
          <form noValidate onSubmit={handleSubmit}>
            <TextFieldContainer className={"aries-textfield"}>
              <TextFieldInput type="email" name="email" ariaLabel="Địa chỉ email"
                placeholder={"Địa chỉ email"} />
              <TextFieldLabel>
                Địa chỉ email
              </TextFieldLabel>
            </TextFieldContainer>
            <Paragraph color="#EC272B"
              className={cx("aries-typography-paragraph", "FieldError")}>
              {"Địa chỉ e-mail là bắt buộc"}
            </Paragraph>
            <Paragraph color="#000000"
              className={cx("aries-typography-paragraph", "FieldDescription")} >
              Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn.
            </Paragraph>
            <SolidBtnContainer className={cx("aries-solid-btn", "SubmitBtn")}>
              <SolidButton type="submit"
                className={cx("solid-btn-content")}>
                Gửi email
              </SolidButton>
            </SolidBtnContainer>
            <GhostBtnContainer className={cx("aries-ghostbtn", "SubmitBtn")}>
              <GhostBtn type="button"
                className={cx("ghostbtn-content")}>
                Back
              </GhostBtn>
            </GhostBtnContainer>
          </form>
        </div>
      </section>
    </div>
  )
}

export default PasswordReset;
