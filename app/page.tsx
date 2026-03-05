import { Header } from "./components/Header";
import { FriendItem } from "./components/FriendItem";
import { Message } from "./components/Message";
export default function Home() {
  return (
    <main>
      <Header/>
      <FriendItem/>
      <Message/>
    </main>
  );
}
