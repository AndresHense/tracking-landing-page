import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack pt='3rem' direction='column' w='full' h='full'>
      <HStack
        w='100%'
        justify={{ base: 'space-between', lg: 'space-around' }}
        px={{ base: '3rem' }}
      >
        <Image src='images/logo.svg' />
        <HStack spacing='6rem' display={{ base: 'none', lg: 'inherit' }}>
          <HStack spacing='2rem'>
            <Button variant='link'>Products</Button>
            <Button variant='link'>Features</Button>
            <Button variant='link'>Pricing</Button>
          </HStack>
          <Button color='gray.500' variant='link'>
            Log In
          </Button>
        </HStack>
        <IconButton
          display={{ base: 'inherit', lg: 'none' }}
          bg='white'
          _hover={{ bg: 'inherit' }}
          _focus={{ border: 'none', bg: 'white' }}
          icon={<Image src='images/icon-hamburger.svg' onClick={onOpen} />}
          aria-label='hamburger'
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mx={14}>
            <ModalCloseButton />
            <ModalBody my={4}>
              <VStack spacing='1rem'>
                <Button variant='link'>Products</Button>
                <Button variant='link'>Features</Button>
                <Button variant='link'>Pricing</Button>
                <Divider />
                <Button color='gray.500' variant='link'>
                  {' '}
                  Log In
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        w='full'
        h='full'
        align='center'
        justify='center'
      >
        <VStack
          align='start'
          flex='1'
          pl={{ base: '1rem', md: '1rem', lg: '2rem', xl: '14rem' }}
          spacing='1.5rem'
          pt={{ base: '1rem', md: '1rem', lg: '4rem', xl: '6rem' }}
        >
          <HStack spacing='1rem'>
            <Tag
              textStyle='tag'
              bg='black'
              color='white'
              borderRadius={9999}
              paddingX={3}
              paddingY={1}
              fontWeight='bold'
              fontSize={{ base: 'lg', md: 'lg' }}
            >
              New
            </Tag>
            <Text textStyle='h2'>Monograph Dashboard</Text>
          </HStack>
          <Text pt='12px' textStyle='h1' lineHeight={{ base: 1.25, md: 1 }}>
            Powerful insights <br />
            into your team
          </Text>
          <Text textStyle='p' pt='1rem'>
            Project planning and time tracking <br />
            for agile teams
          </Text>
          <HStack pt='3rem' spacing='2rem' pb={{ base: '10rem', md: '10rem' }}>
            <Button
              colorScheme='red'
              textTransform='uppercase'
              fontSize={{ base: 'lg', md: 'xl' }}
              fontFamily='Barlow Condensed'
              letterSpacing={2}
              px={5}
            >
              Schedule a demo
            </Button>
            <Text textStyle='h2'>To see a preview</Text>
          </HStack>
        </VStack>
        <Image
          pt='4rem'
          src='images/illustration-devices.svg'
          objectFit='none'
          objectPosition={{ base: '5px', md: '100px' }}
          w={{ base: '800px', md: '960px', lg: '700px', xl: '960px' }}
          h={{ base: '600px', md: '600px' }}
        />
      </Stack>
      {/* */}
      <Box
        w={{ base: '55%', md: '50%', lg: '55%', xl: '47%' }}
        h='400px'
        bg='gray.200'
        top={-2}
        right={0}
        borderBottomLeftRadius={99}
        position='absolute'
        zIndex={-1}
      ></Box>
    </VStack>
  );
}

export default App;
