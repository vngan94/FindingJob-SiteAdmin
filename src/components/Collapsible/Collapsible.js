import classNames from "classnames/bind";
import { useState } from "react";
import { DropdownIcon } from "../Icon";

import styles from "./Collapsible.module.scss";

const cx = classNames.bind(styles);

function Collapsible({ title, children }) {
  console.log("Render Collapsible");
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  }
  return <div className={cx("CollapsibleContainer",
    "styles__Collapsible")}>
    <div className={cx("CollapsibleContent")}>
      <div className={cx("CollapsibleHeader")}
        onClick={toggleOpen} >
        {title}
        {<span style={{
          transform: open ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.5s ease 0s"
        }}>
          <DropdownIcon className={cx("IconStyle__VerticalCenteredSvg")} />
        </span>}
      </div>
      {open &&
        <div className={cx("CollapsibleBody")}>
          {children}
        </div>
      }
    </div>
  </div>
}
// CollapsibleStyle__
export default Collapsible;
