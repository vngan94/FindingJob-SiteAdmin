import classNames from "classnames/bind";

import styles from './GlintContainer.module.scss';

import ValueProposition from './ValueProposition';
import StatisticDisplay from "./StatisticDisplay/";
import CareersGrid from "./CareersGrid/";
import PressFeatures from "./PressFeatures/PressFeatures";
import Testimonial from "./Testimonial/Testimonial";

const cx = classNames.bind(styles);

function GlintContainer() {
    return (
        <div className={cx("Container")}>
            <StatisticDisplay />

            <CareersGrid />

            <ValueProposition />

            <PressFeatures />

            <Testimonial />
        </div >
    );
}

export default GlintContainer;
