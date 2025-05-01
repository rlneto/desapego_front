import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, IconButton, Image, useColorModeValue, Heading, Text, useToast, useDisclosure, Modal, ModalBody, Input, ModalFooter, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useProductStore } from '../store/product';

const ProductCard = ({product}) => {

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const textColor  = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

	const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const {isOpen, onOpen, onClose} = useDisclosure();


  const handleDeleteButton = async (pid) => {
    const {success, message} = await deleteProduct(pid);
    if(!success){
      toast({
        title: 'Erro',
        description: message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Sucesso',
        description: message,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onClose();
    if (!success) {
      toast({
        title: "Erro",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Sucesso",
        description: "Produto atualizado com sucesso!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  
  return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow='hidden'
    transition='all 0.3s'
    _hover={{
      transform: "translateY(-5px)",
      shadow:"xl"
    }}
    bg={bg}
    >
      <Image  src={product.image} alt={product.name} h={48} w='full' objectFit='cover' align={'top'}/>

      <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} colorScheme='blue' onClick={onOpen}/>
          <IconButton icon={<DeleteIcon />} colorScheme='red' onClick={() => handleDeleteButton(product._id)} />
        </HStack>

      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
				<ModalContent>
					<ModalHeader>Editar Produto</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder='Nome'
								name='name'
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
							<Input
								placeholder='Preço'
								name='price'
								type='number'
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
							<Input
								placeholder='Foto'
								name='image'
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme='blue'
							mr={3}
							onClick={() => handleUpdateProduct(product._id, updatedProduct)}
						>
							Update
						</Button>
						<Button variant='ghost' onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>

      </Modal>

    </Box>
  )
}

export default ProductCard
