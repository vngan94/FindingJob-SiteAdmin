import "./post.css"
import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import FactoryIcon from '@mui/icons-material/Factory';
import UploadIcon from '@mui/icons-material/Upload';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Post() {
    const [post, setPost] = useState({})
    const [postingDate, setPostingDate] = useState('')
    const [deadline, setDeadline] = useState('')
    const [occ, setOcc] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const postId = location.pathname.split("/")[2]
    useEffect(()=>{
        const fetchData = async()=> {
            try {
                
                const res = await axios.get(`http://localhost:8000/job/detail?id=${postId}`)
                setPost(res.data.data)
                setOcc(res.data.data.idOccupation.name)
                setPostingDate(res.data.data.postingDate.split("T")[0].split("-").reverse().join("-"))
                setDeadline(res.data.data.deadline.split("T")[0].split("-").reverse().join("-"))
                
                
            }
            catch(err) {
                console.log(err)
            } 
        }
        fetchData()
    },[postId])
    
    console.log(post.requirement)
    const getDate = (date) => {
        return date.split("T")[0].split("-").reverse().join("-")
    }
    return (
        <div>
            <Topbar/>
            <Sidebar/>
        <div className="others">
            
            <div className="userContainer">
                <div className="info1">
                    <div className="title">
                        
                        <h2 className="name">{post.name}</h2>
                        <div className="adress">{post.locationWorking}</div>
                    </div>
                    <div className="action">
                    {/* <Link to={"/write/?edit=2"} state={post}><img  state src={Edit} alt="" /></Link> */}
                    <Link to = {`/editPost/?id=${post._id}`} state={post}>
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
                        <div className="salary"> <PaidIcon className="iconUser"/>{post.salary}</div>
                        <div className="salary"> <CalendarMonthIcon className="iconUser"/>{post.locationWorking}</div>
                        <div className="salary"> <FactoryIcon className="iconUser"/>{occ}</div>
                    </div>
                    <div className="info2Right">
                        <div className="salary"> <UploadIcon className="iconUser"/>{postingDate}</div>
                        <div className="salary"> <HourglassTopIcon className="iconUser"/>{deadline} </div>
                        <div className="salary"> <AttachFileIcon className="iconUser"/>Hồ sơ đã nộp: 0 </div>
                    </div>
                </div>
                <div class="break"></div>
                <div className="info3"> 
                    <h3 className="desc">Mô tả công việc</h3>
                    <div className="post__description" dangerouslySetInnerHTML={{ __html: post.description}}  />
                    
                </div>
                <div class="break"></div>
                <div className="info4" >
                    <h3 className="desc">Kỹ năng yêu cầu</h3>
                    {/* <p>
                        Giọng nói dễ nghe 
                        <br/>
                        Giao tiếp tốt
                    </p> */}
                    <div className="post__description" dangerouslySetInnerHTML={{ __html: post.requirement}}  />
                    </div>
            </div>
        </div>
        </div>

    )
}