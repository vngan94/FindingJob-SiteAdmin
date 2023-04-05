import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { usePastJobSearch } from "../../contexts/pastJobSearchContext";
import { useSearchInput } from "../../contexts/searchInputContext";
import { updateSearch } from "../../redux/filterSlice";

import { SearchIcon, LocationIcon, CloseIcon } from "../Icon";
import {
  SuggestionDropdownContainer,
  SuggestionDropdown,
  SearchItemWrapper
} from "../SearchField";
import styles from './SearchContainer.module.scss';
import { get, path } from "../../utils/axiosAPI";
import { useNavigate } from "react-router-dom";
import routes from "../../config/routes";
import { useDeferredValue, useEffect, useState } from "react";
import { useDeferred } from "../../hooks";

const cx = classNames.bind(styles);

// const initKey = [
//   "test 1",
//   "test 2",
//   "test 3"
// ]

function SearchContainer(isHomePage = false) {
  // console.log("Render SearchContainer");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSuggestion, setShowSuggestion] = useState(true);
  const [suggestionKey, setSuggestionKey] = useState([]);
  const PastJobSearchContext = usePastJobSearch();
  const { pastJobSearch, updatePastJobSearch } = PastJobSearchContext;
  const SearchInputContext = useSearchInput();
  const { searchInput, setSearchInput } = SearchInputContext;
  // const [userInput, setUserInput] = useState("");
  // const testArray = useRef(Array.from({ length: 2 }));
  const testArray = pastJobSearch ? [...pastJobSearch] : [];
  const deferredValue = useDeferred(searchInput, 500);
  const savePastJobSearch = (keyword) => {
    if (keyword) {
      let isExist = false;
      // for (let index = 0; index < testArray.length; index++) {
      //   const element = testArray[index];
      //   if (element.keyword === keyword) {
      //     isExist = true;
      //     return;
      //   }
      // }
      isExist = testArray.some((item) => {
        return item.keyword === keyword;
      });
      if (!isExist) {
        if (testArray?.length >= 3) {
          testArray?.shift();
        }
        testArray?.push({
          label: "Tìm kiếm gần đây:",
          keyword: keyword
        });
        updatePastJobSearch({
          label: "Tìm kiếm gần đây:",
          keyword: keyword
        });
        if (testArray.length) {
          localStorage.setItem("pastJobSearch", JSON.stringify(testArray));
        }
      }
    }
  }
  useEffect(() => {
    if (deferredValue.trim()) {
      const fetchSuggestion = async () => {
        try {
          const res = await get(path.searchSuggestion, {
            params: {
              keyword: deferredValue
            }
          })
          console.log(res);
          setSuggestionKey(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchSuggestion();
    } else {
      setSuggestionKey([]);
    }
  }, [deferredValue])
  const handleEnter = () => {
    if (isHomePage) {
      navigate(routes.job);
    }
    savePastJobSearch(searchInput);
    dispatch(updateSearch(searchInput));
    setShowSuggestion(false);
  }
  return (
    <div className={cx("Container")}>
      <div className={cx("FieldWrapper")}>
        <div className={cx("TextFieldStyled__TextFieldContainer")}>
          <input className={cx("TextFieldStyled__TextFieldInput")}
            placeholder="Tìm kiếm việc làm" spellCheck={false}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // handleSearch();
                handleEnter();
              }
            }}
          />
          <div className={cx("TextFieldStyled__StartIconContainer")}>
            <SearchIcon className={cx("IconStyle__VerticalCenteredSvg")} />
          </div>
        </div>

        {/* suggestion here */}
        {
          searchInput && showSuggestion &&
          <SuggestionDropdownContainer>
            <SuggestionDropdown>
              {suggestionKey.map((item) => {
                return <SearchItemWrapper key={item._id} keyword={item.name}
                  onClick={setShowSuggestion} />
              })}
            </SuggestionDropdown>
          </SuggestionDropdownContainer>
        }
      </div>
      <div className={cx("FieldWrapper")}>
        <div className={cx("TextFieldStyled__TextFieldContainer")}>
          <input className={cx("TextFieldStyled__TextFieldInput")}
            placeholder="Thêm quốc gia hoặc thành phố"
            defaultValue="Vietnam"
          />
          <div className={cx("TextFieldStyled__StartIconContainer")}>
            <LocationIcon className={cx("IconStyle__VerticalCenteredSvg")} />
          </div>
          <div className={cx("TextFieldStyled__IconContainer")}>
            <CloseIcon className={cx("IconStyle__VerticalCenteredSvg")} />
          </div>
        </div>
      </div>
      <div className={cx("ButtonStyle__SolidBtnContainer")}>
        <button type="button"
          className={cx("ButtonStyle__Button", "ButtonStyle__SolidBtn")}
          onClick={() => {
            // handleSearch();
            handleEnter();
          }}
        >TÌM KIẾM</button>
      </div>
    </div>
  )
}

export default SearchContainer;
