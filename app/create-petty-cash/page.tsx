import { Flex, Text, Title } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons-react'
import React from 'react'
import PettyCashForm from './PettyCashForm'

const page = () => {
    return (
        <div style={{ backgroundColor: 'white', minHeight: '100dvh', padding: '15px' }}>
            <Title fz={24}>Initiate Petty Cash Request</Title>

            <Flex maw={1190} mx='auto' bg='#F4F9E8' align='center' gap={10} p={10} mt={15}>

                <IconInfoCircle size={15} color='#40845F' />

                <Text fz={14} c='#00A46C'>
                    Petty cash is a nominal amount of money that is given to a petty cash officer to pay for minor requests or expenses
                </Text>
            </Flex>

            {/* form */}
            <PettyCashForm />
        </div >
    )
}

export default page