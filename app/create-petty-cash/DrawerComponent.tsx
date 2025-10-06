'use client'

import { Box, Container, Divider, Flex, Text, Title } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm';




interface PettyCashItem {
    id: string | number;
    name: string;
    staffName: string,
    description: string;
    amount: number;
    date: string;
    status: "Processing" | "Approved" | "Rejected";
}






//✅ 
interface Comment {
    text: string;
    timestamp: string;
}

const DrawerComponent = ({ data }: { data: PettyCashItem | null }) => {

    const [comments, setComments] = useState<Comment[]>([]);

    // ✅ Load comments when Drawer opens for a specific petty cash item
    useEffect(() => {
        if (!data?.id) return;
        const stored = localStorage.getItem('comments');
        if (stored) {
            const parsed = JSON.parse(stored);
            setComments(parsed[data.id] || []);
        }
    }, [data?.id]);

    const handleNewComment = (newComment: Comment) => {
        setComments((prev) => [...prev, newComment]);
    };


    return (
        <Container size={900}>


            <Title fz={24}>Petty Cash Name here</Title>
            <Text mt={5}>Created: Yesterday</Text>
            <Divider my="md" />


            <Box>

                <Flex justify='space-between' align='center' my={10}>
                    <Text c='#717171'>Name: </Text>
                    <Text>{data?.name}</Text>
                </Flex>

                <Flex justify='space-between' align='center' my={10}>
                    <Text c='#717171'>Amount: </Text>
                    <Text>₦{data?.amount}</Text>
                </Flex>

                <Flex justify='space-between' align='center' my={10}>
                    <Text c='#717171'>Staff ID: </Text>
                    <Text>{data?.id}</Text>
                </Flex>

                <Flex justify='space-between' align='center' my={10}>
                    <Text c='#717171'>Staff Name: </Text>
                    <Text>{data?.staffName}</Text>
                </Flex>

                <Flex justify='space-between' align='center' my={10}>
                    <Text c='#717171'>Business Unit: </Text>
                    <Text>Staff</Text>
                </Flex>

                <Flex justify='space-between' align='center' my={10}>
                    <Text c='#717171'>Payment Method: </Text>
                    <Text>Transfer</Text>
                </Flex>

            </Box>

            <Divider my="md" />


            <Text fz={16} fw={500}> Description</Text>
            <Text fz={14} fw={400} c='#717171'> {data?.description}</Text>

            <Divider my="md" />


            <Text fz={14} fw={400}> Comments</Text>

            {/* commentForm */}
            {/* ✅ Comment form */}
            {data?.id && (
                <CommentForm itemId={data.id} onCommentAdded={handleNewComment} />
            )}

            {/* ✅ Show existing comments */}
            {comments.length > 0 ? (
                comments.map((c, i) => (
                    <Box
                        key={i}
                        bg="#f8f8f8"
                        p={10}
                        mb={8}
                        style={{ borderRadius: 8 }}
                    >
                        <Flex justify='end' align='center' mb={5} fz={12} color="dimmed" mt={4}>
                            Created {c.timestamp}
                        </Flex>
                        <Text fz={14}>{c.text}</Text>

                    </Box>
                ))
            ) : (
                <Text fz={14} color="dimmed">
                    No comments yet.
                </Text>
            )}
        </Container>
    )
}

export default DrawerComponent