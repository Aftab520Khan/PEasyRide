import React, { useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Heading
} from '@chakra-ui/react';
import axios from 'axios';


const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const toast = useToast();

  const handlePayment = async () => {
    try {
      // Perform payment processing logic
      const response = await axios.post('/api/payment', {
        cardNumber,
        expiryDate,
        cvv
      });
      toast({
        title: 'Payment successful!',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
    } catch (error) {
      toast({
        title: 'Payment failed. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
    <Container maxW="md">
      <Box h={'80vh'} p={6}>
        <Heading mb={6}>
        Payment
        </Heading>
        <FormControl mb={4}>
          <FormLabel>Card Number</FormLabel>
          <Input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Expiry Date</FormLabel>
          <Input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>CVV</FormLabel>
          <Input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="green" onClick={handlePayment}>
          Make Payment
        </Button>
      </Box>
    </Container>
  );
};

export default Payment;