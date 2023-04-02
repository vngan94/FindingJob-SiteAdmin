import classNames from "classnames/bind";

import {
  ContentSection,
  ContentSectionTitle,
  ContentSectionMain
} from "../../components/Shared";

import styles from "./ChangePasswordPage.module.scss";
import { GhostBtn, GhostBtnContainer } from "../../components/ButtonStyle";
import { InputComponent__ErrorMessage, InputComponent__InputWrapper } from "../../components/InputComponent";
import { TextFieldContainer, TextFieldInput, TextFieldLabel } from "../../components/TextFieldStyle";
import { Paragraph } from "../../components/ParagraphStyle";

const cx = classNames.bind(styles);

function ChangePasswordPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <ContentSection>
        <ContentSectionTitle label={"Thay đổi mật khẩu"} />
        <ContentSectionMain>
          <form onSubmit={handleSubmit}>
            <div className={cx("ContactInfo__Content")}>
              <div className={cx("UpdatePassword__Half")}>
                <aside className={cx("Label__Content")}>
                  <label className={cx("Lable__Title")}>
                    Mật khẩu cũ
                  </label>
                </aside>
                <div className={cx("Input__Container")}>
                  <TextFieldContainer className={"aries-textfield"}>
                    <TextFieldInput name="password" ariaLabel="Mật khẩu cũ"
                      type={"password"}
                      // value={verifyCode}
                      // ref={verifyCodeRef}
                      // onChange={e => {
                      //   setVerifyCode(e.target.value);
                      //   setVerifyCodeError("");
                      // }}
                      placeholder={"Mật khẩu cũ"} />
                    <TextFieldLabel>
                      Mật khẩu cũ
                    </TextFieldLabel>
                  </TextFieldContainer>
                  <Paragraph color="#EC272B"
                    className={cx("aries-typography-paragraph", "FieldError")}>
                    {/* {verifyCodeError} */}
                  </Paragraph>
                </div>
              </div>
              <div className={cx("UpdatePassword__Half")}>
                <aside className={cx("Label__Content")}>
                  <label className={cx("Lable__Title")}>
                    Mật khẩu mới
                  </label>
                </aside>
                <div className={cx("Input__Container")}>
                  <TextFieldContainer className={"aries-textfield"}>
                    <TextFieldInput name="password" ariaLabel="Mật khẩu mới"
                      type={"password"}
                      // value={verifyCode}
                      // ref={verifyCodeRef}
                      // onChange={e => {
                      //   setVerifyCode(e.target.value);
                      //   setVerifyCodeError("");
                      // }}
                      placeholder={"Mật khẩu mới"} />
                    <TextFieldLabel>
                      Mật khẩu mới
                    </TextFieldLabel>
                  </TextFieldContainer>
                  <Paragraph color="#EC272B"
                    className={cx("aries-typography-paragraph", "FieldError")}>
                    {/* {verifyCodeError} */}
                  </Paragraph>
                </div>
              </div>
              <div className={cx("UpdatePassword__Half")}>
                <aside className={cx("Label__Content")}>
                  <label className={cx("Lable__Title")}>
                    Xác nhận mật khẩu mới
                  </label>
                </aside>
                <div className={cx("Input__Container")}>
                  <TextFieldContainer className={"aries-textfield"}>
                    <TextFieldInput name="password" ariaLabel="Xác nhận mật khẩu mới"
                      type={"password"}
                      // value={verifyCode}
                      // ref={verifyCodeRef}
                      // onChange={e => {
                      //   setVerifyCode(e.target.value);
                      //   setVerifyCodeError("");
                      // }}
                      placeholder={"Xác nhận mật khẩu mới"} />
                    <TextFieldLabel>
                      Xác nhận mật khẩu mới
                    </TextFieldLabel>
                  </TextFieldContainer>
                  <Paragraph color="#EC272B"
                    className={cx("aries-typography-paragraph", "FieldError")}>
                    {/* {verifyCodeError} */}
                  </Paragraph>
                </div>
              </div>
              <div className={cx("UpdatePassword__Half")}>
                <aside className={cx("Label__Content")}>
                  <label className={cx("Lable__Title")}></label>
                </aside>
                <div className={cx("Input__Container")}>
                  {/* <button>Đổi mật khẩu</button> */}
                  <GhostBtnContainer>
                    <GhostBtn type={"submit"}>
                      Đổi mật khẩu
                    </GhostBtn>
                  </GhostBtnContainer>
                </div>
              </div>
            </div>
          </form>
        </ContentSectionMain>
      </ContentSection>
    </>
  )
}

export default ChangePasswordPage;
