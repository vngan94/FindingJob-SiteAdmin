import classNames from "classnames/bind";

import styles from "./ProfilePictureStyle.module.scss";

const cx = classNames.bind(styles);

function ProfilePictureContent({children}) {
  return (
    <div className={cx("ProfilePictureContent")}>
      {children}
    </div>
  )
}

export default ProfilePictureContent;
