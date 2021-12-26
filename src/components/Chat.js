import styled from 'styled-components'
import "../index.css"
function Chat({text,messageUsername,userName, messagepic})
{
    const isUser=messageUsername===userName
    return (
        <>
                <div id={isUser ? "u":"o"}>
                    <div id={isUser ? "m":"i"}>
                    <ChatMessage id={isUser ? "chatmsg":"i"}>{text}</ChatMessage>
                    <P id={isUser ? "pag":"i"}>{messageUsername===userName? "you" : messageUsername} said  </P>
                    </div>
                </div>
        </>
             )
}
            {/* <ChatMessage>  <Name> {userName} , </Name> Thanks for Joining our conversation </ChatMessage> */}
export default Chat
const UserImage=styled.img`
border-radius:15px ;
`
const P=styled.div`
color:black;
margin-top:-10px;
margin-left:30px ;
margin-bottom:25px ;
font-size:13px;
font-weight:bold;
`
const Name=styled.div`
color: white;
`
const Mychat=styled.div`
overflow:scroll;
overflow-x:hidden;
border-radius:15px;
margin:20px 20px;     
height:70vh; 
background-color:white;
/* ::-webkit-scrollbar {
  display: none;
} */
`
const ChatMessage=styled.div`
display: flex; 
 margin:15px; 
border-radius:60px;
padding:10px;
width:fit-content;
background-color:#037bfc;
`