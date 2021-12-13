import React from 'react'
import { View, Text, Button } from 'react-native'

interface interfacePropsTest {
  navigation: any;
}

const Test: React.FC<interfacePropsTest> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hello Test!</Text>
      <View style={{ marginTop: 30 }}>
        <Button title="Ir para Home" onPress={() => {
          navigation.navigate('Home')
        }} />
      </View>
    </View>
  )
}
export default Test