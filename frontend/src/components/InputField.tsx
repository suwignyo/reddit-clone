import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/core';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  placeholder?: string
}



export const InputField: React.FC<InputFieldProps> = ({ label, size: _, ...props }) => {
  const [field, { error }] = useField(props)
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} {...props} id={field.name} placeholder={props.placeholder} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}