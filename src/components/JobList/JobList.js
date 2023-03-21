import classNames from "classnames/bind";
import { faBookmark, faBriefcase, faClock, faDollarSign, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./JobList.module.scss";

const cx = classNames.bind(styles);

function JobList({ jobList }) {
  return (
    jobList?.map((job, index) => {
      return (
        <Fragment key={job._id}>
          <div className={cx("JobCard_JobCardContainer",
            "CompactOpportunityCard__CompactJobCardWrapper")}>
            <div className={cx("JobCard__JobCardWrapper")}>
              <Link to={`/job/${job._id}`}
                className={cx("CompactOpportunityCard__CardAnchorWrapper")}
                href="/test" target="_blank" />
              <div className={cx("CompactOpportunityCard__CompactJobCard")}>
                <div className={cx("CompactOpportunityCard__CompactJobCardHeader")}>
                  <div className={cx("CompactOpportunityCard__CompanyAvatarWrapper")}>
                    <img className={cx("CompactOpportunityCard__CompanyAvatar")}
                      alt="Company Avatar"
                      src="/static/images/defaultImageCompany.webp" />
                  </div>
                  <div className={cx("CompactOpportunityCard__CompactJobCardInfo")}>
                    <h3 className={cx("CompactOpportunityCard__JobTitle")}>
                      {job.name}
                    </h3>
                    <span className={cx("CompactOpportunityCard__CompanyLinkContainer")}>
                      <div className={cx("CompactOpportunityCard__Ellipsis")}>
                        <a className={cx("CompactOpportunityCard__CompanyLink")}
                          href="www.google.com" >
                          {/* code findOne company here */}
                          {job.idCompany.name}
                        </a>
                      </div>
                    </span>
                  </div>
                  <div>
                    {(index < 4) ?
                      <div className={cx("CheckMarkHotJobBadge__CheckMarkHotJobBadgeContainer")}>
                        <span>HOT</span>
                        <FontAwesomeIcon icon={faStar}
                          className={cx("IconStyle__VerticalCenteredSvg")} />
                      </div> : ""}
                    <div className={cx("CompactOpportunityCard__BookmarkIconContainer")}>
                      <div className={cx("BookmarkButton__ButtonWrapper")}>
                        <FontAwesomeIcon icon={faBookmark} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("CompactOpportunityCard__OpportunityInfoContainer")}>
                  <div className={cx("CompactOpportunityCard__OpportunityInfo")}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{job.locationWorking}</span>
                  </div>
                  <div className={cx("CompactOpportunityCard__OpportunityInfo")}>
                    <FontAwesomeIcon icon={faDollarSign} />
                    <span>{job.salary}</span>
                  </div>
                  <div className={cx("CompactOpportunityCard__OpportunityInfo")}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span>Kinh nghiệm công việc</span>
                  </div>
                </div>
                <div className={cx("CompactOpportunityCard__OpportunityMeta")}>
                  <div className={cx("CompactOpportunityCard__CardBottomFlexContainer")}>
                    <div className={cx("CompactOpportunityCard__UpdatedTimeContainer")}>
                      <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faClock} />
                      <span className={cx("CompactOpportunityCard__UpdatedAtMessage")}>
                        {new Date(job.postingDate).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    })
  )
}

export default JobList;
