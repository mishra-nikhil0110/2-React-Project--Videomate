import {
  Container,
  Input,
  Button,
  Text,
  VStack,
  Heading,
  Switch,
  FormControl,
  FormLabel,
  Textarea,
  
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'} color={'purple.500'}>
            What's in your Mind?
          </Heading>

          <Input
            placeholder={'Phone No.'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Textarea
            placeholder="Type your massage here..."
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'} type={'submit'}>
            Send
          </Button>

          <Text textAlign={'right'}>
            <Button variant={'link'} colorScheme={'purple'}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0" color={'purple.500'}>
                  Enable email alerts?
                </FormLabel>
                <Switch id="email-alerts" colorScheme={'purple'} />
              </FormControl>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Contact;