import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from "../Header/Header";
import styles from './DefautLayout.module.scss';
import Footer from '../Footer/Footer';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [gotoTop, setGoToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setGoToTop(true);
            } else {
                setGoToTop(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return (
        <div>
            {/* Modal here */}
            <div className={cx("DrawerContainer")}>
                <div className={cx("MainLayout")}>
                    <Header />
                    <div className={cx("MainBody")}>
                        <div className={cx("Landing")}>
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            {/* {
                gotoTop && <a href="#top" className={cx("BackToTop")} aria-label="#top"
                    title='Back to top'>
                    <FontAwesomeIcon icon={faArrowUp} />
                </a>
            } */}
            {
                <a href="#top" style={{ opacity: gotoTop ? "1" : "0" }} className={cx("BackToTop")} aria-label="#top"
                    title='Back to top'>
                    <FontAwesomeIcon icon={faArrowUp} />
                </a>
            }
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout;
