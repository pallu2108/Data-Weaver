import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

const ViewImages = ({ title, images }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [index, setIndex] = useState(0)
    function handlePrev(){
        if(index !== 0){
            return setIndex(index => index-1)
        }
    }
    function handleNext(){
        if(index !== images.length-1){
            return setIndex(index => index+1)
        }
    }
    return (
        <>
            <Button colorScheme={"green"} mt={4} onClick={onOpen}>
                View Images
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Flex alignItems={"center"} gap={"10px"}>
                            <Button backgroundColor={"green.300"}  onClick={handlePrev} disabled={index===0}><ChevronLeftIcon/></Button>
                            <Box>
                                <Image height={"250px"} width={"500px"} src={images[index]} />
                            </Box>
                            <Button backgroundColor={"green.300"} onClick={handleNext} disabled={index===images.length-1}><ChevronRightIcon/></Button>
                        </Flex>

                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default ViewImages