const express = require('express');

const router = express.Router();

const commentsController = require('../controllers/commentsController');

router.post('/', (req, res) => {

        if (!req.body.product_id || !req.body.user || !req.body.info) {
            res.status(400).json({
                message: 'Missing product_id, user or info'
            })
            return;
        }

        if (req.body.info.length > 255) {
            res.status(400).json({
                message: 'Info is too long'
            })
            return;
        }

        if (req.body.user.length > 255) {
            res.status(400).json({
                message: 'User is too long'
            })
            return;
        }

        commentsController.createComment(req.body.product_id, req.body.user, req.body.info)
            .then(() => {
                res.status(200).json({
                    message: 'Comment created'
                });
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    message: 'Something went wrong during creating comment'
                })
            })
})

router.delete('/:comment_id', (req, res) => {
    commentsController.deleteComment(req.params.comment_id)
        .then(() => {
            res.status(200).json({
                message: 'Comment deleted'
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Something went wrong during deleting comment'
            })
        })
})

router.patch('/:comment_id', (req, res) => {
    if (!req.body.info) {
        res.status(400).json({
            message: 'Missing info'
        })
        return;
    }

    if (req.body.info.length > 255) {
        res.status(400).json({
            message: 'Info is too long'
        })
        return;
    }

    commentsController.updateComment(req.params.comment_id, req.body.info)
        .then(() => {
            res.status(200).json({
                message: 'Comment updated'
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Something went wrong during updating comment'
            })
        })
})

module.exports = router;
