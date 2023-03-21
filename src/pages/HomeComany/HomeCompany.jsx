
import "./homeCompany.css"

import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
export default function HomeCompany() {
    

    return (
        <div>
            <Topbar/>
            <Sidebar/>
            <div className="others">
                <button  >Click tao</button>
            </div>
        </div>
        
    )
    
}