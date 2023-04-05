import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Suspense, useDeferredValue, useEffect, useMemo, useState, useTransition } from "react";

import styles from "./ExploreTab.module.scss";
import GlintContainer from "../GlintContainer";
import { useDeferred } from "../../hooks";

import SearchContainer from "../SearchContainer";
import { path, post } from "../../utils/axiosAPI";
import JobList from "../JobList/JobList";
import { selectFilter, selectLocationWorkings, selectOccupations, selectSearch } from "../../redux/selector";
import TagContainer from "../TagStyle/TagContainer";
import TagContent from "../TagStyle/TagContent";

import { usePastJobSearch } from "../../contexts/pastJobSearchContext";
import FilterContainer from "./FilterContainer";
import InfiniteScrollContainer from "../InfiniteScroll/InfiniteScrollContainer";
import axios from "axios";

const cx = classNames.bind(styles);

function ExploreTab() {
  // console.log("Render ExploreTab");

  const PastJobSearchContext = usePastJobSearch();
  const { pastJobSearch } = PastJobSearchContext;
  const searchInput = useSelector(selectSearch);
  const occupationsFilter = useSelector(selectOccupations);
  const locationWorkingFilter = useSelector(selectLocationWorkings);
  const filter = useSelector(selectFilter);
  const [jobList, setJobList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const filterDeferred = useDeferred(filter, 600);

  useEffect(() => {
    const fetchJobs = async () => {
      // const dataFilter = {};
      // Object.entries(dataFilter).length === 0
      // dataFilter.key = searchInput;
      // // dataFilter.idCompany = 
      // dataFilter.idOccupation = occupationsFilter;
      // dataFilter.locationWorking = locationWorkingFilter;
      // if (occupationsFilter.length) {
      //   dataFilter.idOccupation = occupationsFilter;
      // }
      // if (locationWorkingFilter.length) {
      //   dataFilter.localWorking = locationWorkingFilter;
      // }
      const dataFilter = {
        key: searchInput,
        idOccupation: occupationsFilter,
        idCompany: [],
        locationWorking: locationWorkingFilter,
      }
      // console.log(dataFilter);
      try {
        const res = await post(path.searchJob, dataFilter);
        // const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        // console.log(res);
        startTransition(() => {
          setJobList(res.data);
        })
      } catch (error) {
        console.log(error);
      }
    }
    fetchJobs();
  }, [searchInput, filterDeferred]);

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
            <JobList jobList={jobList} />
          </div>
          {isPending &&
            <InfiniteScrollContainer width="3rem" height="3rem">
              Đang tải thêm công việc khác
            </InfiniteScrollContainer>}

          <div className={cx("PaginationContainer")}></div>
        </div>
      </div>
    </GlintContainer>
  )
}
export default ExploreTab;
