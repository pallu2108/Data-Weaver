import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const EditProduct = ({ id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState(title)
    const [descr, setDescr] = useState(description)
    const [pri, setPri] = useState(price)
    const [discount, setDiscount] = useState(discountPercentage)
    const [ratin, setRatin] = useState(rating)
    const [stoc, setStoc] = useState(stock)
    const [bran, setBran] = useState(brand)
    const [categor, setCategor] = useState(category)
    const [thumbnai, setThumbnai] = useState(thumbnail)
    const [image, setImage] = useState(images)

    async function handleSave() {
        return await axios(`https://dummyjson.com/products/${id}`,
            {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: id,
                    title: name,
                    description: descr,
                    price: pri,
                    discountPercentage: discount,
                    rating: ratin,
                    stock: stoc,
                    brand: bran,
                    category: categor,
                    thumbnail: thumbnai,
                    images
                })

            })
            .then((res) => console.log(res))
    }

    return (
        <Box>
            <Button colorScheme={"green"} mt={4} onClick={onOpen}>
                Edit
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Text mb='8px'>ID</Text>
                        <Input disabled
                            value={id}
                            // onChange={handleChange}

                            size='sm'
                        />
                        <Text mb='8px'>Title </Text>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            size='sm'
                        />
                        <Text mb='8px'>Description </Text>
                        <Input
                            value={descr}
                            onChange={(e) => setDescr(e.target.value)}
                            size='sm'
                        />
                        <Text mb='8px'>Price</Text>
                        <Input
                            value={pri}
                            onChange={(e) => setPri(e.target.value)}

                            size='sm'
                        />
                        <Text mb='8px'>Discount Percentage</Text>
                        <Input
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            size='sm'
                        />
                        <Text mb='8px'>Rating</Text>
                        <Input
                            value={ratin}
                            onChange={(e) => setRatin(e.target.value)}

                            size='sm'
                        />
                        <Text mb='8px'>Stock</Text>
                        <Input
                            value={stoc}
                            onChange={(e) => setStoc(e.target.value)}

                            size='sm'
                        />
                        <Text mb='8px'>Brand</Text>
                        <Input
                            value={bran}
                            onChange={(e) => setBran(e.target.value)}

                            size='sm'
                        />
                        <Text mb='8px'>Category</Text>
                        <Input
                            value={categor}
                            onChange={(e) => setCategor(e.target.value)}

                            size='sm'
                        />
                        <Text mb='8px'>Thumbnail</Text>
                        <Input
                            value={thumbnai}
                            onChange={(e) => setThumbnai(e.target.value)}

                            size='sm'
                        />
                        <Text mb='8px'>Images</Text>
                        <Input
                            value={image.join(" ")}
                            onChange={(e) => setImage(e.target.value)}
                            size='sm'
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={handleSave}>
                            Save
                        </Button>
                        <Button colorScheme='green' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </Box>
    )
}

export default EditProduct