import { faFileLines, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef, useState } from "react";

import {
  ModalContainer,
  ModalDialog,
  ModalContentArea,
  ModalHeader,
  ModalBody
} from "../Modal";
import styles from "./PsychFlatModal.module.scss";

const cx = classNames.bind(styles);

function PsychFlatModal({ handleShowPsychFlat }) {
  // should pass from higher level
  const [loadedFile, setLoadedFile] = useState(false);
  const modalRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <ModalContainer className={cx("CustomModal")}
      handleShowModal={handleShowPsychFlat} modalRef={modalRef}>
      <ModalDialog>
        <ModalContentArea modalRef={modalRef}>
          <ModalHeader handleShowModal={handleShowPsychFlat} />
          <ModalBody className={cx("modal-body")}>
            <p className={cx("ParagraphStyle__Paragraph",
              "ModalTitle")}>
              {"Bạn đang ứng tuyển cho "}
              <b>Heramo Co., Ltd</b>
              {" với vị trí "}
              <b>NHÂN VIÊN SEO (INTERN / PART-TIME)</b>
            </p>
            <div className={cx("ModalImageWrapper")}>
              <div className={cx("ModalImage", "left")}>
                <img alt="Company Image" sizes="100px" src="/static/images/defaultImageCompany.webp" />
              </div>
              <div className={cx("ModalImage", "right")}>
                <img alt="User Image" sizes="100px" src="/static/images/defaultUser.webp" />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <section className={cx("Section")}>
                <p className={cx(
                  "ParagraphStyle__Paragraph",
                  "RegularParagraph",
                  "SectionHeader")}>
                  <FontAwesomeIcon icon={faFileLines} className={cx("IconStyle__VerticalCenterSvg")} />
                  {"Hồ sơ xin việc"}
                  {"*"}
                </p>
                <div className={cx("UploadResumesc__UploadArea")}>
                  <div className={cx("UploadResumesc__GlintsDropzoneWrapper")}
                    style={{ display: !loadedFile ? "" : "none" }} >
                    <div className={cx("filepicker", "dropzone", "dz-clickable")}>
                      <div className={cx("dz-default", "dz-message")}>
                        <span>
                          <div className={cx("UploadResumesc__CenterIconWithText",
                            "UploadResumesc__UploadMessage")}>
                            < FontAwesomeIcon icon={faFileLines} className={cx("IconStyle__VerticalCenterSvg")} />
                            {"Đăng tải hồ sơ của tôi"}
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  {loadedFile &&
                    <div className={cx("UploadResumesc__ResumeWrapper")}>
                      <p className={cx(
                        "ParagraphStyles__Paragraph",
                        "aries-typography-paragraph",
                        "UploadResumesc__ResumeName")} color="#000000" data-gtm-resume="true">
                        Bai giang Giai Tich 1 - PTIT.pdf
                      </p>
                      <div className={cx("UploadResumesc__ResumeDetailContainer")}>
                        <p className={cx(
                          "ParagraphStyles__Paragraph",
                          "aries-typography-paragraph",
                          "UploadResumesc__ResumeDetail")} color="#777777">
                          {"1.9MB"}
                          <span className={cx("UploadResumesc__Dot")}></span>
                          {"Đã tải lên vào 19 Thg 03 2023, 20:11"}
                        </p>
                      </div>
                      <div className={cx(
                        "UploadResumesc__CenterIconWithText",
                        "UploadResumesc__RemoveButton")}>
                        <FontAwesomeIcon icon={faTrashCan}
                          className={cx("IconStyle__VerticalCenterSvg")} />
                        {"Xoá tập tin"}
                      </div>
                    </div>}
                </div>
                <p className={cx("ParagraphStyles__Paragraph",
                  "aries-typography-paragraph",
                  "ResumeHint")} color="#777777">
                  <span className={cx("HighlightText")}>
                    {"Lưu ý : đảm bảo hồ sơ xin việc của bạn sử dụng ngôn ngữ trùng khớp với mô tả công việc (Ví dụ: viết CV bằng tiếng Anh nếu mô tả công việc bằng tiếng Anh)  và đăng tải dưới dạng PDF dưới 5MB."}
                  </span>
                  {"Hồ sơ đã đăng tải sẽ được lưu lại cho lần nộp đơn sau."}
                </p>
              </section>
              <div className={cx(
                "ButtonStyle__SolidBtnContainer",
                "aries-solid-btn",
                "ApplyBtn")} disabled="">
                <button className={cx(
                  "ButtonStyle__Button",
                  "ButtonStyle__SolidBtn",
                  "solid-btn-content")} disabled="" type="submit">
                  Ứng Tuyển Ngay
                </button>
              </div>
            </form>
          </ModalBody>
        </ModalContentArea>
      </ModalDialog >
    </ModalContainer >
  )
}

export default PsychFlatModal;
