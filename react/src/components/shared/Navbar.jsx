import React from 'react';
import { Box, Flex, Link, Button, Image } from '@chakra-ui/react';
import Logo from '../../itsbarsociallogo.png'; // Adjust the path to the location of your logo file

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="black"
      boxShadow="0px 2px 1px rgba(0, 0, 0, 0.33)" // Adjusted for Chakra UI syntax
    >
      <Link to="/" style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
        <Image src={Logo} alt="It's Bar Social logo" />
      </Link>
      <Box display="flex" gap="10px">
        <Button variant="ghost" _hover={{ bg: 'gray.200' }}>Log in</Button>
        <Button bg="blue.500" color="white" _hover={{ bg: 'blue.700' }}>Sign up</Button>
      </Box>
    </Flex>
  );
}