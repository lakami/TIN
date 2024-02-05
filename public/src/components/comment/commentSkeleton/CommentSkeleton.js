import React, {useState} from "react";
import {Card, CardContent, Skeleton, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";



export default function CommentSkeleton({comment, refresh}) {

    const [loading, setLoading] =useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editedComment, setEditedComment] = useState(comment.info);
    const [sendButtonDisabled, setButtonDisabled] = useState(true);

    const handleEditCommentChange = (event) => {
        setEditedComment(event.target.value);
        if (event.target.value.length > 0 && event.target.value.length < 255) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }

    const toggleEditMode = () => {
        if (!editMode) {
            setEditedComment(comment.info);
        }
        setEditMode(!editMode);
    }

    const deleteComment = () => {
        axios.delete('/server/comments/' + comment.comments_id)
            .then(res => {
                console.log(res.data);
                refresh();
            }).catch(err => {
            console.log(err);
        })
    }

    const patchComment = () => {
        setLoading(true);
        axios.patch('/server/comments/' + comment.comments_id, {
            info: editedComment
        }).then(res => {
            console.log(res.data);
            refresh();
            setLoading(false);
            setEditMode(false);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <Card
            variant="outlined"
            sx={{ width: 'max(400px, 60%)', borderRadius: 0, '--Card-radius': 0 }}
        >
            <CardContent orientation="horizontal">
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography>{comment.user}</Typography>
                        <Typography>{comment.date}</Typography>
                    </Box>
                    <Box>
                        <Button onClick={deleteComment} variant="contained">USUŃ</Button>
                    </Box>
                </Box>

            </CardContent>
            <CardContent sx={{ gap: 0.5, mt: 1, display: "flex", flexDirection: "column" }}>
                {editMode ?
                    <Box sx={{
                        display: 'flex',
                        gap: 1,
                    }}>
                        <TextField fullWidth value={editedComment} onChange={handleEditCommentChange}/>
                        <Button onClick={patchComment} variant="contained" disabled={sendButtonDisabled || loading}>WYŚLIJ</Button>
                    </Box>
                    : <Typography>{comment.info}</Typography>}

                <Button onClick={toggleEditMode} variant="contained">{ editMode ? "ANULUJ" : "EDYTUJ" }</Button>
            </CardContent>
        </Card>
    );
}
