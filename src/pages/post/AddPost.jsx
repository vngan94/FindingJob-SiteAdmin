import "./addPost.css"

import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import FactoryIcon from '@mui/icons-material/Factory';
import UploadIcon from '@mui/icons-material/Upload';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ReactQuill from 'react-quill';
import { useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
import { selectUser } from '../../redux/selector';
import axios from "axios";
import { post } from "../../utils/axiosAPI";

export default function AddPost() {
    const state = useLocation().state
    console.log("state ", state)
    const [value, setValue] = useState(state?.description||'')
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
    const [postingDate, setPostingDate] = useState(state?.postingDate || '')
    const current = new Date();
    console.log("in ", currentUser._id)
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
        else 
            if(isAvailable(deadline) === false) {
                errs.deadline = "Hạn nộp hồ sơ trễ hơn hoặc bằng thời điểm hiện tại"
                
            }
        if (!description) 
          errs.description = "Vui lòng nhập mô tả công việc";
        if (!requirement) {
            errs.requirement = "Vui lòng nhập yêu công việc";
        if(!selected) {
            errs.selected = "Vui lòng chọn lĩnh vực của công việc";
        }
        
        return errs;
      }
    }

    useEffect(()=>{
        
        const fetchData = async()=> {
            fetch('http://localhost:8000/occupation/list', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${currentUser.accessToken}`,
                    'Accept'       : 'application/json',
                    'Content-Type' : 'application/json',
                },
            })
            .then((response) => response.json())
            .then((responseData) => { 
                setOptionList(responseData.data)
             })
            .catch((error) => { console.log(error) })
            
        }
        fetchData()
    },[])

      const handleSubmit = async(e) => {
        e.preventDefault();
        const errs = validateForm();
        
        if (errs == null) {
            setErrors({});
            axios.defaults.headers.common = {'Authorization': `bearer ${currentUser.accessToken}`}
            try {
                // console.log("in" , name)
                // console.log("desc" , name)
                // console.log("description",description)
                // console.log("requirement",requirement)
                // console.log("hourWorking",hourWorking)
                // console.log("postingDate", postingDate)
                // console.log("deadline", deadline)
                // console.log("salary",salary)
                // console.log("locationWorking", locationWorking)
                 console.log("idOccupation", selected)
                console.log("idcompany", currentUser._id)
                let  dates = deadline.split('-')
                dates = dates[1] + '-' + dates[2] + '-' + dates[0]
                console.log("in ", dates)
                const res = state 
                ? 
                await axios.put("http://localhost:8000/job/update", {
                    "name": name,
                    "description":description,
                    "requirement":requirement,
                    "hourWorking":hourWorking,
                    "postingDate": postingDate,
                    "deadline": dates,
                    "salary":salary,
                    "locationWorking": locationWorking,
                    "idOccupation": selected,
                    "idcompany": state._id ,
                })

                : await axios.post("http://localhost:8000/job/create", {
                    "name": name,
                    "description":description,
                    "requirement":requirement,
                    "hourWorking":hourWorking,
                    "postingDate": current.toLocaleDateString(),
                    "deadline": deadline,
                    "salary":salary,
                    "locationWorking": locationWorking,
                    "idOccupation": selected,
                    "idcompany": currentUser._id,
                   
                  })
                  state ? alert("Cập nhật job thành công") : alert("Thêm job thành công") 
                    
                navigate("/posts")
            } 
            catch(err) {
                console.log(err)
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
                                {optionList.map((m, ix) =>
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

