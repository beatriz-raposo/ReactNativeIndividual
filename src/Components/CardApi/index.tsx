import React from 'react'
import { FlatList, View, Text, Image, ImageSourcePropType } from 'react-native'
import { styles } from './style';


interface PropsReposMockado {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  id: string | number;
}

interface PropsApiComponent {
  isLoading: boolean;
  handleApi?: () => void;
  repositorioMockado?: PropsReposMockado[];
  
}

export function CardApi({repositorioMockado}: PropsApiComponent) {
   
  return (

        <FlatList
         style={{ width: '100%' }}
          data={repositorioMockado}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) =>
            <View style={styles .boxVertical}>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles .logo} source={item.image} alt="banner" />
                <View>
                <Text style={styles .titleArray}>{item.title}</Text>
                <Text style={styles .subTitleArray}>{item.subTitle}</Text>
            </View>
            </View>
            </View>
            
            
          }
          
        />

      ) 
        

}