import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import NavLink from './NavLink';

const MainMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuOptions = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Add Post',
      href: '/add-post',
    },
  ];

  const listMenuOptions = () => {
    return menuOptions.map((link, index) => {
      return (
        <NavLink key={index} href={link.href}>
          {link.name}
        </NavLink>
      );
    });
  };

  return (
    <>
      <Box bg={'purple.800'} px={'4'}>
        <Flex h={'16'} align={'center'} justify={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            colorScheme={'purple'}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} align={'center'}>
            <Box>
              <Link
                color={'gray.50'}
                href={'/'}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Next Blog
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              marginLeft={8}
              display={{ base: 'none', md: 'flex' }}
            >
              {listMenuOptions()}
            </HStack>
          </HStack>
          <Box w={'40px'}></Box>
        </Flex>

        {isOpen ? (
          <Box pb={'4'} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={'4'}>
              {listMenuOptions()}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default MainMenu;
