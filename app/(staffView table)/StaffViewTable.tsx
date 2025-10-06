
"use client";

import {
    Box,
    Button,
    Drawer,
    Flex,
    Select,
    Table,
    TableTbody,
    TableTd,
    TableTh,
    TableThead,
    TableTr,
    Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import DrawerComponent from "../create-petty-cash/DrawerComponent";


// ✅ Define a type for your petty cash item
interface PettyCashItem {
    id: string | number;
    name: string;
    staffName: string,
    description: string;
    amount: number;
    date: string;
    status: "Processing" | "Approved" | "Rejected";
}



const StaffViewTable = () => {
    const [elements, setElements] = useState<any[]>([]);
    const [filter, setFilter] = useState<string | null>(null);

    //Drawer state
    const [singleItem, setSingleItem] = useState<PettyCashItem | null>(null)

    const [opened, { open, close }] = useDisclosure(false);


    // Load data from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("pettyCashData");
        if (stored) {
            setElements(JSON.parse(stored));
        }
    }, []);

    //  Filter by status
    const filteredElements = filter ? elements.filter((el) => el.status === filter) : elements;

    const handleOpen = (item: PettyCashItem) => {
        open()
        setSingleItem(item)

        console.log(item);

    }

    const rows = filteredElements.map((element, index) => (
        <TableTr key={element.id}>
            <TableTd p={20} fw={400}>
                {index + 1}
            </TableTd>
            <TableTd p={20} fw={400}>
                {element.name}
            </TableTd>
            <TableTd p={20} fw={400}>
                {element.description}
            </TableTd>
            <TableTd p={20} fw={400}>
                ₦{element.amount?.toLocaleString()}
            </TableTd>
            <TableTd p={20} fw={400}>
                {element.date}
            </TableTd>

            <TableTd p={20} fw={400}>
                <Button
                    color="#F1F5E3"
                    fz={10}
                    py={8}
                    px={16}
                    style={{ color: "#4B4B4B" }}
                >
                    {element.status}
                </Button>
            </TableTd>

            {/* actions buttons */}
            <TableTd p={20} fw={400} style={{ width: "10%" }}>
                <Flex align="center" gap={10} style={{ width: "fit-content" }}>


                    <Drawer opened={opened} onClose={close} title="" position="right">
                        {/* Drawer content */}
                        <DrawerComponent data={singleItem} />
                    </Drawer>

                    {/* drawer */}
                    <Button
                        onClick={() => handleOpen(element)}
                        variant="filled"
                        color="#FFFFFF"
                        radius="xs"
                        size="xs"
                        py={6}
                        px={16}
                        bd="1px solid #CACACA"
                        style={{ color: "#4B4B4B" }}
                    >
                        View
                    </Button>




                    <Button
                        variant="filled"
                        bd="1px solid #00A46C"
                        color="#00A46C"
                        radius="xs"
                        size="xs"
                        py={6}
                        px={16}
                    >
                        Send reminder
                    </Button>
                </Flex>
            </TableTd>
        </TableTr >
    ));

    return (
        <Box>
            {/* Filter dropdown */}
            <Flex align="center" justify="end" my={15}>
                <Select
                    w={120}
                    placeholder="Filter"
                    data={[
                        { value: "Processing", label: "Processing" },
                        { value: "Approved", label: "Approved" },
                        { value: "Rejected", label: "Rejected" },
                    ]}
                    value={filter}
                    onChange={setFilter}
                />
            </Flex>

            <Box bg="white" px={20}>
                <Table.ScrollContainer minWidth={500}>
                    <Table verticalSpacing="md">
                        <TableThead>
                            <TableTr>
                                <TableTh fw={500}>S/N</TableTh>
                                <TableTh fw={500}>Name</TableTh>
                                <TableTh fw={500}>Description</TableTh>
                                <TableTh fw={500}>Amount</TableTh>
                                <TableTh fw={500}>Date</TableTh>
                                <TableTh fw={500}>Status</TableTh>
                                <TableTh fw={500}>Action</TableTh>
                            </TableTr>
                        </TableThead>
                        <TableTbody>{rows}</TableTbody>
                    </Table>
                </Table.ScrollContainer>
            </Box>
        </Box>
    );
};

export default StaffViewTable;
