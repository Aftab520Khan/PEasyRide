import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Heading,
  Stack,
  HStack,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import { CgMenuLeftAlt } from "react-icons/cg";

export const Admin = () => {
  const nav = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Heading align="center" p="10">
        Admin
      </Heading>

      <Box>
        <Stack>
          <HStack pos="absolute" p="10">
            <Button variant={"unstyled"} onClick={onOpen}>
              <CgMenuLeftAlt color="white" fontSize={"35px"} />
            </Button>
          </HStack>
          <Drawer isOpen={isOpen} onClose={onClose}>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Heading align="center" pb="2" borderBottom="2px solid green">
                  AutoCare
                </Heading>
              </DrawerHeader>
              <DrawerBody align="center">
                <Button
                  onClick={onClose}
                  color="darkgreen"
                  variant={"unstyled"}
                >
                  <Link to={"/user"}>User's</Link>
                </Button>
                <br />
                <Button color="darkgreen" variant={"unstyled"}>
                  <Link to="/mechanic">Mechanic</Link>
                </Button>
                <br />
              </DrawerBody>
              <Button
                onClick={onClose}
                m="20"
                colorScheme="green"
                variant={"outline"}
              >
                <Link to="/">Logout</Link>
              </Button>
            </DrawerContent>
          </Drawer>
        </Stack>
      </Box>
    </>
  );
};
