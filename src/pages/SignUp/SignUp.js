import classNames from "classnames/bind";

import styles from "./SignUp.module.scss";
import { useDocumentTitle } from "../../hooks";

const cx = classNames.bind(styles);

function SignUp() {
  useDocumentTitle("Sign-up");
  return (
    <section className={cx("global__Background")}>
      SignUp
    </section>
  )
}

export default SignUp;
