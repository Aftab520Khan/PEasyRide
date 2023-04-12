import { useState } from 'react';
import { Button, Box, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

const mechanicOptions = [
  { value: 'john', label: 'John' },
  { value: 'jane', label: 'Jane' },
  { value: 'jim', label: 'Jim' },
];

const serviceOptions = [
  { value: 'oil-change', label: 'Oil Change' },
  { value: 'brake-repair', label: 'Brake Repair' },
  { value: 'tire-rotation', label: 'Tire Rotation' },
];

const Booking = () => {
  const [name, setName] = useState('');
  const [mechanic, setMechanic] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Mechanic:', mechanic);
    console.log('Service:', service);
  };

  return (
    <Box maxW="md" mx="auto">
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </FormControl>
      <FormControl id="mechanic" mb={4}>
        <FormLabel>Mechanic</FormLabel>
        <Select value={mechanic} onChange={(event) => setMechanic(event.target.value)}>
          <option value="">Select a mechanic</option>
          {mechanicOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="service" mb={4}>
        <FormLabel>Service</FormLabel>
        <Select value={service} onChange={(event) => setService(event.target.value)}>
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit}>
        Book Appointment
      </Button>
    </Box>
  );
};

export default Booking;