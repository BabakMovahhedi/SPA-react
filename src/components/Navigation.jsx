import { Link } from "react-router-dom";
const Navigation = (props) => {
    
    return ( 
        <nav>
     <ul>
     <li>
        <Link to='/'>home </Link>    
      </li>
      <li>
        <Link to='/about'>about us </Link>    
      </li>
      <li>
        <Link to='/profile'>profile </Link>    
      </li>
      <li>
        <Link to='/blogs'>blogs </Link>    
      </li>
     </ul>
      </nav>  
     );
}
 
export default Navigation;