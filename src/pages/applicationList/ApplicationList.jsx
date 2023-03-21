import "./applicationList.css"
import {applicatonRows} from "../../dummyData"
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import {Link} from "react-router-dom"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
export default function ApplicationList () {
    const [data, setData] = useState(applicatonRows)
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "submiteDate",
          headerName: "Ngày nộp",
          width: 200,
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
          headerName: "Action",
          width: 150,
          renderCell: params => {
            return (
              <div className="action">
                
                <Link to = {`/${params.row.id}/applications`}>
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
                <h3 className="text2">Kế toán nội bộ</h3>
                <p className="text"> Hà Nội</p>
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