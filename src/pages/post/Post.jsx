import "./post.css"
import PaidIcon from '@mui/icons-material/Paid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useLocation } from "react-router-dom";
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
    const postId = location.pathname.split("/")[2]
    useEffect(()=>{
        const fetchData = async()=> {
            try {
                const res = await axios.get(`https://job-seeker-smy5.onrender.com/job/detail?id=${postId}`)
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
    
    console.log("post ", post)

    // const getText = (html) =>{
    //     const doc = new DOMParser().parseFromString(html, "text/html")
    //     return doc.body.textContent
    //   }
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
                    {post.status === false ? <></> :  <Link to = {`/editPost/?id=${post._id}`} state={post}>
                        <button className="btnEditUser" >Edit</button>
                    </Link> }
                    {post.numApply === 0 ? <></> :  <Link to = {`/applications/${post._id}`}>
                        <button className="btnEditUser" >Hồ sơ</button>
                    </Link> }
                   
                    </div>
                </div>
                <div class="break"></div>
                <div className="info2">
                    <div className="info2Left">
                        <div className="salary"> <PaidIcon className="iconUser"/>{post.salary}</div>
                        <div className="salary"> <CalendarMonthIcon className="iconUser"/>{post.hourWorking}</div>
                        <div className="salary"> <FactoryIcon className="iconUser"/>{occ}</div>
                    </div>
                    <div className="info2Right">
                        <div className="salary"> <UploadIcon className="iconUser"/>{postingDate}</div>
                        <div className="salary"> <HourglassTopIcon className="iconUser"/>{deadline} </div>
                        <div className="salary"> <AttachFileIcon className="iconUser"/>Hồ sơ đã nộp: {post.numApply}</div>
                    </div>
                </div>
                <div class="break"></div>
                <div className="info3"> 
                    <h3 className="desc">Mô tả công việc </h3>
                    <div className="post__description" dangerouslySetInnerHTML={{ __html: post.description}}   />
                </div>
                <div class="break"></div>
                <div className="info4" >
                    <h3 className="desc">Kỹ năng yêu cầu</h3>
                    <div className="post__description"  dangerouslySetInnerHTML={{ __html: post.requirement}}  />
                    </div>
            </div>
        </div>
        </div>

    )
}