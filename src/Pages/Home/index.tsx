import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './style';
import { ArrayMocado } from '../../Mock/ArrayMocado';
import { CardApi } from '../../Components/CardApi';
import { TextInputComponent } from '../../Components/TextInput'


interface PropsReposMockado {
  title: string;

}

export function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataApi, setDataApi] = useState<PropsReposMockado[]>([]);
  const [filterTitulo, setFilterTitulo] = useState<string>('');
 

  
  const handleSearch = (titulo: string) => {
    setFilterTitulo(titulo)
  }
 const resulFilters = dataApi.filter(titulo=> {
    const inputTitulo = filterTitulo.toLocaleLowerCase();
    const tituloApi = titulo.titulo.toLowerCase();
    return tituloApi.includes(inputTitulo);
  });


  

  return (
    <View style={styles .container}>
       <TextInputComponent 
        placeholder='Buscar...'
        onChangeValue={handleSearch}
      />

      <CardApi
        isLoading={isLoading}
        repositorioMockado={ArrayMocado}
       
      />

    </View>
  )
}