import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import LoginForm from "./LoginForm/LoginForm";

import styles from "./LoginModal.module.scss";

const cx = classNames.bind(styles);

function LoginModal({ handleShowLogin }) {
  return (
    <div className={cx("LoginModalContainer")}>
      <div className={cx("ModalContainer")}>
        <div className={cx("ModalDialog")}>
          <div className={cx("ModalContentArea")}>
            <header className={cx("ModalHeader")}>
              <h3>
                <p className={cx("modal-title", "Large-Text")}><span>Login</span></p>
              </h3>
              <button onClick={handleShowLogin} className={cx("UnstyleButton")} type="button">
                <span className={cx("VerticalCenteredSvg")}> {<FontAwesomeIcon icon={faXmark} />} </span>
              </button>
            </header>
            <section className={cx("ModalBody")}>
              <div className={cx("Large-Text")}
                style={{ padding: " 20px 20px 0px" }} >
                <span>Đăng nhập Glints để tiếp tục</span>
              </div>
              <div>
                {/* Login Form */}
                <LoginForm handleShowLogin={handleShowLogin} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal;
