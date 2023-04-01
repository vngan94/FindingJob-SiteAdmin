import "./applicationList.css"
import {applicatonRows} from "../../dummyData"
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
export default function ApplicationList () {
    const [data, setData] = useState([])
    const [job, setJob] = useState({
      'name' : '',
      'locationWorking' : ''
    })
    const location = useLocation()
    const postId = location.pathname.split("/")[2]
    useEffect(()=>{
      const fetchData = async()=> {
          try { 
            const res = await axios.get(`http://localhost:8000/application/get-by-jobid?jobid=${postId}`)
            setData(res.data.data.map(function(item){
              return {
               id: item._id,
               submitDate: item.submitDate.split("T")[0].split("-").reverse().join("-"),
               cv: item.cv
            }
            }))
            const res2 = await axios.get(`http://localhost:8000/job/detail?id=${postId}`)
            setJob(res2.data.data)
            
           
  
        }
        catch(err) {
            console.log(err)
        } 
      }
      fetchData()

    
  },[])
  console.log('job ', data.cv)
    const columns = [
        { field: "id", headerName: "ID", width: 200 },
        {
          field: "submiteDate",
          headerName: "Ngày nộp",
          width: 100,
          renderCell: (params)=> {
            return (
              <div className="userListUser">
                  {params.row.submitDate}
              </div>
            )
          }
          
        },
        {
          field: "Thao tác",
          headerName: "Thao tác",
          width: 150,
          renderCell: params => {
            return (
              <div className="action">
                
                <Link to = {`${params.row.cv}` } target="_blank">
                  <button className="btnEdit" >Xem ngay</button>
                </Link>
                
                
            </div>
            )
            
          }
          
        },
        ];
    
    return (
      <div>
        <Topbar/>
        <Sidebar/>
        <div className="othersAppList">
            
            <div className="info">
            <h2>Danh sách hồ sơ</h2>
            <div class="break"></div>
                <h3 className="text2">{job.name}</h3>
                <p className="text"> {job.locationWorking}</p>
            </div>
            <div className="listTable">
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={4}
                    rowsPerPageOptions={[4]} />
            </div>
                
                
        </div>
      </div>



        
    )

}