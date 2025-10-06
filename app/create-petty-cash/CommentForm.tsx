
'use client'

import { Button, Flex, Textarea } from '@mantine/core'
import React, { useState } from 'react'




// ✅ Define the same Comment type
interface Comment {
    text: string;
    timestamp: string;
}

interface CommentFormProps {
    itemId: string | number;
    onCommentAdded: (newComment: Comment) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ itemId, onCommentAdded }) => {

    const [comment, setComment] = useState<string>('')




    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;

        const newComment: Comment = {
            text: comment,
            // timestamp: new Date().getDate(),
            timestamp: new Date().toLocaleTimeString(),
        };

        //  Load or initialize comments object
        const comments = JSON.parse(localStorage.getItem("comments") || "{}");

        //  Update only this item's comments
        comments[itemId] = [...(comments[itemId] || []), newComment];

        //  Save and refresh view
        localStorage.setItem("comments", JSON.stringify(comments));
        onCommentAdded(newComment);
        setComment("");
    };


    return (
        <form onSubmit={handleSubmit}>

            <Textarea
                placeholder="Write Comment"
                my={15}
                value={comment}
                onChange={(e) => setComment(e.currentTarget.value)}
                styles={{ input: { minHeight: "100px" } }}
            />

            <Flex justify='end' align='center'>
                <Button
                    type="submit"
                    variant="filled"
                    bd="1px solid #00A46C"
                    color="#00A46C"
                    radius="xs"
                    size="xs"
                    mb={10}
                    py={6}
                    px={16}
                >
                    Submit
                </Button>
            </Flex>
        </form>
    )
}

export default CommentForm