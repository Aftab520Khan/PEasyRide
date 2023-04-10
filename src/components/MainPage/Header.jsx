import {
  Box,
  useDisclosure,
  Button,
  ButtonGroup,
  Drawer,
  HStack,
  Image,
  DrawerHeader,
  DrawerContent,
  Heading,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { CgMenuLeftAlt } from "react-icons/cg";
import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./../../assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";


export const Header = () => {
  const [widths, setwidths] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
 // const [userName, setUserName]= useState({})
 // const nav = useNavigate()
 const { loginWithRedirect } = useAuth0();


  useEffect(() => {
      function resize() {
      if (window.innerWidth <= 880) {
        setwidths(true);
      } else {
        setwidths(false);
      }
    }
    resize();
    
  }, []);


  

  return (
    <>
      {widths ? (
        <Box zIndex={"sticky"} w={['', "100%"]}>
          <HStack p="8" shadow={"base"} bgColor="blackAlpha.900" h="8vh">
            <Image  w={["50px", "95px"]} src={logo} marginRight={["0.2", "0"]} />
            <HStack pos="absolute" right="6">
              <Button variant={"unstyled"}  onClick={onOpen}>
                <CgMenuLeftAlt color="white" fontSize={"35px"} />
              </Button>
            </HStack>
            <Drawer isOpen={isOpen}  onClose={onClose} >
              
              
              <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader>
                  <Heading align='center' pb='2' borderBottom='2px solid green'>AutoCare</Heading>
                </DrawerHeader>
                <DrawerBody  align='center' >
                
                  <Button onClick={onClose}   color='darkgreen' variant={'unstyled'} ><Link to={'/'}>Home</Link></Button>
                  <br/>
                  <Button     color='darkgreen' variant={'unstyled'} ><HashLink to={'/#service'}>Service</HashLink></Button>
                  <br/>
                  <Button    color='darkgreen' variant={'unstyled'} ><HashLink  to={'/#mechanic'}>Apply to be a Mechanic</HashLink></Button>
                 
                </DrawerBody>
                <Button onClick={onClose} m='20' colorScheme='green' variant={'outline'}>
                 <Link to='/login'>Login</Link> 
                </Button>
              </DrawerContent>
            </Drawer>
          </HStack>
        </Box>
      ) : (
        <Box zIndex={"sticky"} w={["480px", "100%"]}>
          <HStack p="8" shadow={"base"} bgColor="blackAlpha.900" h="13vh">
            <Image
              w={["50px", "130px"]}
              src={logo}
              marginRight={["0.2", "10"]}
            />
            <ButtonGroup spacing={["2", "10"]}>
              <Button variant={"unstyled"} color="white">
                <Link to={"/"}>Home</Link>
              </Button>

              <Button variant={"unstyled"} color="white">
                <HashLink to="/#service">Service</HashLink>
              </Button>

              <Button variant={"unstyled"} color="white">
                <HashLink to={"/#mechanic"}>Apply to be a Mechanice</HashLink>
              </Button>
            </ButtonGroup>

<HStack pos="absolute" right="20">
<Button colorScheme="green" variant={"outline"} size={"md"}>
  <Link to={"/login"}>Login</Link>
</Button>
</HStack>


</HStack>    
        </Box>
      )}
    </>
  );
};
