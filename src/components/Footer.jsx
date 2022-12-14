import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'White'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'strech'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to stay updated
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here"
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            finbus.na
          </Heading>
          <Text>2022@all rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social
          </Heading>
          <Button variant={'link'} colorScheme={'orange'}>
            <a target={'black'} href="">
              GitHub
            </a>
          </Button>

          <Button variant={'link'} colorScheme={''}>
            <a target={'black'} href="">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'green'}>
            <a target={'black'} href="">
              LinkedIn
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
