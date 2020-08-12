import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { database } from '../constants/index';

const refMessages = database.ref('messages');

export default function Chat() {
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
