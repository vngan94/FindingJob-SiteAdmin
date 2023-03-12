import classNames from "classnames/bind";

import styles from "./ExploreTab.module.scss";
import GlintContainer from "../GlintContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faBookmark, faBriefcase, faClock, faDollarSign, faLocationDot, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";

import SearchContainer from "../SearchContainer";
import { Fragment, memo, startTransition, Suspense, useEffect, useState, useTransition } from "react";
import { get } from "../../utils/axiosAPI";
import axios from "axios";
import { Link } from "react-router-dom";
import config from "../../config";

const cx = classNames.bind(styles);

function ExploreTab() {
  console.log("Render ExploreTab");
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchApi = async () => {
      const res = await get("job/list");
      startTransition(() => {
        setJobList(res.data);
      })
      // axios.get("https://jsonplaceholder.typicode.com/comments")
      //   .then((res) => {
      //     startTransition(() => {
      //       setJobList(res.data);
      //     })
      //   })
    }
    fetchApi();
    setLoading(false);
  }, []);

  return (
    <GlintContainer className="Style__ExploreTabBody">
      <div className={cx("DesktopSearchBoxWrapper")}>
        <div className={cx("Box__StyledBox")}>
          <SearchContainer />
        </div>
      </div>
      <div className={cx("Style__Container")}>
        <div className={cx("Style__ItemWrapper")}>
          <div className={cx("TagStyle__TagContainer")}>
            <label className={cx("TagStyle__TagContent")}>
              <FontAwesomeIcon icon={faSearch} />
              <span className={cx("Style_SearchTypeLabel")}>Tìm kiếm gần đây:</span>
              <span className={cx("Style__SearchKeywordLabel")}>Reactjs</span>
            </label>
          </div>
        </div>
        <div className={cx("Style__ItemWrapper")}>
          <div className={cx("TagStyle__TagContainer")}>
            <label className={cx("TagStyle__TagContent")}>
              <FontAwesomeIcon icon={faSearch} />
              <span>Từ khóa hot:</span>
              <span>Marketing</span>
            </label>
          </div>
        </div>
        <div className={cx("Style__ItemWrapper")}>
          <div className={cx("TagStyle__TagContainer")}>
            <label className={cx("TagStyle__TagContent")}>
              <FontAwesomeIcon icon={faSearch} />
              <span>Từ khóa hot:</span>
              <span>Glints 5 ngày</span>
            </label>
          </div>
        </div>
      </div>
      <h1 className={cx("JobCount")}>{jobList.length} việc làm tại Vietnam</h1>
      <div className={cx("Body")}>
        <div className={cx("DesktopStickyFilterContainer")}>
          <div className={cx("ModalStyle__ModalDialog")}>
            <div className={cx("Style__FilterList")}>
              <div className={cx("CollapsibleStyle__CollapsibleContainer", "Style__Collapsible")}>
                <div className={cx("CollapsibleStyle__CollapsibleContent")}>
                  <div className={cx("CollapsibleStyle__CollapsibleHeader")}>
                    Danh mục công việc
                    <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faAngleUp} />
                  </div>
                  <div className={cx("CollapsibleStyle__CollapsibleBody")}>
                    body
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("Box__StyledBox", "Flex__StyledFlex", "Flex")}>
          <div className={cx("CompactJobCardList__JobCardListContainer", "Style__CompactJobCardList")}>
            {/* <div className="ModalStyle__ModalContainer"></div> */}
            <Suspense fallback={() => (<p>Calling...</p>)}>
              {isPending ? <p>loading...</p> : jobList.map((job, index) => {
                return (
                  <Fragment key={job._id}>
                    <div className={cx("JobCard_JobCardContainer", "CompactOpportunityCard__CompactJobCardWrapper")}>
                      <div className={cx("JobCard__JobCardWrapper")}>
                        <Link to={`/job/${job._id}`} className={cx("CompactOpportunityCard__CardAnchorWrapper")}
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
                                    {job.idCompany}
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
              })}
            </Suspense>
          </div>
          <div className={cx("InfiniteScroll_InfiniteScrollContainer")}></div>
          <div className={cx("PaginationContainer")}></div>
        </div>
      </div>
    </GlintContainer>
  )
}

export default ExploreTab;
