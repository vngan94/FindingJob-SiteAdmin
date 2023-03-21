import "./postList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { postRows } from "../../dummyData";
import { Link } from "react-router-dom";

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from '../../redux/selector';
import { useEffect, useState } from "react";

export default function PostList() {
  const currentUser = useSelector(selectUser);
  const [data, setData] = useState(postRows);
  const [postList, setPostList] = useState([]);
  useEffect(()=>{
    console.log("current ", currentUser)
    const fetchData = async()=> {
        fetch(`http://localhost:8000/job/list/company/${currentUser._id}`, {
            method: 'GET',
            
        })
        .then((response) => response.json())
        .then((responseData) => { 
        console.log(responseData.data)
        
         })
        .catch((error) => { console.log(error) })
        .done()
    }
    fetchData()
},[])

  

  const handleDelete = (id) => {
    setData(data.filter(item=> item.id !== id))
    
}
  
  console.log(data)
    

    const columns = [
      { field: "id", headerName: "ID", width: 20 },
      {
        field: "post",
        headerName: "Công việc",  // hiện 
        width: 200,
        renderCell: (params)=> {
          return (
            <div className="userListUser">
                {/* <img className="userListImg" src={params.row.avatar}></img> */}
                {params.row.post}
            </div>
          )
        }
        
      },
      { field: "address", headerName: "Địa chỉ", width: 200 },
      {
        field: "uploadDate",
        headerName: "Ngày đăng",
        width: 150,
      },
      {
        field: "deadline",
        headerName: "Hạn nộp",
        width: 150,
      },
      {
        field: "number",
        headerName: "Số lượng hồ sơ",
        width: 120,
      },
      
      {
        field: "action",
        headerName: "Thao tác",
        width: 120,
        renderCell: params => {
          return (
            <div className="action">
              
              <Link to = {`/editPost/${params.row.id}`}>
                <button className="btnEdit" >Edit</button>
              </Link>
              <Link to = {`/post/${params.row.id}`} >
                <RemoveRedEyeIcon className="delete"/>
              </Link>
              <DeleteIcon className="delete" onClick= { ()=> handleDelete(params.row.id)}/>
              
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
            rows={data}
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