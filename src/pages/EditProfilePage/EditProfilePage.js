import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./EditProfilePage.module.scss";
import {
  ContentSection,
  ContentSectionMain,
  ContentSectionTitle
} from "../../components/Shared";
import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel
} from "../../components/TextFieldStyle";
import { Paragraph } from "../../components/ParagraphStyle";
import { selectAccessToken, selectRefreshToken, selectUser } from "../../redux/selector";
import { GhostBtn, GhostBtnContainer } from "../../components/ButtonStyle";
import { ProfileInfo, ProfileName, ProfilePictureContainer, ProfilePictureContent } from "../../components/UserProfile";

const cx = classNames.bind(styles);

function EditProfilePage() {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const refressToken = useSelector(selectRefreshToken);
  const currentUser = useSelector(selectUser);
  const uploadRef = useRef();
  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    newPwError: "",
    confirmPwError: ""
  });
  const nameRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const handleUploadFile = () => {

  }
  const handleSubmit = (e) => {
    e.prevetDefault();
  }
  return (
    <ContentSection>
      <ContentSectionTitle label={"Chỉnh sửa thông tin"} />
      <ContentSectionMain>
        <form onSubmit={handleSubmit}>
          <div className={cx("ContactInfo__Content")}>
            <div className={cx("UpdatePassword__Half")}>
              <aside className={cx("Label__Content")}>
                <ProfilePictureContainer>
                  <ProfilePictureContent>
                    <img alt={currentUser.username}
                      src={currentUser.avatar} srcSet="/static/images/defaultUser.webp" />
                  </ProfilePictureContent>
                </ProfilePictureContainer>
              </aside>
              <div className={cx("Input__Container")}>
                <ProfileInfo>
                  <ProfileName>
                    {currentUser.username}
                  </ProfileName>
                </ProfileInfo>
                <div className={cx("Uploader")}>
                  <span
                    onClick={handleUploadFile} >
                    Thay đổi ảnh đại diện
                  </span>
                </div>
                <input ref={uploadRef} style={{ display: "none" }} />
              </div>
            </div>
            <div className={cx("UpdatePassword__Half")}>
              <aside className={cx("Label__Content")}>
                <label className={cx("Lable__Title")}>
                  Tên
                </label>
              </aside>
              <div className={cx("Input__Container")}>
                <TextFieldContainer className={"aries-textfield"}>
                  <TextFieldInput name="password" ariaLabel="Tên"
                    type={"password"}
                    isRequired
                    // value={verifyCode}
                    ref={nameRef}
                    onChange={() => {
                      setErrorMessage({
                        ...errorMessage,
                        nameError: ""
                      })
                    }}
                    placeholder={"Tên"} />
                  <TextFieldLabel>
                    Tên
                  </TextFieldLabel>
                </TextFieldContainer>
                <Paragraph color="#EC272B"
                  className={cx("aries-typography-paragraph", "FieldError")}>
                  {errorMessage.nameError}
                </Paragraph>
              </div>
            </div>

            <div className={cx("UpdatePassword__Half")}>
              <aside className={cx("Label__Content")}>
                <label className={cx("Lable__Title")}>
                  Email
                </label>
              </aside>
              <div className={cx("Input__Container")}>
                <TextFieldContainer className={"aries-textfield"}>
                  <TextFieldInput name="password" ariaLabel="Email"
                    type={"password"}
                    isRequired
                    // value={verifyCode}
                    ref={nameRef}
                    onChange={() => {
                      setErrorMessage({
                        ...errorMessage,
                        nameError: ""
                      })
                    }}
                    placeholder={"Email"} />
                  <TextFieldLabel>
                    Email
                  </TextFieldLabel>
                </TextFieldContainer>
                <Paragraph color="#EC272B"
                  className={cx("aries-typography-paragraph", "FieldError")}>
                  {errorMessage.nameError}
                </Paragraph>
              </div>
            </div>

            <div className={cx("UpdatePassword__Half")}>
              <aside className={cx("Label__Content")}>
                <label className={cx("Lable__Title")}>
                  Số điện thoại
                </label>
              </aside>
              <div className={cx("Input__Container")}>
                <TextFieldContainer className={"aries-textfield"}>
                  <TextFieldInput name="password" ariaLabel="Số điện thoại"
                    type={"password"}
                    isRequired
                    // value={verifyCode}
                    ref={nameRef}
                    onChange={() => {
                      setErrorMessage({
                        ...errorMessage,
                        nameError: ""
                      })
                    }}
                    placeholder={"Số điện thoại"} />
                  <TextFieldLabel>
                    Số điện thoại
                  </TextFieldLabel>
                </TextFieldContainer>
                <Paragraph color="#EC272B"
                  className={cx("aries-typography-paragraph", "FieldError")}>
                  {errorMessage.nameError}
                </Paragraph>
              </div>
            </div>

            <div className={cx("UpdatePassword__Half")}>
              <aside className={cx("Label__Content")}>
                <label className={cx("Lable__Title")}></label>
              </aside>
              <div className={cx("Input__Container")}>
                {/* <button>Lưu</button> */}
                <GhostBtnContainer>
                  <GhostBtn type={"submit"}>
                    Lưu
                  </GhostBtn>
                </GhostBtnContainer>
              </div>
            </div>
          </div>
        </form>
      </ContentSectionMain>
    </ContentSection>
  )
}

export default EditProfilePage;
