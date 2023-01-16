import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Image,
    Heading,
    Text,
} from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { IoExitOutline } from 'react-icons/io5'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <>

            <Flex height={"50px"} bg={"#eae8e8"} justifyContent={"space-between"}>
                <HamburgerIcon ref={btnRef} colorScheme='teal' onClick={onOpen} fontSize={"25px"} marginTop={"10px"} marginLeft={"10px"} />
                <Box marginTop={"10px"} marginRight={"10px"}> < IoExitOutline fontSize={"25px"} /></Box>

            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                bg={"#eae8e8"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Image margin={"auto"} height={"130px"} src='https://agneshomewares.com.au/wp-content/uploads/2022/01/awhw-icon-square.png'/>
                    </DrawerHeader>

                    <DrawerBody margin={"auto"} marginTop={"25px"}>
                       <Heading  fontSize={"18px"}>Dashboard</Heading>
                       <Text marginTop={"15px"}>Products</Text>
                    </DrawerBody>

                    <DrawerFooter>
                       
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar