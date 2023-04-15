import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { Flex, Box, Heading, Spacer, Button, Text } from "@chakra-ui/react";

export default function Navbar({ handleLogout, user }) {
  return (
    <Flex className="navbar" minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md" className="h1">
          <Link to={"/dashboard"}>BP</Link>
        </Heading>
      </Box>
      <Spacer />
      {/* <Text color={"whitesmoke"}></Text> */}
      <Button className="logout" onClick={handleLogout}>
        {" "}
        Logout{" "}
      </Button>
    </Flex>
  );
}
