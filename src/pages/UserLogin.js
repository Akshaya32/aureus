import styled from "styled-components"
import {useState} from 'react';
import { useLocation } from 'react-router-dom'

const SignUpContainer = styled.div`
    width: 40%;
    margin: 0 auto;

`
const LogoContainer = styled.div`
margin-top: 70px;
text-align: center;
color: var(--primary-text);
`
const FormContainer = styled.div.attrs({
    className : 'CardContainer',
  })`
margin: 0 auto;
width: 75%;
padding: 40px;`

const AdditionalSignUp = styled(LogoContainer)`
  margin-top: 30px;
`
const SignUpOptions = styled(LogoContainer)`
    background-color: rgba(205, 236, 252 , 0.3);
    border-radius: 25px;
    margin: 15px auto;
    padding:10px;
    width:50%;
    cursor: pointer;
`
const SignUpSpan = styled.span`
    font-weight:600;
    font-size: 1rem;
`
const FormRow = styled.div`
width: 100%;
margin: 15px 0;
`
const FormInput = styled.input`
border-radius: 5px;
border: 1px solid var(--color-secondary);
padding:15px;
width: 90%;
`
const styles = {
    button: {
        width: '95%'
    }
}
const Signup = () => {
    let location = useLocation();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const buttonText = location.pathname === '/login' ? "Login" : "Sign Up";
  return (
    
    <SignUpContainer>
        <LogoContainer>
            <h3>QuickJobs</h3>
        </LogoContainer>
        <FormContainer>
            <form>
                {location.pathname === '/signup' ? (
                    <><FormRow>
                    <FormInput
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                        placeholder="First Name"
                        required
                    />
                </FormRow>
                <FormRow>
                    <FormInput
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                        placeholder="Last Name"
                        required
                    />
                </FormRow>
                </>
                ) : ''}
                <FormRow>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                    />
                </FormRow>
                <FormRow>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </FormRow>
                <FormRow>
                    <button className="btn-primary" style = {styles.button}>{buttonText}</button>
                </FormRow>
            </form>
        </FormContainer>
        <AdditionalSignUp>
            <span className="">
                Or
            </span>
            <SignUpOptions><SignUpSpan>Continue with Google</SignUpSpan></SignUpOptions>
            <SignUpOptions><SignUpSpan>Continue with LinkedIn</SignUpSpan></SignUpOptions>
        </AdditionalSignUp>
    </SignUpContainer>
  )
}

export default Signup
