import { Route, Routes } from "react-router";
import Downlaod from "../components/Downlaod";
import Upload from "../components/Upload";
import SideBar from "../components/SideBar";

const profile = () => {
    return (
        <div>
          <h2>profile page</h2>
          <SideBar/>
         <Routes>
          <Route path='download' element={<Downlaod/>} />
          <Route path='upload' element={<Upload/>} />
         </Routes>
          
        </div>
      );
}
 
export default profile;