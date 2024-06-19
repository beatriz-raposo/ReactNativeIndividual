import React, { useState } from 'react'
import { Alert, Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { ButtonComponent } from '../../Components/ButtonComponent'
import { TextInputComponent } from '../../Components/TextInput'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../Assets/telegram-logo-4-1.png';
import { styles } from './style'

export function Login() {

  const [pais, setPais] = useState<string>();
  const [numero, setNumero] = useState<string>();
  const navigator = useNavigation();

  const handlePais = (value: string) => {
    setPais(value)
  }
  const handleNumero = (value: string) => {
    setNumero(value);
  }

  const handleLogin = () => {
      navigator.navigate("StackHome", {name: "Home"});
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.logo} source={Logo} alt="Logo tela login"/>

        <Text style={styles.title}>Entrar no Telegram</Text>

        <TextInputComponent
          onChangeValue={handlePais}
          placeholder='Digite seu País'
        />

        <TextInputComponent
          placeholder='Número de telefone'
          onChangeValue={handleNumero}
          type={true}
        />

        

        <ButtonComponent title="Entrar" handleOnChange={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  )
}