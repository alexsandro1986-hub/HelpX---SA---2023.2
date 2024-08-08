import { useRoute } from "@react-navigation/native";
import { GiftedChat } from "react-native-gifted-chat";
import { useCallback, useEffect, useState } from "react";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { database } from "../Config/firebase";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  const { name } = route.params;

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(database, "chats"), orderBy("createdAt", "desc")),
      (snapshot) => {
        const updatedMessages = snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }));
        setMessages(updatedMessages);
      }
    );

    return () => {
      // Cleanup the listener when component unmounts
      unsubscribe();
    };
  }, []);

  const mensagemEnviada = useCallback(
    (newMessages = []) => {
      // Adiciona as novas mensagens ao estado atual
      const updatedMessages = [...messages, ...newMessages];
      setMessages(updatedMessages);

      // Envia a última mensagem enviada para o Firebase
      const lastMessage = newMessages[newMessages.length - 1];
      addDoc(collection(database, "chats"), {
        _id: lastMessage._id,
        createdAt: lastMessage.createdAt,
        text: lastMessage.text,
        user: lastMessage.user,
      });
    },
    [messages]
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => mensagemEnviada(newMessages)}
      user={{
        _id: name,
      }}
    />
  );
}
