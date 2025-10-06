import BreadCrumbs from '@/conponents/BreadCrumbs'
import { Box, Flex, Text } from '@mantine/core'
import { IconHelp, IconSettings } from '@tabler/icons-react'
import React from 'react'

const BreadCrumbsUI = () => {

    const items = [
        { title: "Petty Cash", href: "/" },
        { title: "Request petty cash", href: "/create-petty-cash" },
    ];


    return (
        <div>
            <Flex align='center' justify='space-between' >
                {/* <BreadCrumbs items={items} /> */}
                <BreadCrumbs />

                <Box>

                    <Flex align='center' gap={24}>

                        <Flex align='center' gap={5}>
                            <IconSettings size={12} />
                            <Text size='sm'>
                                Settings
                            </Text>
                        </Flex>

                        <Flex align='center' gap={5} >
                            <IconHelp size={12} />
                            <Text size="sm" >
                                Help
                            </Text>
                        </Flex>

                    </Flex>

                </Box >
            </Flex ></div>
    )
}

export default BreadCrumbsUI