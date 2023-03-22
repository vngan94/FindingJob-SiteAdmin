import classNames from "classnames/bind";
import { forwardRef } from "react";

import styles from "./TextFieldStyle.module.scss";

const cx = classNames.bind(styles);

function TextFieldInput({
  type,
  placeholder,
  ariaLabel,
  value,
  maxLength,
  onChange
}, inputRef) {
  return (
    <input ref={inputRef}
      // type={showPassword ? "text" : "password"}
      type={type}
      aria-label={ariaLabel} className={cx("TextFieldInput")}
      value={value} maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder} />
  )
}

export default forwardRef(TextFieldInput);
