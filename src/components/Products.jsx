import { Box, Image, Input, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditProduct from './EditProduct';
import Navbar from './Navbar';
import Pagination from './Pagination';
import ViewImages from './ViewImages';

const Products = () => {
    const [prod, setProd] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 30;
    const totalPages = Math.ceil(prod.length / perPage);
    let end = page * perPage;
    let start = end - perPage;
    let products = prod.slice(start, end)
    useEffect(() => {
        axios.get("https://dummyjson.com/products?limit=100")
            .then(res => {
                console.log(res.data.products);
                setProd([...res.data.products])
            });
    }, []);
    return (
        <Box >
            <Navbar/>
            <Table width={"100%"} >
                <Thead>
                    <Tr>
                        <Th>Sr.No</Th>
                        <Th>Thumbnail</Th>
                        <Th>Title</Th>
                        <Th>Description</Th>
                        <Th>Price</Th>
                        <Th>Discount Percentage</Th>
                        <Th>Rating</Th>
                        <Th>Stock</Th>
                        <Th>Brand</Th>
                        <Th>Category</Th>
                        <Th>Images</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        products?.map((element, index) => (
                            <Tr key={index}>
                                <Td>{element.id}</Td>
                                <Td><Image height={"100px"} width={"350px"} src={element.thumbnail} /></Td>
                                <Td>{element.title}</Td>
                                <Td>{element.description}</Td>
                                <Td>{element.price}</Td>
                                <Td>{element.discountPercentage}</Td>
                                <Td>{element.rating}</Td>
                                <Td>{element.stock}</Td>
                                <Td>{element.brand}</Td>
                                <Td>{element.category}</Td>
                                <Td><ViewImages {...element} /></Td>
                                <Td><EditProduct {...element} /></Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
            <Pagination totalPages={totalPages} currentPage={page} handlePageChange={(value) => setPage(value)} />
            <Box>Showing {start+1}-{end>prod.length?prod.length:end} out of {prod.length} results</Box>
        </Box>
    )
}

export default Products;