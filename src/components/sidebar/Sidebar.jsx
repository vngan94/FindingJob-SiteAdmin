import "./sidebar.css"
import { Link } from "react-router-dom";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    
  } from "@material-ui/icons";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to={"/"} style={{ textDecoration: 'none', color: '#555' }}>
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        </Link>
                        
            
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                    </li>                      
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to={"/users"} style={{ textDecoration: 'none', color: '#555' }} >
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        
            
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li>  
                        <Link to={"/posts"} style={{ textDecoration: 'none', color: '#555' }} >
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Posts
                            </li>
                        </Link>
                                             
                    </ul>
                </div>
            </div>
        </div>
    )
}