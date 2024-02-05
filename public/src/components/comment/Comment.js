import React, {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import CommentSkeleton from "./commentSkeleton/CommentSkeleton";

const Comment = ({procuct_id, refreshSignal, refresh}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('/server/products/' + procuct_id + '/comments')
            .then(res => {
                console.log(res.data);
                setComments(res.data);
            }).catch(err => {
                console.log(err);
        })
    }, [procuct_id, refreshSignal]);

        return(
            <Fragment>
                {
                    comments.map(comment => {
                        return (
                             <CommentSkeleton comment={comment} refresh={refresh}/>
                        )
                    })
                }
            </Fragment>
        )
}

export default Comment;