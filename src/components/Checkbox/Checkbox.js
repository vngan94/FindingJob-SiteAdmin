import classNames from "classnames/bind";
import { useDispatch } from "react-redux";

import styles from "./Checkbox.module.scss";
import { locationWorkingFilterChange } from "../../redux/filterSlice";

const cx = classNames.bind(styles);

function Checkbox({ obj }) {
  const dispatch = useDispatch();
  return (
    <div className={cx("CheckboxContainer", "Style__Checkbox")}
      aria-label={obj?.ariaLabel} tabIndex="0"
      aria-checked={obj?.checked ? "true" : "false"}
    >
      <input type="checkbox" id={obj?.id} value={obj?.value} checked={obj?.checked}
        onChange={(e) => {
          dispatch(locationWorkingFilterChange({ ...obj, checked: e.target.checked }));
        }} />
      <label htmlFor={obj?.id} onClick={() => {
        const e = document.querySelector(`[aria-label="${obj?.ariaLabel}"]`);
        const toggle = e.getAttribute("aria-checked") === "true";
        e.setAttribute("aria-checked", toggle ? "false" : "true");
      }}>
        {obj?.label}
      </label>
    </div>
  )
}

export default Checkbox;
