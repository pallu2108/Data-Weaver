import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";

function createArrayOfSize(n) {
    return new Array(n).fill(0);
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
    let start = <Button mr={2} disabled={currentPage === 1} onClick={() => handlePageChange(1)}><ArrowLeftIcon /></Button>
    let end = <Button disabled={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}><ArrowRightIcon /></Button>
    let prev = <Button mr={2} disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Prev</Button>
    let pages = createArrayOfSize(totalPages).map((a, i) => (
        <Button onClick={() => handlePageChange(i + 1)} disabled={currentPage === i + 1} key={i + 1}>{i + 1}</Button>
    ));
    let next = <Button mr={2} disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
    return (
        <Box marginTop={"10px"}>
            {start}
            {prev}
            <Button p={3} mr={2} colorScheme="green">{currentPage}</Button>
            {next}
            {end}
        </Box>

    );
}

export default Pagination;