import classNames from "classnames/bind";

import styles from "./Checkbox.module.scss";

const cx = classNames.bind(styles);

function Checkbox({ obj, setState }) {
  return (
    <div className={cx("CheckboxContainer", "Style__Checkbox")}
      aria-label={obj?.ariaLabel} tabIndex="0"
      aria-checked={obj?.checked ? "true" : "false"}
    // aria-checked="true"
    >
      <input type="checkbox" id={obj?.id} value={obj?.value} />
      <label htmlFor={obj?.id} onClick={() => {
        const e = document.querySelector(`[aria-label="${obj?.ariaLabel}"]`);
        const toggle = e.getAttribute("aria-checked") === "true";
        obj.checked = !toggle;
        e.setAttribute("aria-checked", toggle ? "false" : "true");
      }}>
        {obj?.label}
      </label>
    </div>
  )
}

export default Checkbox;
