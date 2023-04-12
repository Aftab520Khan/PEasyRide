import React ,{useState} from "react";
import data from "./Repair.json";
import { Link } from "react-router-dom";

import {
  VStack,
  Container,
  Button,
  Heading,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'


export const Repairss = (props) => {
  const nav = useNavigate()

  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });

  

  const handleChange =(e)=>{
    const { value, checked } = e.target;
    const { languages } = userinfo; 
    console.log(`${value} is ${checked}`);
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }
    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }   
  }

  return (
    <>
      <Container maxW="container.xl" h={["auto", "auto"]} p="16">
        <form >
          <VStack
            alignItems={"stretch"}
            spacing="8"
            w={["auto", "96"]}
            m="auto"
            bgColor="gray.900"
            p="10"
            color="white"
            borderRadius={15}
          >
            <Heading align="center" borderBottom={"1px solid green"} p="6">
              Repairs
            </Heading>
            {data.map((user) => (
              <div key={user.id}>
                <Heading >
                    <Checkbox
                      id={user.id}
                      value={user.name}
                      onChange={e => handleChange(e,user.id)}
                      focusBorderColor="darkgreen"
                      colorScheme="green"
                      border={" 2px green"}
                      spacing='4'
                    >
                      {user.name}
                    </Checkbox>
                  
                </Heading>
              </div>
            ))}
            <Button colorScheme="green" mt="5" onClick={()=>nav('/')}>
             Next
            </Button>
          
          </VStack>
        </form>
      </Container>
    </>
  );
};

