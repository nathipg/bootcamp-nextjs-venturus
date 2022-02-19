import type { AppProps } from 'next/app';
import { ChakraProvider, Container } from '@chakra-ui/react';

import MainMenu from '../components/MainMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainMenu />
      <Container maxWidth={'container.xl'} paddingBlock={8}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
