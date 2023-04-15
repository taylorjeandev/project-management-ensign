import { Link, useLocation } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Button } from "@chakra-ui/react";

export default function Navbar({ handleLogout }) {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  return (
    <Flex className="navbar" justify="space-around">
      <Box as="li">
        <Button>
          <Link to={"/"}>Login</Link>
        </Button>
      </Box>
      {/* <Box>
        {user ? null : location.pathname ===
          "/signup" ? null : location.pathname ===
          "/login" ? null : location.pathname === "/" ? null : (
          <Link to={"/signup"}>Signup</Link>
        )}
      </Box> */}
      <Box as="li">
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
    </Flex>
  );
}
