import { db, auth, provider } from "../firebase";
import {AiFillMessage} from 'react-icons/ai'
// import Button from '@mui/material/Button';
import styled from "styled-components";
const  Login=(props )=>{
    const gauth = async() => {
        const user = await auth.signInWithPopup(provider).then(re=>{
            props.setuserName(`${re.user.displayName}`);
            props.setphotoUrl(`${re.user.photoURL}`);
            console.log("hi")
        });
        props.setUser(true)
        // const user = await auth.signInWithPopup(provider).then(re=>console.log(re.user.email,re.user.photoURL,re.user.displayName))
      };
    return (
        <MyDiv>
            <h1>
            Welocome To The JdVerse
            </h1>
            <LoginBox>
                <MyAiFillMessage fontSize="200px" color="white"/>
                {/* <Button> */}
                <MyGoogle onClick={gauth}>
                    SignIn With Google
                </MyGoogle>
                {/* </Button> */}
            </LoginBox>
        </MyDiv>
    )
};
export default Login;
const MyDiv=styled.div`
display: flex;
flex-direction: column;
position: absolute;
bottom:140px;
left:480px;
align-items: center;
justify-content: center;
`
const LoginBox=styled.div`
box-shadow: 15px 17px 14px 0px rgba(0,0,0,0.75);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 40px;
height:400px;
width:400px;
background-color: #365eff;
margin-top:40px;
`
const MyGoogle=styled.button`
border:none;
background-color: white;
padding:10px;
width: fit-content;
border-radius:10px;
:hover
{
    cursor:pointer;
}
`
const MyAiFillMessage=styled(AiFillMessage)`
margin-top:-30px;
margin-bottom:60px;
`