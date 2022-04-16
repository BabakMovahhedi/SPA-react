import { Link } from "react-router-dom";


const SideBar = () => {
    return ( 
        <ul className="aside">
            <li>
                <Link   to='/Profile/download' >Download</Link>
            </li>
            <li>
                <Link  to='/Profile/upload' >Upload</Link>
            </li>
        </ul>
     );
}
 
export default SideBar;