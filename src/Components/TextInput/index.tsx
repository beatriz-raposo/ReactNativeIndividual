import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './style'

interface PropsComponent {
  placeholder: string;
  type?: boolean;
  onChangeValue: (value: string) => void;
}

export function TextInputComponent({ placeholder, type, onChangeValue }: PropsComponent) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={"gray"}
      style={styles.styleInput}
      secureTextEntry={type}
      onChangeText={onChangeValue}
    />
  )
}

