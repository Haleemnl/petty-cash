

import { Box, Button, Flex, Text } from "@mantine/core";

import Link from "next/link";
import StaffViewTable from "./(staffView table)/StaffViewTable";

export default function Home() {



  return (
    <div  >

      <Box mt={25} bg='white' py={5} px={{ base: 20, md: 40 }} >

        <Flex justify='space-between' align='center'>
          <Flex align='center' gap={{ base: 10, md: 30 }}>
            <Text fz={{ base: 'xs', md: 'sm' }}>Description</Text>
            <Text fz={{ base: 'xs', md: 'sm' }}>All Requests</Text>

          </Flex>


          <Button component={Link} href='/create-petty-cash' variant="filled" color="#00A46C" bd='1px solid #40845F' size="xs" radius="xs">Create New</Button>
        </Flex>

      </Box>




      <StaffViewTable />
    </div >
  );
}
