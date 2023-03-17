import classNames from "classnames/bind";

import styles from "./Alerts__ErrorMessage.scss";

const cx = classNames.bind(styles);

function Alerts__ErrorMessage({ messageHeader, children }) {
  return (
    <div className={cx("alerts__ErrorMessage")}>
      <div className={cx("alerts__ErrorMessageHeader")}>
        {messageHeader}
      </div>
      {children}
    </div>
  )
}

export default Alerts__ErrorMessage;
