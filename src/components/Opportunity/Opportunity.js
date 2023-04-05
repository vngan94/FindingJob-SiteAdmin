import {
  faBookmark,
  faCircle,
  faClock,
  faDollar,
  faHotel,
  faHourglassStart,
  faLocation
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useContext } from "react";

import { JobContext } from "../../pages/DetailJob";
import ReadMore from "../ReadMore/ReadMore";
import styles from "./Opportunity.module.scss";

const cx = classNames.bind(styles);

function Opportunity({ openModal }) {
  // console.log("Render Opportunity");
  const job = useContext(JobContext);
  return <div className={cx("Container")}>
    <main className={cx("Main")}>
      <div className={cx("TopFold__CompanyAndJobInfo")}>
        <div className={cx("TopFold__CompanyLogo")}>
          <img src="/static/images/defaultImageCompany.webp" alt="Logo Company" />
        </div>
        <div className={cx("TopFold__JobOverViewContainer")}>
          <div>
            <div className={cx("TopFold__JobOverViewHeader")}>
              <h1 className={cx("TopFold__JobOverViewTitle")}>
                {job.name}
              </h1>
            </div>
            <div className={cx("TopFold__JobOverViewCompanyInfo")}>
              <div className={cx("TopFold__JobOverViewCompanyName")}>
                <a href="https://www.google.com">{job?.idCompany?.name}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("TopFold__JobOverViewInfoContainer")}>
        <div className={cx("TopFold__JobOverViewInfo", "TopFold__SalaryJobOverView")}>
          <div>
            <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faDollar} />
            <span>{job.salary}</span>
          </div>
        </div>
        <div className={cx("TopFold__JobOverViewInfo")}>
          <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faHotel} />
          <a href="https://google.com">{job?.idOccupation?.name}</a>
        </div>
        <div className={cx("TopFold__JobOverViewInfo")}>
          <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faHourglassStart} />
          {job.hourWorking}
        </div>
        <div className={cx("TopFold__BadgesAndJobOverViewTimeContainer")}>
          <div className={cx("TopFold__JobOverViewTime")}>
            <FontAwesomeIcon icon={faClock} />
            <span className={cx("TopFold__PostedAt")}>{job.postingDate}</span>
            <FontAwesomeIcon width={4} height={4} className={cx("IconStyle__VerticalCenteredSvg")} icon={faCircle} />
            <span className={cx("TopFold__UpdateAt")}>Cập nhật tháng trước</span>
          </div>
        </div>
        <div className={cx("TopFold__ButtonContainer")}>
          <div className={cx("TopFold__ApplyButtonDesktop")}>
            <div className={cx("ApplyButton__ApplyButton")}>
              <div className={cx("ButtonStyle__SolidBtnContainer")}>
                <button type="button" className={cx("ButtonStyle__Button", "ButtonStyle__SolidBtn")}
                  onClick={openModal} >
                  Ứng tuyển nhanh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("DividerContainer")}>
        <div className={cx("DividerStyle__DividerContainer")}></div>
      </div>
      <div className={cx("SkillsContainer")}>
        <div className={cx("Skills__TitleContainer")}>
          <h2 className={cx("Skills__Title")}>Skills</h2>
        </div>
        <div className={cx("SkillsTagOverride", "TagStyle__TagContainer")}>
          <label className={cx("TagStyle__TagContent")}>
            {job.requirement}
          </label>
        </div>
      </div>
      <div className={cx("JobDescriptionContainer")}>
        <div className={cx("JobDescription__TitleContainer")}>
          <h2 className={cx("JobDescription__Title")}>
            Chi tiết công việc {job.name} tại {job?.idCompany?.name}
          </h2>
        </div>
        {/* ReadMore here */}
        {/* <ReadMore text={"Mô tả công việc- Tham gia xây dựng và phát triển dự án.- Làm việc theo quy trình, các công cụ phần mềm hỗ trợ của công ty (quản lý dự án, phân công công việc…).- Nghiên cứu công nghệ và phát triển sản phẩm.- Triển khai sự kiện theo lịch phân công từ Team Leader.- Được hướng dẫn sử dụng thiết bị và các công cụ triển khai.- Đảm nhận vị trí kỹ thuật theo từng vai trò được giao.Yêu cầu ứng viên- Sinh viên năm cuối hoặc mới tốt nghiệp trung cấp, cao đẳng, đại học CNTT- Có kiến thức về lập trình về ngôn ngữ C#, Asp.net, SQL.- Có kiến thức cơ bản về html, javascript, css. AngularJS là một lợi thế. - Ưu tiên các thực tập sinh hiểu biết về ngôn ngữ Python.- Có khả năng làm việc nhóm tốt và chủ động trong công việc- Thái độ tốt, khả năng giao tiếp và xử lý tình huống tốtQuyền lợi- Có lương trợ cấp theo năng lực.- Môi trường làm việc sáng tạo, chuyên nghiệp.- Hỗ trợ phụ cấp và dấu mộc cho thực tập sinh. Cơ hội trở thành nhân viên chính thức tại công ty.- Được hưởng tất cả chế độ, quyền lợi, đãi ngộ theo quy định tại Công Ty TNHH CLOUDMEDIA- Được tham gia các khóa đào tạo nội bộ và bên ngoài nhằm trang bị, bồi dưỡng kiến thức, kỹ năng mềm phục vụ cho công việc."} /> */}
        <ReadMore text={job?.description} maxLength={20} />
      </div>
    </main>
    <aside className={cx("DesktopAside")}>
      <div className={cx("DesktopSimilarJobsWrapper")}>
        <div className={cx("SimilarJobsSection__HeaderWrapper")}>
          <div className={cx("SimilarJobsSection__Header")}>
            Việc làm tương tự
          </div>
        </div>
        <div className={cx("SimilarJobsSection__JobCardWrapper")}>
          <div className={cx("SimilarJobCard__Card")}>
            {/* Modal here */}
            <a target="_blank" href="/kkk" className={cx("CompactOpportunityCard__CardAnchorWrapper")}></a>
            <div>
              <div className={cx("SimilarJobCard__Container")}>
                <div className={cx("SimilarJobCard__Logo")}>
                  <img alt="Logo Company" src="/static/images/defaultImageCompany.webp" />
                </div>
                <div className={cx("SimilarJobCard__Detail")}>
                  <div className={cx("SimilarJobCard__Title")}>
                    Job name here
                  </div>
                  <a alt="Company Name" href="/abc" >Company here</a>
                  <div className={cx("SimilarJobCard__InfoWrapper")}>
                    <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faLocation} />
                    <span>Hồ Chí Minh, Việt nam</span>
                  </div>
                  <div className={cx("SimilarJobCard__InfoWrapper", "SimilarJobCard__SalaryInfoContainer")}>
                    <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faDollar} />
                    <span>Salary here</span>
                  </div>
                </div>
                <div className={cx("SimilarJobCard__Bookmark")}>
                  <div className={cx("BookmarkButton__ButtonWrapper")}>
                    <FontAwesomeIcon
                      className={cx("IconStyle__VerticalCenteredSvg", "BookmarkButton__BookmarkOutlineIcon")}
                      icon={faBookmark} />
                  </div>
                </div>
              </div>
              <div className={cx("SimilarJobCard__DividerContainer")}>
                <div className={cx("DividerStyle__DividerContainer")}></div>
              </div>
              <div className={cx("SimilarJobCard__Footer")}>
                <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faClock} />
                <span>Cập nhật tháng trước</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
}

export default Opportunity;
