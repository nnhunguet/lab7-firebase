// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import * as firebase from "firebase";

// export default function App() {



//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const firebaseConfig = {
  apiKey: "AIzaSyBJDHNqiNLNontXbzA35lVDPJMsqZxDxvs",
  authDomain: "firesbasedemo-b52a7.firebaseapp.com",
  projectId: "firesbasedemo-b52a7",
  databaseURL: "https://firesbasedemo-b52a7.firebaseio.com",
  storageBucket: "firesbasedemo-b52a7.appspot.com",
  messagingSenderId: "1007483111762",
  appId: "1:1007483111762:web:c8400c6a9a0cb23a9b928b",
  measurementId: "G-PQGWCXJJSS"
};

firebase.initializeApp(firebaseConfig);
const refMessages = firebase.database().ref('messages');

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    refMessages.on('value', function(snapshot) {
      let dataMess = [];
      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        dataMess.unshift(childData);
      });
      setMessages([...dataMess, ...messages]);
    });
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    console.log(messages[0]);
    refMessages.push({
      ...messages[0]
    })
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}