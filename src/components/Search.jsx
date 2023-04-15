import { Box, Input } from "@chakra-ui/react";
function Search({ value, changingSearchData }) {
  return (
    <Box as="div" m={2}>
      <Input
        maxW="400px"
        className="search"
        type="text"
        placeholder="Enter project name"
        value={value}
        onChange={changingSearchData}
      />
    </Box>
  );
}

export default Search;
