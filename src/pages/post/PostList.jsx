import "./postList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import BlockIcon from "@mui/icons-material/Block";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selector";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'

export default function PostList() {
  const currentUser = useSelector(selectUser);
  const [postListChange, setPostListChange] = useState([]);
  const [idDelete, setIdDelete] = useState("");
  const searchname = useLocation().search;

  const isAvailable = (x) => {
    var y = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
    return x >= y;
  };

  const isClose = (status, deadline) => {
    if (!status) return "Công việc đã ẩn";
    return isAvailable(new Date(deadline).toISOString().split("T")[0]) === true
      ? "Còn hạn nộp hồ sơ"
      : "Hết hạn nộp hồ sơ";
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn ẩn công việc?',
      text: "Người tìm việc sẽ không thấy, không ứng tuyển công việc này và bạn không thể cập nhật công việc được nữa ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch("https://job-seeker-smy5.onrender.com/job/delete", {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${currentUser.accessTokenn}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _id: id,
            }),
          }).then((response) => {});
          setIdDelete(id);
    
        } catch (err) {
          console.log(err);
        }
        Swal.fire(
          'Xong!',
          'Công việc đã được ẩn.',
          'success'
        )
      }
    })

    
  };
  useEffect(() => {

    const fetchData = async () => {
      try {
        console.log("currentUser", currentUser)
        axios.defaults.headers.common = {'Authorization': `bearer ${currentUser.accessTokenn}`}
        const res = await axios.get(
          `https://job-seeker-smy5.onrender.com/job/list/company/admin/${currentUser.congtyId}/${searchname}`

        );
        console.log(res.data.data);
        setPostListChange(
          res.data.data.map(function (item) {
            return {
              id: item._id,
              congviec: item.name,
              deadline:
                item.deadline != null
                  ? item.deadline.split("T")[0].split("-").reverse().join("-")
                  : null,
              locationWorking: item.locationWorking,
              postingDate: item.postingDate
                .split("T")[0]
                .split("-")
                .reverse()
                .join("-"),
              status: isClose(item.status, item.deadline),
            };
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log("useEffect");
  }, [idDelete, searchname, currentUser]);

  const columns = [
    {
      field: "congviec",
      headerName: "Công việc",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.congviec}</div>;
      },
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
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/post/${params.row.id}`}>
              <RemoveRedEyeIcon className="delete" />
            </Link>
            <BlockIcon
              className="delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Topbar />

      <Sidebar />

      <div className="others">
        <h2>Danh sách tin tuyển dụng</h2>
        <div className="breaking"></div>
        <DataGrid
          rows={postListChange}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[4]}
        />
      </div>
    </div>
  );
}
