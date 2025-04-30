import { useState } from 'react'
import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import { useProductStore } from '../store/product';


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const toast = useToast();

  const{ createProduct }=useProductStore()

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct)
    if(!success) {
      toast({
        title: "Erro",
        description: message,
        status: "error",
        isClosable: true
      })
    } else {
      toast({
        title: "Sucesso",
        description: message,
        status: "success",
        isClosable: true
      })
    }
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Listar Novo Produto
        </Heading>
        <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input 
            placeholder='Nome do Produto'
            name='name'
            value={newProduct.name}
            onChange={(e) => setNewProduct(
              {...newProduct, name: e.target.value})}/>
            <Input 
            placeholder='Preço do Produto'
            name='price'
            value={newProduct.price}
            onChange={(e) => setNewProduct(
              {...newProduct, price: e.target.value})}/>            <Input 
            placeholder='Foto do Produto'
            name='image'
            value={newProduct.image}
            onChange={(e) => setNewProduct(
              {...newProduct, image: e.target.value})}/>
              <Button colorScheme='blue' onClick={handleAddProduct} w='full'>Incluir Produto</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
