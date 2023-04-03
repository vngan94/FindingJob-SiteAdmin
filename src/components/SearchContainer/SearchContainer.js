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

const cx = classNames.bind(styles);

const initKey = [
  "test 1",
  "test 2",
  "test 3"
]

function SearchContainer() {
  // console.log("Render SearchContainer");
  const dispatch = useDispatch();
  const PastJobSearchContext = usePastJobSearch();
  const { pastJobSearch, updatePastJobSearch } = PastJobSearchContext;
  const SearchInputContext = useSearchInput();
  const { searchInput, setSearchInput } = SearchInputContext;
  // const [userInput, setUserInput] = useState("");
  // const testArray = useRef(Array.from({ length: 2 }));
  const testArray = pastJobSearch ? [...pastJobSearch] : [];
  const savePastJobSearch = (keyword) => {
    if (keyword) {
      let isExist = false;
      for (let index = 0; index < testArray.length; index++) {
        const element = testArray[index];
        if (element.keyword === keyword) {
          isExist = true;
          return;
        }
      }
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
                savePastJobSearch(searchInput);
                dispatch(updateSearch(searchInput));
              }
            }}
          />
          <div className={cx("TextFieldStyled__StartIconContainer")}>
            <SearchIcon className={cx("IconStyle__VerticalCenteredSvg")} />
          </div>
        </div>

        {/* suggestion here */}
        {
          searchInput &&
          <SuggestionDropdownContainer>
            <SuggestionDropdown>
              {initKey.map((item, index) => {
                return <SearchItemWrapper key={index} keyword={item} />
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
            savePastJobSearch(searchInput);
            dispatch(updateSearch(searchInput));
          }}
        >TÌM KIẾM</button>
      </div>
    </div>
  )
}

export default SearchContainer;
