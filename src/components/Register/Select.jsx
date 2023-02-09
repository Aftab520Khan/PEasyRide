import { Heading } from '@chakra-ui/react'
import React from 'react'
import {Service} from '../Service'
import { Detail } from './Detail'

export const Select = () => {
  return (
    <>
    <Heading align='center'>Ah!we see you've got a Honda. <br/> How can we help you ?
    </Heading>
    <Service/>
    <Detail/>
    </>
  )
}
