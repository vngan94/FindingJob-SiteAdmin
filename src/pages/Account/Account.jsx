
import "./account.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from '../../redux/selector';
import {  useState } from "react";
import { updateUser } from "../../redux/userSlice";
import axios from "axios";
import { toast } from "react-toastify";
export default function Account() {
    const currentUser = useSelector(selectUser);
    
    const [name, setName] = useState(currentUser.congtyName)
    const [totalEmployee, setTotalEmployee] = useState(currentUser.congtyTotal)
    const [type, setType] = useState(currentUser.congtyType)
    const [congtyLocation, setCongtyLocation] = useState(currentUser.congtyLocation)
    const [congtyAbout, setCongtyAbout] = useState(currentUser.congtyAbout)
    const [congtyPhone, setCongtyPhone] = useState(currentUser.congtyPhone)
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({
        name: '',
        totalEmployee: '',
        type: '',
        congtyLocation: '',
        congtyAbout: '',
        congtyPhone:'',
      });
      

      const validateForm = () => {
        const errs = {};
        if (!name) {
          errs.name = "Vui lòng nhập tên công ty!";
        }
        if (!totalEmployee) {
          errs.totalEmployee = "Vui lòng nhập tổng số nhân viên!";
        }
        
        if (!type) {
          errs.type = "Vui lòng loại công ty";
        }
        if (!congtyLocation) {
          errs.congtyLocation = "Vui lòng nhập địa chỉ văn phòng công ty";
        }
        if (!congtyAbout) {
            errs.congtyAbout = "Vui lòng nhập giới thiệu công ty";
        }
       
      
        if (!congtyPhone) 
          errs.congtyPhone = "Vui lòng nhập số điện thoại công ty";
 
        return errs;
        }
        
        const handleSubmit = async(e) => {
            console.log("in xong ", currentUser.accessTokenn )
            
            e.preventDefault();
            const errs = validateForm();
            
            if (Object.keys(errs).length === 0) {
              
                setErrors({});
                axios.defaults.headers.common = {'Authorization': `bearer ${currentUser.accessTokenn}`}
                try {
                   
                    await axios.put("https://job-seeker-smy5.onrender.com/company/update", {
                        "_id":currentUser.congtyId,
                        "name": name,
                        "totalEmployee": totalEmployee,
                        "type": type,
                        "about":congtyAbout,
                        "phone": congtyPhone,
                        "location": congtyLocation,
                        "idUser": currentUser._id
                    })

                    dispatch(updateUser({
                        accessTokenn: currentUser.accessTokenn,
                        refreshTokenn: currentUser.refreshTokenn,
                        _id: currentUser._id,
                        name: currentUser.name,
                        avatar: currentUser.avatar,
                        phone: currentUser.phone,
                        email: currentUser.email,
                        username: currentUser.username,
                        congtyName: name,
                        congtyTotal: totalEmployee,
                        congtyId: currentUser.congtyId,
                        congtyPhone: congtyPhone,
                        congtyType: type,
                        congtyLocation: congtyLocation,
                        congtyAbout: congtyAbout,
                      }));
                    
                    // alert("Cập nhật tài khoản thành công")
                    toast("Cập nhật thành công")
                      
                 
                } 
                catch(err) {
                    console.log("err ", err)
                }
                
            }else {
                setErrors(errs);
                
              }
            }
   
    
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
                        <input className="inputAccount" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    {errors.name && <p className="error2">{errors.name}</p>}
                    <div className="InputContainer">
                        <label htmlFor="">Tổng số nhân viên</label> 
                        <input type="number" className="inputAccount" min="1" value={totalEmployee} onChange={(e) => setTotalEmployee(e.target.value)}/>
                    </div>
                    {errors.totalEmployee && <p className="error2">{errors.totalEmployee}</p>}
                    <div className="InputContainer">
                        <label htmlFor="">Giới thiệu công ty</label> 
                        <input className="inputAccount" type="text" value={congtyAbout} onChange={(e) => setCongtyAbout(e.target.value)}/>
                    </div>
                    {errors.congtyAbout && <p className="error2">{errors.congtyAbout}</p>}
                    <div className="InputContainer">
                        <label htmlFor="">Loại công ty</label> 
                        <input className="inputAccount" type="text" value={type} onChange={(e) => setType(e.target.value)} />
                    </div>
                    {errors.type && <p className="error2">{errors.type}</p>}
                 
                    <div className="InputContainer">
                        <label htmlFor="">Điện thoại liên hệ</label> 
                        <input type="tel" className="inputAccount" value={congtyPhone} onChange={(e) => setCongtyPhone(e.target.value)}/>
                    </div>
                    {errors.congtyPhone && <p className="error2">{errors.congtyPhone}</p>}
                    <div className="InputContainer">
                        <label className="labelAccount" htmlFor="">Địa chỉ văn phòng</label> 
                        <input type="text" className="inputAccount"  value={congtyLocation} onChange={(e) => setCongtyLocation(e.target.value)}/>
                    </div>
                    {errors.congtyLocation && <p className="error2">{errors.congtyLocation}</p>}
                    
                   

                </div>
                {/* <div class="break"></div> */}
                <div class="xongUpdate"><button class="btnXong"  onClick={handleSubmit}>Xong</button></div>
            </div>
            </div>
        </div>
        
    )
    
}