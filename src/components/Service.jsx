import { Box, Card, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import React from "react";
import r from "../assets/r.png";
import ci from "../assets/ci.png";
import d from "../assets/d.png";
import { useNavigate } from "react-router-dom";

export const Service = () => {
  const navigate = useNavigate();

  return (
    <Stack paddingTop={20} align="center">
      <HStack spacing={[10, 20]} wrap="wrap">
        <Box w={["full", "14vw"]}>
          <Card cursor="pointer">
            <Image src={r} w={["full", "70"]} objectFit={"cover"} />
            <Heading my="6" align={"center"} size="18">
              Repairs
            </Heading>
          </Card>
        </Box>

        <Box w={["full", "13vw"]} pt={[20, 0]}>
          <Card cursor="pointer">
            <Image src={d} w={["full", "70"]} objectFit={"cover"} />
            <Heading my="6" align={"center"} size="18">
              Diagnostics
            </Heading>
          </Card>
        </Box>

        <Box w={["full", "13vw"]} pt={[20, 0]}>
          <Card cursor="pointer">
            <Image src={ci} w={["50", "70"]} objectFit={"cover"} />
            <Heading pb="1" align={"center"} size="18">
              Pre-purchase <br />
              Inspections
            </Heading>
          </Card>
        </Box>
      </HStack>
    </Stack>
  );
};
