
"use client";

import { TextInput, Textarea, NumberInput, Flex, Button, Box } from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";
import Link from "next/link";
import React, { useState } from "react";



const PettyCashForm = () => {
    const [staffID, setStaffID] = useState<string>("");
    const [date, setDate] = useState<Date | string | null>(null);
    const [name, setName] = useState<string>("");
    const [staffName, setStaffName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<number | string | undefined>();



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newEntry = {
            id: Date.now(),
            staffID,
            date: date ? date.toString().split("T")[0] : "",
            name,
            staffName,
            description,
            amount,
            status: "Processing",
        };


        //  Merge with existing data or create a new list
        const pettyCashData = JSON.parse(localStorage.getItem("pettyCashData") || "[]");
        pettyCashData.push(newEntry);
        localStorage.setItem("pettyCashData", JSON.stringify(pettyCashData));

        // clear form
        setStaffID("");
        setDate(null);
        setName("");
        setStaffName("");
        setDescription("");
        setAmount(undefined);

        alert("Petty cash request saved!");
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Flex justify="space-between" align="center" wrap="nowrap" w="100%" gap={50}>
                <TextInput
                    label="Staff ID"
                    placeholder="Staff ID"
                    w="100%"
                    my={15}
                    value={staffID}
                    onChange={(e) => setStaffID(e.currentTarget.value)}
                />

                {/* <DatePickerInput */}
                <DateInput
                    value={date}
                    onChange={(value) => setDate(value as Date | null)}
                    label="Date"
                    placeholder="Select date"
                    my={15}
                    w="100%"
                    clearable
                />

            </Flex>

            <TextInput
                label="Name"
                placeholder="Name"
                my={15}
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
            />

            <TextInput
                label="Staff Name"
                placeholder="Staff Name"
                my={15}
                value={staffName}
                onChange={(e) => setStaffName(e.currentTarget.value)}
            />

            <Textarea
                label="Description"
                placeholder="Write description"
                my={15}
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                styles={{ input: { minHeight: "100px" } }}
            />

            <NumberInput
                label="Amount"
                placeholder="Amount"
                hideControls
                my={15}
                value={amount}
                onChange={setAmount}
            />

            <Flex gap="md" justify="space-between" align="center" direction="row" wrap="wrap" mt={20} my={15}>
                <Button
                    component={Link}
                    href='/'
                    type="button"
                    variant="filled"
                    bd="1px solid #CACACA"
                    color="#FFFFFF"
                    radius="xs"
                    size="xs"
                    py={6}
                    px={16}
                    style={{ color: "#4B4B4B" }}
                    onClick={() => {
                        // clear form only
                        setStaffID("");
                        setDate(null);
                        setName("");
                        setStaffName("");
                        setDescription("");
                        setAmount(undefined);
                    }}
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    variant="filled"
                    bd="1px solid #00A46C"
                    color="#00A46C"
                    radius="xs"
                    size="xs"
                    py={6}
                    px={16}
                >
                    Submit
                </Button>



            </Flex>
        </Box>
    );
};

export default PettyCashForm;
