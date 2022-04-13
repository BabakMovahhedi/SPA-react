import { Link } from "react-router-dom";
const blogs=[
    {name:'blog-1',to:'/blogs/1'},
    {name:'blog-2',to:'/blogs/2'},
    {name:'blog-3',to:'/blogs/3'}
];

const Blogs = () => {
    return ( 
        <div>
            <h2>blog page </h2>
            {blogs.map((blog)=>{
                return (
                    <li key={blog.to} >
                        <Link to={blog.to} >
                            {blog.name}
                        </Link>
                    </li>
                )
            } )}
        </div>
     );
}
 
export default Blogs;
<div>
    <h2>blog page </h2>
</div>