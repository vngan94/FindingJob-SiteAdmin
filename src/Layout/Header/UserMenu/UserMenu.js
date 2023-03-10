import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { DropdownIcon } from '../../../components/Icon';
import { useDispatch } from 'react-redux';

import styles from './UserMenu.module.scss';
import { logoutSuccess } from '../../../redux/authSlice';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function UserMenu({ currentUser }) {
  const userMenuRef = useRef();
  const dispatch = useDispatch();
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleUserMenuMousedown = (e) => {
      if (!userMenuRef.current?.contains(e.target)) {
        setShowUserMenu(false);
      }
    }

    window.addEventListener("mousedown", handleUserMenuMousedown);

    return () => {
      window.removeEventListener("mousedown", handleUserMenuMousedown);
    }
  }, []);

  return (
    <div className={cx("UserMenuContainer")}>
      <a>
        <img className={cx("ProfilePicture")} alt="default user"
          src="/static/images/defaultUser.webp" />
      </a>
      <div className={cx("UserSettingSection")}>
        <div className={cx("DropdownStyle__DropdownContainer")}>
          <div className={cx("DropdownStyle__DropdownWrapper")}>
            <div className={cx("DropdownStyle__DropdownHeader")}
              onClick={() => {
                setShowUserMenu(!showUserMenu);
              }} >
              <span><strong className={cx("NameHolder")}>{currentUser.username}</strong></span>
              <span className={cx("DropdownStyle__IconWrapper")}
                style={{ transform: showUserMenu ? "rotate(180deg)" : "rotate(0)" }} >
                <DropdownIcon className={cx("IconStyle__VerticalCenteredSvg")} />
              </span>
            </div>
            <div ref={userMenuRef} className={cx("DropdownStyle__DropdownBody", "DropdownStyle__DropdownBody--Right")}
              style={{ display: showUserMenu ? "block" : "none" }} >
              <Link to={"/setting"} className={cx("DropdownStyle__DropdownItemWrapper")}>
                <div className={cx("DropdownWrapper")}>
                  <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faGear} />
                  <span>Cài đặt</span>
                </div>
              </Link>
              <Link to={"/"} className={cx("DropdownStyle__DropdownItemWrapper")}
                onClick={
                  () => { dispatch(logoutSuccess(currentUser)) }
                } >
                <div className={cx("DropdownWrapper")}>
                  <FontAwesomeIcon className={cx("IconStyle__VerticalCenteredSvg")} icon={faPowerOff} />
                  <span>Đăng xuất</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu;
