import { useLocation, Link } from "react-router-dom";
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";

export default function Navbar({ handleLogout }) {
  const location = useLocation();
  return (
    <Flex className="navbar" minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md" className="h1">
          <Link to={"/dashboard"}>BP</Link>
        </Heading>
      </Box>
      <Spacer />

      {location.pathname !== "/signup" && (
        <Button className="logout" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </Button>
      )}
    </Flex>
  );
}
