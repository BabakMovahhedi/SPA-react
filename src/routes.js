import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./components/NotFound";
import Profile from "./pages/Profile";


const routes=[
    {path:'/' ,element:{Home } , id:1},
    {path:'/profile' ,element:{Profile } ,id:2},
    {path:'/about' ,element:{AboutUs }, id:3},
    {path:'*' ,element:{NotFound } ,id:4}
];

export default routes;