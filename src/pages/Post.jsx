import Posts from "../features/posts/Posts.jsx";
import {Outlet} from "react-router-dom";

function Post() {
    return (
        <div>
            <Posts/>
            <Outlet/>
        </div>
    );
}

export default Post;