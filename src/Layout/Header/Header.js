import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import config from '../../config';
import { LanguageIcon, DropdownIcon, RightArrowIcon } from '../../components/Icon';
import { useRef, useState } from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';

const cx = classNames.bind(styles);

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const languageRef = useRef();
    const handleShowLogin = () => {
        setShowLogin(!showLogin);
    }
    return (
        <div className={cx("MainHeader")}>
            <div className={cx("GlintContainer")}>
                {/* LoginModal */}
                {showLogin && <LoginModal handleShowLogin={handleShowLogin} />}
                <nav className={cx("Container")}>
                    <NavLink to={config.routes.home}>
                        <img src={"https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/images/logo.png"} alt="icon" className={cx("Logo")} />
                    </NavLink>
                    <div className={cx("MenuItem")}>
                        <NavLink to={config.routes.job}
                            className={(nav) => cx({ Active: nav.isActive })}
                        >tìm việc làm</NavLink>
                    </div>
                    <div className={cx("MenuItem")}>
                        <NavLink to={config.routes.company}
                            className={(nav) => cx({ Active: nav.isActive })}
                        >danh sách công ty</NavLink>
                    </div>
                    <div className={cx("MenuItem")}>
                        <NavLink to={config.routes.blog}
                            className={(nav) => cx({ Active: nav.isActive })}
                        >blog</NavLink>
                    </div>
                    <div className={cx("RightMenuContainer", "text-uppercase")}>
                        <div className={cx("UserMenuItem", "dropdown")}>
                            <div className={cx("LanguageSwitcherContainer")}>
                                <LanguageIcon width="12px" height="12px" />
                                <span>vi</span>
                                <DropdownIcon className={cx("dropdown-icon")} />
                            </div>
                            <div ref={languageRef} className={cx("dropdown-menu")}>
                                <Link to={"/"} className={cx("dropdown-item")}>Tiếng Anh</Link>
                                <Link to={"/"} className={cx("dropdown-item")}>Tiếng Việt</Link>
                            </div>
                        </div>
                        <div className={cx("UserMenuItem")}>đăng ký</div>
                        <div onClick={handleShowLogin} className={cx("UserMenuItem")}>đăng nhập</div>
                        <div className={cx("EmployersButton")}>
                            <Link
                                to={config.routes.recruitment}
                                target="_blank"
                            >
                                dành cho nhà tuyển dụng
                                <span><RightArrowIcon className={cx("EndIconContainer")} /></span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
