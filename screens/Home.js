import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }){

  const [text, onChangeText] = useState(null);

  return(
    <View style={styles.container}>
      <TextInput 
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: "100%", textAlign: "center" }}
        onChangeText={text => onChangeText(text)}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#d54062', padding: 8, borderRadius: 6, marginTop: 8}}
        onPress={ () => {
          navigation.navigate('Chat', {
            name: text
          });
        }}
      >
        <Text
          style={{ color: 'white' }}
        >
          Go to chat
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  }
})