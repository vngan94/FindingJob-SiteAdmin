
import "./account.css"
import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import FactoryIcon from '@mui/icons-material/Factory';
import UploadIcon from '@mui/icons-material/Upload';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import EditIcon from '@mui/icons-material/Edit';
export default function Account() {
    
    
    return (
        <div>
            <Topbar/>
            <Sidebar/>
            <div className="others">
            <div className="userContainer">
                <div className="info1Acc">
                    <div className="titleUpdate" >
                        
                       <h2 className="name">Cập nhật thông tin công ty</h2>  <EditIcon className="iconUpdate"/>
                        
                    </div>
                    
                </div>
                <div class="break"></div>
                <div className="infoUpdate">
                    <div className="InputContainer">
                        <label htmlFor="">Tên công ty</label> 
                        <input className="inputAccount" type="text" />
                    </div>
                    <div className="InputContainer">
                        <label htmlFor="">Tổng số nhân viên</label> 
                        <input type="number" className="inputAccount" />
                    </div>
                    <div className="InputContainer">
                        <label htmlFor="">Giới thiệu công ty</label> 
                        <input className="inputAccount" type="text" />
                    </div>
                    <div className="InputContainer">
                        <label htmlFor="">Tên công ty</label> 
                        <input className="inputAccount" type="text" />
                        
                    </div>
                    <p className="error2Acc">This is an error </p>
                    <div className="InputContainer">
                        <label htmlFor="">Điện thoại liên hệ</label> 
                        <input type="tel" className="inputAccount" />
                    </div>
                    <div className="InputContainer">
                        <label className="labelAccount" htmlFor="">Địa chỉ văn phòng</label> 
                        <input type="text" className="inputAccount" />
                    </div>
                    <p className="error2Acc">This is an error </p>
                    
                   

                </div>
                {/* <div class="break"></div> */}
                <div class="xongUpdate"><button class="btnXong">Xong</button></div>
            </div>
            </div>
        </div>
        
    )
    
}