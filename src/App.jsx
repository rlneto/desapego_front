import { Alert, AlertIcon, Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";


function App() {

  return (
    <>

      <Box minH={"100vh"} w={'full'} bg={useColorModeValue("gray.100", "gray.900")}>
          <Alert status='info' justifyContent={'center'}>
          <AlertIcon />
            Informação: Não armazenamos seus dados pessoais.
        </Alert>

        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>

    </>
  )
}

export default App
