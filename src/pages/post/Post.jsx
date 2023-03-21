import "./post.css"
import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom";
import FactoryIcon from '@mui/icons-material/Factory';
import UploadIcon from '@mui/icons-material/Upload';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Post() {
    return (
        <div>
            <Topbar/>
            <Sidebar/>
        <div className="others">
            <div className="userContainer">
                <div className="info1">
                    <div className="title">
                        <h2 className="name">Kế toán nội bộ</h2>
                        <div className="adress">Hà Nội</div>
                    </div>
                    <div className="action">
                    <Link to = {`/editPost/3`}>
                        <button className="btnEditUser" >Edit</button>
                    </Link>
                    <Link to = {`/3/applications`}>
                        <button className="btnEditUser" >Hồ sơ</button>
                    </Link>
                    
                    </div>
                </div>
                <div class="break"></div>
                <div className="info2">
                    <div className="info2Left">
                        <div className="salary"> <PaidIcon className="iconUser"/>Thỏa thuận</div>
                        <div className="salary"> <CalendarMonthIcon className="iconUser"/>9h:18h</div>
                        <div className="salary"> <FactoryIcon className="iconUser"/>Tài chính</div>
                    </div>
                    <div className="info2Right">
                        <div className="salary"> <UploadIcon className="iconUser"/>12/2/2023</div>
                        <div className="salary"> <HourglassTopIcon className="iconUser"/>Hết hạn nộp hồ sơ </div>
                        <div className="salary"> <AttachFileIcon className="iconUser"/>Hồ sơ đã nộp: 0 </div>
                    </div>
                </div>
                <div class="break"></div>
                <div className="info3"> 
                    <h3 className="desc">Mô tả công việc</h3>
                    <p>CHI TIẾT CÔNG VIỆC
                        <br/>
                        - Tìm kiếm, sàng lọc hò sơ ứng viên 
                        <br/>
                        - Thực hiện liên hệ ứng viên mời phỏng vấn  và hỗ trợ công tác phỏng vẫn với đơn vị 
                        <br/>
                        <br/>
                        YÊU CẦU CÔNG VIỆC
                        <br/>
                        
                        - Nam/ Nữ, tuổi từ 20 - 24
                        <br/>
                        - Tốt nghiệp Cao đẳng trở lên chuyên ngành Quản trị nhân lực, Kinh tế ...
                        <br/>
                        - Khả nằng giao tiếp tốt, giọng nói dễ nghe </p>
                </div>
                <div class="break"></div>
                <div className="info4" >
                    <h3 className="desc">Kỹ năng yêu cầu</h3>
                    <p>
                        Giọng nói dễ nghe 
                        <br/>
                        Giao tiếp tốt
                    </p>
                    </div>
            </div>
        </div>
        </div>

    )
}