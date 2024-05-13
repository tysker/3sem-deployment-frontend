import {useLocation, useParams} from "react-router-dom";

function PostContent() {
    let params = useParams()
    const post = useLocation().state

    return (
        <div>
            <h4>Post ID: {params.postId}</h4>
            <h4>{post.header}</h4>
            <p>{post.content}</p>
        </div>
    )
}

export default PostContent;