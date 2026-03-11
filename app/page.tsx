import { Header } from "./components/Header";
import { FriendItem } from "./components/FriendItem";
import { Message } from "./components/Message";
import { USERS } from "./mock/users"
import { MESSAGES } from "./mock/messages" 
export default function Home() {
  return (
    <main>
      <Header/>
      {
        USERS.map((user)=> {
         return <FriendItem name = {user.name} statusMessage= {user.status_message}/>
        })
      }
      {
        MESSAGES.map((message) => {
          return <Message message={message.message} sender= {message.sender} receiver = {message.receiver} created = {message.created}/> 
          })}
    </main>
  );
}
