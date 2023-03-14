import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { memo, Suspense, useEffect, useState, useTransition } from "react";

import styles from "./ExploreTab.module.scss";
import GlintContainer from "../GlintContainer";

import SearchContainer from "../SearchContainer";
import { get } from "../../utils/axiosAPI";
import Collapsible from "../Collapsible/Collapsible";
import Checkbox from "../Checkbox";
import JobList from "../JobList/JobList";
import { selectLocationWorking, selectSearch } from "../../redux/selector";

const cx = classNames.bind(styles);

function ExploreTab() {
  console.log("Render ExploreTab");
  const addressArray = useSelector(selectLocationWorking);
  const searchInput = useSelector(selectSearch);
  const [jobList, setJobList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const filterJob = (searchInput, addressArray) => {
    console.log("filter job");
    const addressFilter = [];
    addressArray.forEach((item) => {
      if (item.checked) {
        addressFilter.push(item.value);
      }
    })
    if (!searchInput && !addressFilter.length) {
      return jobList;
    }
    if (searchInput && !addressFilter.length) {
      return jobList.filter((job) => {
        return job.name.includes(searchInput);
      })
    }
    if (!searchInput && addressFilter.length) {
      return jobList.filter((job) => {
        return job && inFilter(addressFilter, job.locationWorking);
      })
    }
    if (searchInput && addressFilter.length) {
      return jobList.filter((job) => {
        return job.name.includes(searchInput) && inFilter(addressFilter, job.locationWorking);
      })
    }

  }
  const inFilter = (arr, value) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (value?.includes(element)) {
        return true;
      }
    }
    return false;
  }
  const result = filterJob(searchInput, addressArray);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await get("job/list");
      startTransition(() => {
        setJobList(res.data);
      })
    }
    fetchApi();
  }, []);
  return (
    <GlintContainer className="Style__ExploreTabBody">
      <div className={cx("DesktopSearchBoxWrapper")}>
        <div className={cx("Box__StyledBox")}>
          <SearchContainer />
        </div>
      </div>
      {/* Tìm kiếm gần đây lưu ở local */}
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
              <span>Marketing</span>
            </label>
          </div>
        </div>
      </div>
      <h1 className={cx("JobCount")}>{result.length} việc làm tại Vietnam</h1>
      <div className={cx("Body")}>
        <div className={cx("DesktopStickyFilterContainer")}>
          <div className={cx("ModalStyle__ModalDialog")}>
            <div className={cx("Style__FilterList")}>
              <Collapsible title="Thành Phố">
                <div className={cx("Style__CheckboxContainer")}>
                  {addressArray.map((item) => {
                    return <Checkbox key={item.id} obj={item} />
                  })}
                </div>
              </Collapsible>
            </div>
          </div>
        </div>
        <div className={cx("Box__StyledBox", "Flex__StyledFlex", "Flex")}>
          <div className={cx("CompactJobCardList__JobCardListContainer",
            "Style__CompactJobCardList")}>
            {/* <div className="ModalStyle__ModalContainer"></div> */}
            <Suspense fallback={() => (<p>Calling...</p>)}>
              {isPending ? <p>loading...</p> : <JobList jobList={result} />}
            </Suspense>
          </div>
          <div className={cx("InfiniteScroll_InfiniteScrollContainer")}></div>
          <div className={cx("PaginationContainer")}></div>
        </div>
      </div>
    </GlintContainer>
  )
}

export default memo(ExploreTab);
