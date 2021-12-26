import { useState ,useEffect} from "react";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import { db, auth, provider } from "./firebase";
import firebase from "firebase"
import "./index.css";
import styled from "styled-components";
function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(false)
  const [userName, setuserName] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  console.log(userName)
  const clicked = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      text:input,
      username:userName,
      photoUrl:photoUrl,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username:userName,text:input}]);`
    setInput("");
  };
  useEffect(() => {
   db.collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot=>{
    setMessages(snapshot.docs.map(doc=>doc.data()))
   })
  }, [])
    return (
      <>
        {!user? <Login setUser={setUser} setuserName={setuserName} setphotoUrl={setPhotoUrl}/>: <div className="app">
        <Header userName={userName} photoUrl={photoUrl} setuserName={setuserName} setphotoUrl={setPhotoUrl} setUser={setUser}/>
        {messages.map((message)=>(
          <Chat text={message.text} messageUsername={message.username} messagepic={message.photoUrl} userName={userName}  />
        )
        )}
        <InputField>
          <Myinput
            placeholder="Please Enter Here Your Message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Mybutton disabled={!input} onClick={clicked}>click here</Mybutton>
        </InputField>
        </div>}
      </>
    );
}

export default App;
const InputField = styled.form`
  height: 55px;
  background-color: white;
  position: -webkit-sticky;
  position: sticky;
  bottom: 40px;
  margin: 15px;
  border-radius: 10px;
`;
const Myinput = styled.input`
  padding: 7px;
  margin-left: 6px;
  margin-top: 7px;
  border-width: 0;
  border: none;
  height: 27px;
  border-radius: 10px;
  width: 98%;
  flex: 1;
  outline:none
`;
const Mybutton = styled.button`
  display: none;
`;
