import { Button, Container, Text, Flex, HStack, useColorMode } from '@chakra-ui/react'
import { PlusSquareIcon } from "@chakra-ui/icons";
import React from 'react'
import { Link } from 'react-router-dom'
import { LuSun } from 'react-icons/lu';
import { IoMoon } from 'react-icons/io5';



const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode("dark");
  
  

  return (
    <Container maxW={"1140px"} p={4}>
      <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          fontSize={{base: "22", sm:"28"}}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r,cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to="/">Vitrine Digital 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button rounded={"md"}>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button rounded={"md"}onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar
