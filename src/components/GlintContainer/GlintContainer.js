import classNames from "classnames/bind";

import styles from './GlintContainer.module.scss';

const cx = classNames.bind(styles);

function GlintContainer({children, className = ""}) {
    return (
        <div className={cx("GlintContainer", className)}>
            {children}
        </div >
    );
}

export default GlintContainer;
