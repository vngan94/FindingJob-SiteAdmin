import "./postList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { postRows } from "../../dummyData";
import { Link } from "react-router-dom";
import BlockIcon from '@mui/icons-material/Block';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from '../../redux/selector';
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostList() {
  const currentUser = useSelector(selectUser);
  const [data, setData] = useState(postRows);
  const [postList, setPostList] = useState([]);
  const [postListChange, setPostListChange] = useState([]);
  const [idDelete, setIdDelete] = useState('')
 
  const isAvailable = (x) => {
    var y =  new Date().toISOString().split('T')[0] // yyyy-mm-dd
    return x >= y
  }
  
  const isClose = (status, deadline) => {
    
    if(!status) 
      return "Job đã ẩn"
    return isAvailable( new Date(deadline).toISOString().split('T')[0]) == true ? "Còn hạn nộp hồ sơ" : "Hết hạn nộp hồ sơ"
      
  }
  useEffect(()=>{
    const fetchData = async()=> {
      console.log("in ", currentUser)
        try { 
          const res = await axios.get(`http://localhost:8000/job/list/company/${currentUser._id}`)
          setPostListChange(res.data.data.map(function(item){
            return {
             id: item._id,
             congviec: item.name,
             deadline: (item.deadline != null) ? item.deadline.split("T")[0].split("-").reverse().join("-"): null,
             locationWorking: item.locationWorking,
             postingDate: item.postingDate.split("T")[0].split("-").reverse().join("-"),
            //  status: isAvailable( new Date(item.deadline).toISOString().split('T')[0]) == true ? "Còn hạn nộp hồ sơ" : "Hết hạn nộp hồ sợ"
            status: isClose(item.status, item.deadline)
          }
          }))

      }
      catch(err) {
          console.log(err)
      } 
    }
    fetchData()
    
    
},[idDelete])


  const handleDelete = async (id) => {
    setIdDelete(id)
    try {   
        await fetch("http://localhost:8000/job/delete", {
          method: "DELETE",
          headers: {
            Accept: "application/json",
      
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "_id": id,
          }),
        }).then(response => {
            
            console.log(response);

          }
        );
        
        
      
  } 
  catch(err) {
      console.log(err)
  }
    
}

    const columns = [
      
      {
        field: "congviec",
        headerName: "Công việc",  // hiện 
        width: 200,
        renderCell: (params)=> {
          return (
            <div className="userListUser">
                {/* <img className="userListImg" src={params.row.avatar}></img> */}
                {params.row.congviec}
            </div>
          )
        }
        
      },
      { field: "locationWorking", headerName: "Địa chỉ", width: 200 },
      
      {
        field: "postingDate",
        headerName: "Ngày đăng",
        width: 150,
      },
      {
        field: "deadline",
        headerName: "Hạn nộp",
        width: 150,
      },
      {
        field: "status",
        headerName: "Tình trạng",
        width: 170,
      },
      
      
      {
        field: "action",
        headerName: "Thao tác",
        width: 120,
        renderCell: params => {
          return (
            <div className="action">
              
              {/* <Link to = {`/editPost/?id=${params.row.id}`}>
                <button className="btnEdit" >Edit</button>
              </Link> */}
              <Link to = {`/post/${params.row.id}`} >
                <RemoveRedEyeIcon className="delete" />
              </Link>
              <BlockIcon className="delete" onClick= { ()=> handleDelete(params.row.id)}/>
              
          </div>
          )
          
        }
        
      },
      ];
  
      
    return (
      <div>
        <Topbar/>
        <Sidebar/>
        <div className="others">
            <h2>Danh sách tin tuyển dụng</h2>
            <div className="breaking"></div>
          <DataGrid 
            //  rows={data}
            rows = {postListChange}
            columns={columns}
            pageSize={2}
            rowsPerPageOptions={[2]}
            // disableSelectionOnClick
            // checkboxSelection

        />
        </div>
      </div>
        
    )
}