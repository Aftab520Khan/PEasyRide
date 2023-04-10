import React, { useEffect, useState } from "react";

import {
  Button,
  Stack,
  Tr,
  Heading,
  Thead,
  Spinner,
  TableContainer,
  Th,
  Td,
  Table,
  Tbody,
  
} from "@chakra-ui/react";
import {  AiFillDelete } from "react-icons/ai";

export const Mechanic = () => {
  const [backend, setbackend] = useState([{}]);
  useEffect(() => {
    fetch("/api/mechanic")
      .then((res) => res.json())
      .then((data) => {
        setbackend(data);
      });
  }, []);

  return (
    <>
      <Stack h={"auto"} p="10" >
        <Heading align="center" p='10'> Mechanic's Data</Heading>
        <Table  >
          <Thead>
            <Tr bg={"gray.700"}>
              <Th color={"white"} w='2xl' fontSize="xl">
                Full Name{" "}
              </Th>
              <Th color={"white"}  w='2xl' fontSize="xl">
                Email
              </Th>
              <Th color={"white"}  w='2xl' fontSize="xl">
                Mobile
              </Th>
              <Th color={"white"}  w='2xl' fontSize="xl">
                Zipcode
              </Th>
              <Th color={"white"}  w='2xl' fontSize="xl">
                Delete
              </Th>
            </Tr>
          </Thead>
        </Table>
        {typeof backend.mechanic === "undefined" ? (
          <Spinner m="10" ml="40%" p="10%" color={"darkgreen"} size={"lg"} />
        ) : (
          backend.mechanic.map((mechanic) => (
           
           <TableContainer   pb='10'>
              <Table variant={"striped"} colorScheme="gray">
                <Tbody alignItems={"center"}>
                  <Tr>
                    <Td key={mechanic._id} w='2xl'>
                      {mechanic.lname} {mechanic.fname}
                    </Td>
                    <Td key={mechanic._id} w='2xl'>{mechanic.email}</Td>
                    <Td key={mechanic._id} w='2xl'>{mechanic.mobile}</Td>
                    <Td key={mechanic._id} w='2xl'>{mechanic.zcode}</Td>
                    <Td key={mechanic._id} w='2xl'>{<Button color="red" variant={'unstyled'} fontSize='2xl'><AiFillDelete/></Button>}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          ))
        )}
      </Stack>
    </>
  );
};
