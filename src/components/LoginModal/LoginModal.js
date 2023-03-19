import classNames from "classnames/bind";
import { useRef } from "react";
import ModalBody from "../Modal/ModalBody";
import ModalContainer from "../Modal/ModalContainer";
import ModalContentArea from "../Modal/ModalContentArea";
import ModalDialog from "../Modal/ModalDialog";
import ModalHeader from "../Modal/ModalHeader";
import LoginForm from "./LoginForm/LoginForm";

import styles from "./LoginModal.module.scss";

const cx = classNames.bind(styles);

function LoginModal({ handleShowLogin }) {
  const modalRef = useRef();

  return (
    <div className={cx("LoginModalContainer")}>
      <ModalContainer handleShowModal={handleShowLogin} modalRef={modalRef}>
        <ModalDialog>
          <ModalContentArea modalRef={modalRef}>
            <ModalHeader header="Login" handleShowModal={handleShowLogin} />
            <ModalBody>
              <div className={cx("Large-Text")}
                style={{ padding: " 20px 20px 0px" }} >
                <span>Đăng nhập Glints để tiếp tục</span>
              </div>
              <div>
                <LoginForm handleShowLogin={handleShowLogin} />
              </div>
            </ModalBody>
          </ModalContentArea>
        </ModalDialog>
      </ModalContainer>
    </div>
  )
}

export default LoginModal;
