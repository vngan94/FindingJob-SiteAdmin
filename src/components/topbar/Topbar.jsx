import React from "react";
import "./Topbar.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { logout } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken, selectRefreshToken } from "../../redux/selector";



export default function Topbar() {
    const accessToken = useSelector(selectAccessToken);
    const refreshToken = useSelector(selectRefreshToken);
    const dispatch = useDispatch();

    const handleLogout = () => {
        logout(accessToken, refreshToken, dispatch);
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                
                <div className="topLeft">
                    <p className="logo">GLINTS</p>
                </div>
                <div className="search">
                    
<div class="one">
  <input type="text" className="inputSearch" placeholder="Tìm kiếm"/>
  <button type="submit" className="buttonSearch"> <SearchIcon className="searchIcon"/></button>
</div>
                </div>
                <div className="topRight">
                    <Link to={"/addPost"}  style={{ textDecoration: 'none', color: 'darkblue' }}>
                        <Button className="btnPosting">Đăng tin tuyển dụng</Button>
                    </Link>
                    
                    <Link to={"/recLogin"}  style={{ textDecoration: 'none', color: 'darkblue' }}  onClick={handleLogout} >
                        <div className="topbarIcons">
                                <LogoutIcon />
                        </div>
                    </Link>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                   
                    
                </div>
            </div>
        </div>
    )
}