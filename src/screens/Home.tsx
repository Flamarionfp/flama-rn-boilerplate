import React from 'react'
import { View, Text, Button } from 'react-native'

interface interfacePropsHome {
  navigation: any;
}

const Home: React.FC<interfacePropsHome> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hello Home!</Text>
      <View style={{marginTop: 30}}>
        <Button title="Ir para Test" onPress={() => {
          navigation.navigate('Test')
        }} />
      </View>
    </View>
  )
}
export default Home