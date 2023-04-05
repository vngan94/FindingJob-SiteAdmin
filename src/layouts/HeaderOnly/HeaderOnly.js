import classNames from "classnames/bind";

import styles from "../MainContainer.module.scss";
import Header from "../Header";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div>
      {/* Modal here */}
      <div className={cx("DrawerContainer")}>
        <div className={cx("MainLayout")}>
          <Header />
          <div className={cx("MainBody")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderOnly;
