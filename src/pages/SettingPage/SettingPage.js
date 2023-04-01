import classNames from "classnames/bind";

import styles from "./SettingPage.module.scss";
import GlintContainer from "../../components/GlintContainer";
import { SidebarItem, SidebarTab, SidebarWrapper } from "../../components/Sidebar";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ContentSection from "../../components/Shared/ContentSection";
import ContentSectionTitle from "../../components/Shared/ContentSectionTitle";
import ContentSectionMain from "../../components/Shared/ContentSectionMain";

const cx = classNames.bind(styles);

const initTab = [
  { key: "edit", label: "Thông tin cá nhân", isActive: true, url: "1" },
  { key: "change-password", label: "Thay đổ mật khẩu", isActive: false, url: "2" },
]

function SettingPage() {
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
    // tạo layout cho setting chỉ thay thế phần content
  }
  return (
    <GlintContainer>
      <div className={cx("Title")}>
        Cài đặt tài khoản
      </div>
      <div className={cx("Wrapper")}>
        <div className={cx("SidebarWrapper")}>
          <SidebarWrapper>
            <SidebarTab>
              {initTab.map((tab) => (
                <Fragment key={tab.key}>
                  <SidebarItem label={tab.label} isActive={tab.isActive}
                    url={tab.url}
                    onClick={handleClick} />
                </Fragment>
              ))}
            </SidebarTab>
          </SidebarWrapper>
        </div>
        <div className={cx("ContentWrapper")}>
          <ContentSection>
            <ContentSectionTitle label={"Thay đổi mật khẩu"} />
            <ContentSectionMain>

            </ContentSectionMain>
          </ContentSection>
        </div>
      </div>
    </GlintContainer>
  )
}

export default SettingPage;
