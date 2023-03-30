import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Suspense, useEffect, useState, useTransition } from "react";

import styles from "./ExploreTab.module.scss";
import GlintContainer from "../GlintContainer";

import SearchContainer from "../SearchContainer";
import { get, path } from "../../utils/axiosAPI";
import JobList from "../JobList/JobList";
import { selectLocationWorkings, selectOccupations, selectSearch } from "../../redux/selector";
import TagContainer from "../TagStyle/TagContainer";
import TagContent from "../TagStyle/TagContent";

import { usePastJobSearch } from "../../contexts/pastJobSearchContext";
import FilterContainer from "./FilterContainer";

const cx = classNames.bind(styles);

function ExploreTab() {
  // console.log("Render ExploreTab");
  const PastJobSearchContext = usePastJobSearch();
  const { pastJobSearch } = PastJobSearchContext;
  const searchInput = useSelector(selectSearch);
  const occupationsFilter = useSelector(selectOccupations);
  const locationWorkingFilter = useSelector(selectLocationWorkings);
  const [jobList, setJobList] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchJobs = async () => {
      const dataFilter = {};
      if (occupationsFilter.length) {
        dataFilter.idOccupation = occupationsFilter;
      }
      if (locationWorkingFilter.length) {
        dataFilter.locationWorking = locationWorkingFilter;
      }
      // console.log("dataFilter", dataFilter);
      console.log(searchInput);
      const res = await get(path.jobListFilter, dataFilter);
      startTransition(() => {
        setJobList(res.data);
      })
    }
    fetchJobs();
  }, [searchInput, occupationsFilter, locationWorkingFilter]);

  return (
    <GlintContainer className="styles__ExploreTabBody">
      <div className={cx("DesktopSearchBoxWrapper")}>
        <div className={cx("Box__StyledBox")}>
          <SearchContainer />
        </div>
      </div>
      {/* Tìm kiếm gần đây lưu ở local */}
      <div className={cx("styles__Container")}>
        {pastJobSearch?.map((element, index) => (
          <div key={index} className={cx("styles__ItemWrapper")}>
            <TagContainer keyword={element?.keyword}>
              <TagContent>
                <FontAwesomeIcon icon={faSearch} />
                <span className={cx("Style_SearchTypeLabel")}>{element?.label}</span>
                <span className={cx("styles__SearchKeywordLabel")}>{element?.keyword}</span>
              </TagContent>
            </TagContainer>
          </div>
        ))}
      </div>
      {/* end past job search */}
      <h1 className={cx("JobCount")}>
        {jobList.length} việc làm tại Vietnam
      </h1>
      <div className={cx("Body")}>
        <FilterContainer />
        <div className={cx("Box__StyledBox", "Flex__StyledFlex", "Flex")}>
          <div className={cx("CompactJobCardList__JobCardListContainer",
            "styles__CompactJobCardList")}>
            {/* <div className="ModalStyle__ModalContainer"></div> */}
            <Suspense fallback={() => (<p>Calling...</p>)}>
              {isPending ? <p>loading...</p> : <JobList jobList={jobList} />}
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
