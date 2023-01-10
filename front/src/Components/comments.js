import { useContext, useState } from "react";
import { CommentsContext } from "../Helpers/Context";
import axios from "axios";
import { useEffect } from "react";
const Comments = () => {
    const { addComment, comments, setComments, getComments } = useContext(CommentsContext);
    const [body, setBody] = useState("");

    useEffect(() => {
        getComments();
    }, []);

    return (
        <>
            <div className="comments">
                <div className="commentForm">
                    <form
                        onSubmit={(e) => {
                            getComments();
                            addComment(e, body);
                        }}
                    >
                        <input
                            className="commentInput"
                            type="text"
                            placeholder="Write What's on Your Heart"
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <button className="loginButton">Add a comment</button>
                    </form>
                </div>
                <div className="commentsDisplay">
                    <div className="commentsContainer">
                        {comments.map((comment) => {
                            return (
                                <>
                                    <div className="comment">
                                        <h1>
                                            <code>{comment.user}:</code>
                                        </h1>
                                        <blockquote>
                                            <p>{comment.body}</p>
                                        </blockquote>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comments;
