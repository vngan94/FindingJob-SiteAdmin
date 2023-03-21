import React from "react";
import "./Topbar.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                
                <div className="topLeft">
                    <p className="logo">GLINTS</p>
                </div>
                <div className="topRight">
                    <Link to={"/addPost"}  style={{ textDecoration: 'none', color: 'darkblue' }}>
                        <Button className="btnPosting">Đăng tin tuyển dụng</Button>
                    </Link>
                    
                    <Link to={"/recLogin"}  style={{ textDecoration: 'none', color: 'darkblue' }}>
                        <div className="topbarIcons">
                                <LogoutIcon/>
                        </div>
                    </Link>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                   
                    
                </div>
            </div>
        </div>
    )
}