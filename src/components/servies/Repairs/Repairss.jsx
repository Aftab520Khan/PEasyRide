import React ,{useState} from "react";
import data from "./Repair.json";
import { Link } from "react-router-dom";
// import  {
//   AiFillDelete,
//   AiFillFileAdd,
//   AiFillMinusCircle,
//   AiFillPlusCircle,
// } from "react-icons/ai";
import {
  VStack,
  Container,
  Button,
  Heading,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { add } from "../../Store/repairSlice";



export const Repairss = () => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState([])

  

  const handle = (user,e) => {
    
    dispatch(add(user));
    
  };

  const handleChange =(e,id)=>{
    console.log(e.target.value)
    const activeData = document.getElementById(id).checkVisibility()
    console.log(activeData);
    console.log(activeData);
    if (activeData === true) {
      setfirst(old =>[...old,e.target.value])
     
    } else {
      setfirst(first.filter(value =>value !==e.target.value))
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
            <Button colorScheme="green" mt="5" onClick={handle}>
              <Link to={"/booking"}>Next</Link>
            </Button>
          
          </VStack>

         {
          first.map(
            (a,i) => <p key={i}>{a}</p>
          )
         }
        </form>
      </Container>
    </>
  );
};
