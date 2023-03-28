import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { memo, Suspense, useEffect, useState, useTransition } from "react";

import styles from "./ExploreTab.module.scss";
import GlintContainer from "../GlintContainer";

import SearchContainer from "../SearchContainer";
import { get } from "../../utils/axiosAPI";
import Checkbox from "../CheckboxStyle";
import JobList from "../JobList/JobList";
import { selectLocationWorking, selectSearch } from "../../redux/selector";
import TagContainer from "../TagStyle/TagContainer";
import TagContent from "../TagStyle/TagContent";
import { ModalDialog } from "../ModalStyle";
import {
  CollapsibleContainer,
  CollapsibleContent,
  CollapsibleHeader,
  CollapsibleBody
} from "../CollapsibleStyle";

const cx = classNames.bind(styles);

function ExploreTab() {
  // console.log("Render ExploreTab");
  const addressArray = useSelector(selectLocationWorking);
  const searchInput = useSelector(selectSearch);
  const [jobList, setJobList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const pastJobSearch = [
    { id: 1, label: "Tìm kiếm gần đây:", keyword: "Reactjs" },
    { id: 2, label: "Tìm kiếm gần đây:", keyword: "Marketing" },
  ]

  const filterJob = (searchInput, addressArray) => {
    // console.log("filter job");
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
        return job && handleAddressFilter(addressFilter, job.locationWorking);
      })
    }
    if (searchInput && addressFilter.length) {
      return jobList.filter((job) => {
        return job.name.includes(searchInput) && handleAddressFilter(addressFilter, job.locationWorking);
      })
    }

  }
  const handleAddressFilter = (arr, value) => {
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
      const res = await get("job/list/sort-by-date");
      startTransition(() => {
        setJobList(res.data);
      })
    }
    fetchApi();
  }, []);
  return (
    <GlintContainer className="styles__ExploreTabBody">
      <div className={cx("DesktopSearchBoxWrapper")}>
        <div className={cx("Box__StyledBox")}>
          <SearchContainer />
        </div>
      </div>
      {/* Tìm kiếm gần đây lưu ở local */}
      <div className={cx("styles__Container")}>
        {pastJobSearch.map((element) => (
          <div key={element.id} className={cx("styles__ItemWrapper")}>
            <TagContainer>
              <TagContent>
                <FontAwesomeIcon icon={faSearch} />
                <span className={cx("Style_SearchTypeLabel")}>{element.label}</span>
                <span className={cx("styles__SearchKeywordLabel")}>{element.keyword}</span>
              </TagContent>
            </TagContainer>
          </div>
        ))}
        <div className={cx("styles__ItemWrapper")}>
          <TagContainer>
            <TagContent>
              <FontAwesomeIcon icon={faSearch} />
              <span>Từ khóa hot:</span>
              <span>Component</span>
            </TagContent>
          </TagContainer>
        </div>
      </div>
      {/* end past job search */}
      <h1 className={cx("JobCount")}>{result.length} việc làm tại Vietnam</h1>
      <div className={cx("Body")}>
        <div className={cx("DesktopStickyFilterContainer")}>
          <ModalDialog>
            <div className={cx("styles__FilterList")}>
              <CollapsibleContainer className={cx("styles__Collapsible")}>
                <CollapsibleContent>
                  <CollapsibleHeader title="Thành Phố"
                    className={cx("collapsible-title")} />
                  <CollapsibleBody>
                    <div className={cx("styles__CheckboxContainer")}>
                      {addressArray.map((item) => {
                        return <Checkbox key={item.id} obj={item} />
                      })}
                    </div>
                  </CollapsibleBody>
                </CollapsibleContent>
              </CollapsibleContainer>
            </div>
          </ModalDialog>
        </div>
        <div className={cx("Box__StyledBox", "Flex__StyledFlex", "Flex")}>
          <div className={cx("CompactJobCardList__JobCardListContainer",
            "styles__CompactJobCardList")}>
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
