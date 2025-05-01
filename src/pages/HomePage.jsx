import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'


const HomePage = () => {

  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("Produtos: ", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
        fontSize={"30"}
        fontWeight={"bold"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
        textAlign={"center"}
        >
          Catálogo de itens
        </Text>

        <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={10}
        w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 ? (        <Text
        fontSize='xl'
        textAlign={"center"}
        fontWeight='bold'
        color='gray.500'>
          Sem itens no catálogo. Que tal <Link to={'/create'}> <Text as='span' color='yellow.500' _hover={{ textDecoration: "underline" }} >incluir</Text></Link> algum?
        </Text>) : null}
      </VStack>
    </Container>
  )
}

export default HomePage
