import classNames from "classnames/bind";
import { useContext } from "react";

import styles from "./OpportunitySticky.module.scss";
import { JobContext } from "../../pages/DetailJob";

const cx = classNames.bind(styles);

function OpportunitySticky({ openModal }) {
  const job = useContext(JobContext);
  return <div className={cx("OpportunityStickyContainer")}>
    <div className={cx("GlintContainer", "StyledGlintContainer")}>
      <div className={cx("FlexingContainer")}>
        <div className={cx("JobOverViewContainer")}>
          <div>
            <div className={cx("JobOverViewHeader")}>
              <p className={cx("JobOverViewTitle")}>
                {job.name}
              </p>
            </div>
            <div className={cx("BadgesAndCompanyInfoContainer")}>
              <div className={cx("JobOverViewCompanyInfo")}>
                <div className={cx("JobOverViewCompanyName")}>
                  <a href="/company/sadsdas">{job?.idCompany?.name}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("StickyButtonContainer")}>
          <div className={cx("ApplyButton__ApplyButton")}>
            <div className={cx("ButtonStyle__SolidBtnContainer")}>
              <button type="button"
                className={cx("ButtonStyle__Button", "ButtonStyle__SolidBtn")}
                onClick={openModal} >
                Ứng tuyển nhanh
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default OpportunitySticky;
