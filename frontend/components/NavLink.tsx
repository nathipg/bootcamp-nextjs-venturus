import { Link } from '@chakra-ui/react';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <Link
      px="2"
      py="1"
      color="gray.50"
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: 'purple.600',
      }}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
