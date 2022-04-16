import { BrowserRouter,Routes,Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import NotFound from './components/NotFound';
import Blogs from './pages/Blogs';
import BlogDetail from './components/BlogDetail';
import './App.css';

const App = () => {
  return ( 
    <BrowserRouter>       
    <Layout>
    <Routes>     
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<AboutUs />} />
      <Route path='/profile/*' element={<Profile />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/:id' element={<BlogDetail />} />
      <Route path='*' element={<NotFound />} />
    </Routes> 
      </Layout>     
    </BrowserRouter> 
   
  );
}
 
export default App;
