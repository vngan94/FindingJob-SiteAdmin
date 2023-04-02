import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import styles from "./InputComponent.scss";

const cx = classNames.bind(styles);

function InputComponent__InputWrapper({ id, label, name, type = "text", valid = true,
  value, onChange }) {
  const [floatLabel, setFloatLabel] = useState(false);
  return (
    <div className={cx("InputComponent__InputWrapper")}>
      <span className={cx(value || floatLabel ? "InputComponent__InputName--Float" : "InputComponent__InputName")}>
        {label}
      </span>
      <div className={cx("InputComponent__InputTypeWrapper")}>
        <input type={type} id={id} value={value}
          placeholder="placeholder" // to remove issue input has no title
          name={name}
          className={cx("InputComponent__InputType")}
          onChange={onChange}
          onFocus={() => {
            setFloatLabel(true);
          }}
          onBlur={(e) => {
            if (e.target.value !== "") {
              setFloatLabel(true);
            } else {
              setFloatLabel(false);
            }
          }} />
        <div className={cx("InputComponent__ValidationIconContainer")}>
          {!valid
            && <FontAwesomeIcon icon={faExclamation} width={"1em"} height={"1em"}
              className={cx("IconStyle__VerticalCenteredSvg")} />}
        </div>
      </div>
    </div>
  )
}

export default InputComponent__InputWrapper;
