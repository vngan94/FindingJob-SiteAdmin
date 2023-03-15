import classNames from "classnames/bind";

import styles from "./SignUp.module.scss";
import { useDocumentTitle } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function SignUp() {
  useDocumentTitle("Sign-up");
  const handleSubmit = (e) => { 

  }
  return (
    <section className={cx("global__Background")}>
      <div className={cx("global__TitleWrapper")}>
        <h1 className={cx("TitleStyle__Title", "SignUpPage__Title")}>
          Cùng tạo hồ sơ <br />
          <span className={cx("SignUpPage__Psychedelic")}>
            Glints
          </span> của bạn.
        </h1>
      </div>
      <div className={cx("signupWithEmail__SignUpWrapper",
        "SignUpEmailPage__SignUpWrapperExtend")}>
        <div className={cx("signupWithEmail__SignUpFormWrapper")}>
          <div>
            <form onSubmit={handleSubmit}>
              <section className={cx("signupWithEmail__SignUpContainer")}>
                <div className={cx("signupWithEmail__SignUpTwoCols")}>
                  <div className={cx("signupWithEmail__FormWrapper")}>
                    <div className={cx("InputComponent__InputWrapper")}>
                      <span className={cx("InputComponent__InputName")}>
                        Fullname
                      </span>
                      <div className={cx("InputComponent__InputTypeWrapper")}>
                        <input type="text" placeholder="placeholder" />
                        <div className={cx("InputComponent__ValidationIconContainer")}>
                          <FontAwesomeIcon icon={faExclamation}
                            className={cx("IconStyle__VerticalCenteredSvg")} />
                        </div>
                      </div>
                    </div>
                    <span className={cx("InputComponent__ErrorMessage")}>
                      Error message
                    </span>
                  </div>
                  <div className={cx("signupWithEmail__FormWrapper")}>
                    <div className={cx("InputComponent__InputWrapper")}>
                      <span className={cx("InputComponent__InputName")}>
                        Number Phone
                      </span>
                      <div className={cx("InputComponent__InputTypeWrapper")}>
                        <input type="text" placeholder="placeholder" />
                        <div className={cx("InputComponent__ValidationIconContainer")}>
                          <FontAwesomeIcon icon={faExclamation}
                            className={cx("IconStyle__VerticalCenteredSvg")} />
                        </div>
                      </div>
                    </div>
                    <span className={cx("InputComponent__ErrorMessage")}>
                      Error message
                    </span>
                  </div>
                </div>
                <div className={cx("signupWithEmail__SignUpTwoCols")}>
                  <div className={cx("signupWithEmail__FormWrapper")}>
                    <div className={cx("InputComponent__InputWrapper")}>
                      <span className={cx("InputComponent__InputName")}>
                        Username
                      </span>
                      <div className={cx("InputComponent__InputTypeWrapper")}>
                        <input type="text" placeholder="placeholder" />
                        <div className={cx("InputComponent__ValidationIconContainer")}>
                          <FontAwesomeIcon icon={faExclamation}
                            className={cx("IconStyle__VerticalCenteredSvg")} />
                        </div>
                      </div>
                    </div>
                    <span className={cx("InputComponent__ErrorMessage")}>
                      Error message
                    </span>
                  </div>
                  <div className={cx("signupWithEmail__FormWrapper")}>
                    <div className={cx("InputComponent__InputWrapper")}>
                      <span className={cx("InputComponent__InputName")}>
                        Password
                      </span>
                      <div className={cx("InputComponent__InputTypeWrapper")}>
                        <input type="text" placeholder="placeholder" />
                        <div className={cx("InputComponent__ValidationIconContainer")}>
                          <FontAwesomeIcon icon={faExclamation}
                            className={cx("IconStyle__VerticalCenteredSvg")} />
                        </div>
                      </div>
                    </div>
                    <span className={cx("InputComponent__ErrorMessage")}>
                      Error message
                    </span>
                  </div>
                </div>
                <div className={cx("signupWithEmail__SignUpTwoCols")}>
                  {/* additional here */}
                </div>
              </section>
              <div className={cx("alerts__ErrorMessage")}>
                <div className={cx("alerts__ErrorMessageHeader")}>
                  Tài khoản này đã tồn tại!
                  <p>
                    {/* Link login page or forgot password */}
                  </p>
                </div>
              </div>
              <div className={cx("signupWithEmail__SubmitWrapper")}>
                <div className={cx("Checkbox__CheckboxWrapper")}>
                  <input type="checkbox" placeholder="placeholder" defaultChecked
                    className={cx("Checkbox__Input")} />
                  <label htmlFor=""
                    className="Checkbox__Label">
                    <span>
                      Cập nhật cho tôi thông tin về cơ hội nghề nghiệp mới nhất
                    </span>
                  </label>
                </div>
                <div className={cx("buttons__OverlappingBtn",
                  "signupWithEmail__OverlappingBtnExt")}>
                  <button type="submit"
                    className={cx("signupWithEmail__BtnSubmit")}>
                    <span>Đăng ký</span>
                  </button>
                </div>
                <span>
                  Bạn là nhà tuyển dụng? Hãy nhấn vào &nbsp;
                  <a href="https://employers.glints.vn/" target="_blank">
                    <span>đây</span>
                  </a>
                </span>
              </div>
            </form>
          </div>
          <div className={cx("signupWithEmail__LoginWithSocialMedia")}>
            {/* terms of using */}
          </div>
          <div className={cx("signupWithEmail__AlreadyHaveAccount")}>
            <label>Bạn đã có tài khoản Glints? </label>
            <a href="/vn/login"
              className={cx("buttons__DefaultBtn",
                "buttons__GhostBtn",
                "signupWithEmail__GhostBtnExt")}>
              <span>Đăng nhập</span>
            </a>
          </div>
        </div>
      </div>
      <div className={cx("OnboardingFooter__StyledFooter")}>
        {/* Footer of form here */}
      </div>
    </section>
  )
}

export default SignUp;
