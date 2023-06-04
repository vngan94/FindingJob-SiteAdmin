import "./addPost.css"
import { toast } from "react-toastify";
import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {  useLocation, useNavigate } from "react-router-dom";
import FactoryIcon from '@mui/icons-material/Factory';

import HourglassTopIcon from '@mui/icons-material/HourglassTop';

import ReactQuill from 'react-quill';
import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

import { useSelector } from "react-redux";
import { selectUser } from '../../redux/selector';
import axios from "axios";


export default function AddPost() {
    const state = useLocation().state
    const currentUser = useSelector(selectUser);
    const [requirement, setRequirement] = useState(state?.requirement||'')
    const [optionList,setOptionList] = useState([]);
    const [selected, setSelected]  = useState(state?.idOccupation._id||'');
    const [name, setName] = useState(state?.name||'')
    const [locationWorking, setLocationWorking] = useState(state?.locationWorking||'')
    const [salary, setSalary] = useState(state?.salary||'')
    const [hourWorking, setHourWorking] = useState(state?.hourWorking||'')
    const [deadline, setDeadline] = useState(state?.deadline.split('T')[0]||'')
    const [description, setDescription] = useState(state?.description||'')
    const [postingDate] = useState(state?.postingDate || '')

    const current = Date.now()
    const navigate = useNavigate()
    const isAvailable = (x) => {
        var y =  new Date().toISOString().split('T')[0] // yyyy-mm-dd
        return x >= y
      }
    
    const [errors, setErrors] = useState({
        name: '',
        locationWorking: '',
        salary: '',
        hourWorking: '',
        deadline: '',
        description:'',
        requirement: '',
        selected: ''
      });

      const validateForm = () => {
        const errs = {};
        if (!name) {
          errs.name = "Vui lòng nhập tên công việc!";
        }
        if (!locationWorking) {
          errs.locationWorking = "Vui lòng nhập địa chỉ làm việc!";
        }
        
        if (!salary) {
          errs.salary = "Vui lòng nhập lương";
        }
        if (!hourWorking) {
          errs.hourWorking = "Vui lòng nhập thời gian làm việc";
        }
        if (!deadline) {
            errs.deadline = "Vui lòng nhập thời hạn nộp hồ sơ";
        }
        else if(isAvailable(deadline) === false) 
                errs.deadline = "Hạn nộp hồ sơ trễ hơn hoặc bằng thời điểm hiện tại"
      
        if (!description) 
          errs.description = "Vui lòng nhập mô tả công việc";
 
        if (!requirement) 
            errs.requirement = "Vui lòng nhập yêu công việc";
        
        if(!selected) {
          
            errs.selected = "Vui lòng chọn lĩnh vực của công việc";
        }
        return errs;
      }
    

    useEffect(()=>{
        const fetchData = async()=> {
            fetch('https://job-seeker-smy5.onrender.com/occupation/list', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${currentUser.accessToken}`,
                    'Accept'       : 'application/json',
                    'Content-Type' : 'application/json',
                },
            })
            .then((response) => response.json())
            .then((responseData) => { 
                setOptionList(responseData.data.data)
             })
            .catch((error) => { console.log(error) })
            
        }
        fetchData()
    },[])

    
 
      const handleSubmit = async(e) => {
        e.preventDefault();
        const errs = validateForm();
        
        if (Object.keys(errs).length === 0) {
          
            setErrors({});
            axios.defaults.headers.common = {'Authorization': `bearer ${currentUser.accessTokenn}`}
            try {
                let  dates = deadline.split('-')
                dates = dates[1] + '-' + dates[2] + '-' + dates[0]
                const res = state 
                ? 
                await axios.put("https://job-seeker-smy5.onrender.com/job/update", {

                    "name": name,
                    "description":description,
                    "requirement":requirement,
                    "hourWorking":hourWorking,
                    "postingDate": postingDate,
                    "deadline": dates,
                    "salary":salary,
                    "locationWorking": locationWorking,
                    "idOccupation": selected,
                    "idCompany": currentUser.congtyId                    ,
                    "_id": state._id ,
                })

                :
                 await axios.post("https://job-seeker-smy5.onrender.com/job/create", {
                  
                    "name": name,
                    "description":description,
                    "requirement":requirement,
                    "hourWorking":hourWorking,
                    "postingDate": current,
     
                    "deadline": deadline,
                    "salary":salary,
                    "locationWorking": locationWorking,
                    "idOccupation": selected,
                    "idCompany": currentUser.congtyId                    ,

                    
                  })
                  
              
                  state ? toast("Cập nhật thành công") : toast("Thêm thành công") 
                  
                navigate("/posts")
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
            <h1 className="newpost">Đăng tin tuyển dụng</h1>
                <div className="post1">
                    <div className="nameJob">
                        <label htmlFor="">Tên công việc</label>
                        <input type="text" value={name} placeholder="Tên công việc" className="inputPost1"
                        onChange={ (e) => setName(e.target.value) }/>
                        {errors.name && <p className="error2">{errors.name} </p>}
                    </div>
                    <div className="nameJob">
                        <label htmlFor="">Nơi làm việc</label>
                        <input type="text" value={locationWorking} placeholder="Địa chỉ" className="inputPost1" 
                        onChange={ (e) => setLocationWorking(e.target.value)}/>
                        {errors.locationWorking && <p className="error2">{errors.locationWorking} </p>}
                    </div>
                </div>
               
                <div className="post2">
                    <div className="post2Left">
                        <div className="salary"> 
                            <PaidIcon className="iconUser"/>
                            <input type="text" value={salary} name="" id=""  placeholder="Lương"  
                            onChange={ (e) => setSalary(e.target.value)}/>
                            
                        </div>
                        {errors.salary && <p className="error2">{errors.salary} </p>}
                        <div className="salary"> 
                            <CalendarMonthIcon className="iconUser"/>
                            <input type="text" name="" id="" value={hourWorking} placeholder="Thời gian làm việc"
                            onChange={(e) => setHourWorking(e.target.value)}/>
                            
                        </div>
                        {errors.hourWorking && <p className="error2">{errors.hourWorking} </p>}
                       
                    </div>
                    <div className="post2Right">
                        <div className="salary2"> 
                            <FactoryIcon className="iconUser"/>
                            <select value={selected} className="dropdown" onChange={(e) => setSelected(e.target.value)}>
                                <option  value="">Chọn lĩnh vực</option>
                                
                                {optionList.map((m) =>
                                    <option  key={m.id}  value={m._id} >{m.name} </option>)}
                            </select>
  
      
                        </div>
                        {errors.selected && <p className="error2">{errors.selected} </p>}
                        <div className="salary"> 
                            <HourglassTopIcon className="iconUser"/>
                            <input type="date" value={deadline} name="" id="" className="deadline"  placeholder="Hạn nộp hồ sơ"
                             onChange={(e) => setDeadline(e.target.value)}/>
                            
                        </div>
                        {errors.deadline && <p className="error2">{errors.deadline}</p>}
                        
                    </div>
                </div>
                <div class="break"></div>
                <div className="info3"> 
                    <h3 className="desc">Mô tả công việc</h3>
                    <ReactQuill theme="snow" className="editorDesc" value={description} onChange={ setDescription} />
                </div>
               
                {errors.description && <p className="error4">{errors.description}</p>}
              
                
                
                <div className="info4" >
                    <h3 className="desc">Kỹ năng yêu cầu</h3>
                    <ReactQuill theme="snow" className="editorSkill" value={requirement} onChange={setRequirement} />
                </div>
                {errors.requirement && <p className="error3">{errors.requirement}</p>}
                
                <div  className="xong" >
                    <button className="btnXong" onClick={handleSubmit}>Xong</button>
                </div>
            </div>
        </div>
        </div>

    )
}

