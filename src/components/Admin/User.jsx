import React, { useEffect, useState } from "react";
import {AiFillDelete} from 'react-icons/ai'
import {
  Button,
  Box,
  Heading,
  Text,
  Table,
  Tr,
  Td,
  Th,
  Spinner,
  TableContainer,
  Thead,
  Tbody,
  Icon,
} from "@chakra-ui/react";

export const User = () => {
  const [backend, setbackend] = useState([{}]);
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setbackend(data);
      });
  }, []);

  return (
    <>
      <Box p="10" h="auto">
        <Heading align="center" p='10'>User Data</Heading>
        <Table  >
                <Thead >
                <Tr bg={'gray.700'} >
                  <Th color={'white'} w='80' fontSize='xl' > Name</Th>
                  <Th color={'white'} w='80' fontSize='xl'>Email</Th>
                  <Th color={'white'} w='40' fontSize='xl'>Delete</Th>
                  </Tr>
                  </Thead>
              </Table>
        {typeof backend.users === "undefined" ? (
         <Spinner m='10' ml='40%' p='10%'color={'green'}  size={'lg'}/>
        ) : (
          backend.users.map((user) => (
            <>
            <TableContainer  >
              <Table  variant={'striped'} colorScheme='gray' >
                 <Tbody align={'center'}>
                    <Tr >
                  <Td w={'80'} key={user._id}>{user.name}</Td>
                  <Td  w={'80'} key={user._id} >{user.email}</Td>
                  <Td w={'40'} key={user._id}  >
                   <Button fontSize={'2xl'} key={user._id} variant='unstyled' color='red'> <AiFillDelete/></Button>
                    </Td>
                  </Tr>
                  </Tbody>
              </Table>
              </TableContainer>
            </>
          ))
        )}
      </Box>
    </>
  );
};










