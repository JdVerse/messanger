import styled from 'styled-components'
import { db, auth, provider } from "../firebase";
import {AiFillMessage} from 'react-icons/ai'
const Header=(props)=>{
    return (
        <MyHeader>
            <P>
                    <AiFillMessage fontSize="50px" color="blue"/>
                    <H2>
                    JdVerse
                    </H2>
            </P>
            <MysP>
                    <Img src={props.photoUrl} height="40px" width="40px"/>
                    <SignoutButton >
                    { props.userName}
                    </SignoutButton>
             </MysP>
        </MyHeader>
    )
}
export default Header
const SignoutButton=styled.div`
cursor: pointer;
:hover
{
    background-color:whitesmoke;
    margin-left: -10px;
    padding:10px 10px 10px 10px;
    border-radius:15px;
}
`
const MyP=styled.div`
margin-top:-5px;   
`
const P=styled.div`
display:flex;
align-items:center;
`
const MysP=styled.div`
display:flex;
align-items:center;
background-color:;
`
const Img=styled.img`
margin-left:-200px;
margin-right:20px;
border-radius: 50%;
`
const MyHeader=styled.div`
position: -webkit-sticky;
position: sticky;
top: 20px;
width:95vw;
margin:20px;
border-radius:10px;
padding-left:15px;
background-color: white;
display:flex;
align-items:center;
justify-content:space-between;
`
const H2=styled.h2`
margin-left:20px;
`