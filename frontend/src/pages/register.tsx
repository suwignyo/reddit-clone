import React from 'react'
import { Formik, Form } from 'formik'
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/core'
import { Container } from '../components/Container'
import { InputField } from '../components'


interface registerProps {

}

function validateName(value) {
  let error
  if (!value) {
    error = "Name is required"
  } else if (value !== "Naruto") {
    error = "Jeez! You're not a fan 😱"
  }
  return error
}


export const Register: React.FC<registerProps> = ({ }) => {
  return (
    <Container>
      <Formik
        initialValues={{ username: "Sasuke" }}
        onSubmit={(values, actions) => {
          console.log(values, 'values')
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            >
            </InputField>
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            >
            </InputField>
            <Button mt={4} type="submit" variantColor="teal" isLoading={isSubmitting}>Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Register