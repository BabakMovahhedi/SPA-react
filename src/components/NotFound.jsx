import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <p>Error 404 <br/> nothing find</p>
            <Link to='/' >back to home</Link>
        </div>
     );
}
 
export default NotFound;