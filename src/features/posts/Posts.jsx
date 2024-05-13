import {useEffect, useState} from "react";
import {getPosts} from "../../services/apiFacade.js";
import {NavLink, Outlet} from "react-router-dom";

function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const data = getPosts();
        data.then((data) => {
            setPosts(data)
        })
    }, [])

    return (
        <div>
            <h4>Posts</h4>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h4>{post.header}</h4>
                        <NavLink to={`${post.id}`} state={post}>Read more</NavLink>
                    </div>
                )
            })}
            <Outlet/>
        </div>
    )
}

export default Posts;