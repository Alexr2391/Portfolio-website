import React, {useEffect, useRef, useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import Spinner from './partials/Spinner'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import SendIcon from '@material-ui/icons/Send'
import WarningIcon from '@material-ui/icons/Warning';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SubjectIcon from '@material-ui/icons/Subject';
import axios from 'axios'



const Container = styled('section')`
    width: 100%;
    min-height: 100vh;
    background-image: url('background-4.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #003459;
    background-blend-mode: multiply;
    display:flex;
    align-items: center;
    justify-content: center;
`

const SplitWindow = styled('div')`
    margin-top: 90px;
    width: 80%;
    overflow: hidden;
    min-height: 600px;
    max-width: 1000px;
    background:#f8f9fa;
    display:flex;
    justify-items:center;
    box-shadow: 0 1em 3em rgba(30,80,150,0.5);
    @media  screen and (max-width: 1000px) {
        flex-direction: column;
        margin-top: 100px;
        width: 70%;
    }
    @media  screen and (max-width: 768px) {
        width: 90%;
        border-radius: 1em;
    }
`



const ImageBg = styled('div')`
    flex: 0 1 40%;
    min-height: 100%;
    position: relative;
    background-image: url('background-3.jpg');
    transform: rotateY(.50turn);
    background-size: cover;
    background-position: 40%;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    background-color: #0d1b2a;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media  screen and (max-width: 1000px) {
        order: 1;
    }
`

const AnimatedText = styled('div')`
    margin-top: 100px;
    color: #fff;
    font-weight: 400;
    width: 80%;
    font-size: 2.2em;
    padding: .5em;
    transform: rotateY(.50turn);
    min-height: 3em;
    @media  screen and (max-width: 1000px) {
        margin-top: 10px;
        font-size: 1.2em;
    }
`

const HeadTitle = styled('h3')`
    font-size: 1.3em;
    color: #01497C;
    text-align:center;
    font-weight: 300;
    letter-spacing: .1em;
`

const FormArea = styled('div')`
    flex: 0 1 60%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`

const InnerContainer = styled('div')`
    flex-direction: column;
    display:flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    height: 100%;
    border-left: 1px solid rgba(255,255,255,.1);
    @media  screen and (max-width: 1000px) {
        flex-direction: column;
        border-left: none;
    }
`

const Header = styled('div')`
    background-color: #0d1b2a;
    width: 100%;
    background-image: url('background-2.jpg');
    background-size: cover;
    background-position: 60%;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    
`

const SectionTitle = styled(HeadTitle)`
    letter-spacing : none;
    margin: 1em auto;
    color: #fff;
    line-height: 1em;
    padding: .6em 0;
    user-select: none;
    @media  screen and (max-width: 768px) {
        padding: .6em 0;
    }
`

const Column= styled('div')`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    border-top: 1px solid rgba(255,255,255,.1); 
`

const Anchor = styled('a')`
    text-decoration: none;
    margin: .5em;
    padding: .5em;
`

const Form = styled('form')`
    width: 100%;
`



const InputContainer = styled('div')`
    display:flex;
    margin: 1em 0 0 0;
    overflow:hidden;
    background-color: #e9ecef;
    align-items: center;
    justify-content: flex-start;
    border: .1em solid rgba(50,50,50, .2);
    @media screen and (max-width: 1000px) {
        justify-content: space-between;
        & > .MuiSvgIcon-root {
            flex:.2;
    }
    @media screen and (max-width: 768px) {
        & > .MuiSvgIcon-root {
            display: none;
        }
    }
`
const ButtonContainer = styled(InputContainer)`
    background-color: transparent;
    border: none;
`

const Label = styled('label')`
    color: #6c757d;
    flex: .2;
    font-weight: 700;
    font-size: .9em;
    padding: 1.2em;
    border-right : .1em solid rgba(50,50,50, .2);
    justify-self: flex-start;
    @media screen and (max-width: 1000px) {
        font-size: .8em;
        padding: 1.2em 0;
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        flex: .3;
    }
`

const Input = styled('input')`
    user-select: none;
    outline-width: 0;
    border: none;
    flex: .7;
    font-size: 1.1em;
    margin-left: 1em;
    align-self: stretch;
    transition: .5s ease-in-out;
    background-color: #e9ecef;
    border-bottom: 1px solid rgba(255,255,255,.1); 
    color: #6c757d;
    @media screen and (max-width: 1000px) {
        width: 100%;
        font-size: .8em;
        flex: .6;
    }
    @media screen and (max-width: 768px) {
        flex: .7;
    }
`

const TextArea = styled('textarea')`
    flex: .85;
    border: none;
    resize: none;
    padding: .5em;
    outline-width: 0;
    transition: .5s ease-in-out;
    background-color: #e9ecef;
    border-bottom: 1px solid rgba(255,255,255,.1); 
    color: #6c757d;
    font-size: 1.1em;
    min-height: 8em;
    align-self: stretch;
    @media screen and (max-width: 1000px) {
        width: 100%;
        font-size: .8em;
        min-height: 7em;
        flex: .7;
    }
    @media screen and (max-width: 768px) {
        min-height: 5em;

    }
`

const sendAnim = keyframes`
    0% {transform : rotate(-35deg) translateX(0px); opacity: 1}
    20% {transform : rotate(-50deg) translateX(50px); opacity: 0}
    40% {transform : translateX(-50px); opacity: 0}
    60%, 100% {transform: translateX(0); opacity: 1}
` 

const SubmitButton = styled('button')`  
    overflow: hidden;
    cursor: pointer;
    outline-width: 0;
    margin: 2em 0 2em auto;
    padding: .4em 1.2em;
    background-color: #003459;
    border: none;
    display:flex;
    align-items: center;
    font-size: 1.1em;
    box-shadow: 0 .5em 1em rgba(0,0,0, 0.1);
    border-radius: .3em;
    &:hover{
        background-color: #0d1b2a;
    }
    & > span {
        font-size: 1.1em;
        position: relative;
        margin: 0 1em;
        color: #fff;
        background-color: inherit;
        padding: .5em .3em;
        z-index: 3;
    } 
    @media screen and (max-width:1000px) {
        & > span {
            font-size: .9em;
        }
        margin: 2em auto 2em auto;
    }
    &:hover > *:not(span) {
        animation: ${sendAnim} 1.4s linear;
        animation-delay: .2s;
    }
`


const warningAnim = keyframes`
    0% {opacity: 0; transform: translateY(20px)}
    100% {opacity: 1; transform: translateX(0px)}
`

const WarningText = styled.div`
    display:flex;
    align-items: center;
    margin-top: .3em;
    animation: ${warningAnim} .3s linear;
    & > span {
        flex: .6;
        color: #f44336;
        margin-left: 1em;
        font-size: .8em;
        font-style: italic;
    }
`



const ContactForm = () => {

const typeRef=  useRef()


const [formData, setFormData] = useState({
    fullName: '',
    email: '', 
    subject: '', 
    message: ''
})

const [errors, setErrors] = useState({
    fullName: null,
    email: null, 
    subject: null, 
    message: null
})


const sendData = async() => {
    try{
        const {data} = await axios({
            url: '/api', 
            method: 'POST',
            data : formData, 
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        console.log(data)

        return data
    }
    catch(err){
        console.error(err)
    }
} 
 
const formControl = (e) => {

    e.preventDefault()

    const {fullName, email, subject, message} = formData

    if(!fullName) {

       setErrors(errors =>({...errors, fullName : 'Please enter your full name'}))

    } 
    else if(!(/(.*[a-z]){3}/).test(fullName)){

        setErrors(errors => ({...errors, fullName: 'Full name must contain at least 3 characters'}))

    } 
    else{
        setErrors(errors => ({...errors, fullName: null}))
    }
        

    if(!email) {

        setErrors(errors => ({...errors, email : 'Please enter an email address'}))

    } else if ((/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i).test(email)){

        setErrors(errors => ({...errors, email: null}))

    } else {

        setErrors(errors => ({...errors, email: 'Invalid email address'}))

    }

    if(!subject) {

        setErrors(errors => ({...errors, subject : 'Please enter a subject'}))

    } else if ((!(/(.*[a-z]){5}/).test(subject))) {

        setErrors(errors => ({...errors, subject: 'Subject must contain at least 5 characters'}))

    }
    else{

        setErrors(errors => ({...errors, subject: null}))
    }

    if(!message) {

        setErrors(errors => ({...errors, message : 'Please enter a message'}))

    } else if (message.length < 20) {

        setErrors(errors => ({...errors, message: 'Subject must contain at least 20 characters'}))

    }
    else{
        setErrors(errors => ({...errors, message: null}))
    }

    if(Object.values(errors).every(error => error === null)) {
        sendData()
    }
    else {
            return 
        }
    }






    function createTypeEffect() {

        if(!typeRef) {
            return null;
        }
    
        const textAr = [`Hello there! `,'Thank you for your time! ','Please leave me a message', 'Lets </> together ! ']
        let currentvalue = []
        let i = 0;
        let j = 0;
        let isActive = true
        let speedUp = false;

        (function loop() {

            if(window.location.pathname !== '/contact') {
                return null;
            }
    
            typeRef.current.textContent = currentvalue.join('')

            if(i < textAr.length) {
                if(j < textAr[i].length && isActive) {
                    speedUp = false
                    currentvalue.push(textAr[i][j])
                    // spacer.style.opacity === 1 ? spacer.style.opacity = 0 : spacer.style.opacity = 1
                    j++
    
                }  else if(j <= textAr[i].length && j !== 0) {
    
                    isActive = false
                    currentvalue.pop()
                    speedUp = 60
                    // spacer.style.opacity === 1 ? spacer.style.opacity = 0 : spacer.style.opacity = 1
                    j--
                } else{
                    isActive = true
                    i++
                }  
            } else {
                i = 0
                j = 0
            }
            setTimeout(() => {
                loop()
            },speedUp || 150)
        })()
    }

useEffect(() => {
        createTypeEffect()
},[])

    return (
        <motion.main
            initial={{ opacity: 0.7}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0.7}}
                transition={{ duration: 0.5 }}
        >
            <Spinner variant="#003459"/>
            <Container>
                <SplitWindow> 
                    <ImageBg >
                        <AnimatedText ref={typeRef} />
                    </ImageBg>
                    <FormArea>
                        <InnerContainer>
                            <Header>
                                <SectionTitle>
                                    Contact Me
                                </SectionTitle>
                            </Header>
                            <Column>
                                <Anchor href="https://github.com/Alexr2391">
                                    <GitHubIcon  fontSize='large' htmlColor='#003459' />
                                </Anchor>
                                <Anchor href="https://www.facebook.com/alex.ritsonis.5">
                                    <FacebookIcon fontSize='large' htmlColor='#003459' />
                                </Anchor>
                                <Anchor href="https://www.linkedin.com/in/ritsonis-alexis-56722061/">
                                    <LinkedInIcon fontSize='large' htmlColor='#003459' />
                                </Anchor>
                            </Column>
                            <Column>
                                <Form 
                                role="form" 
                                aria-label='Contact me' 
                                onSubmit = {formControl}>
                                    <InputContainer>
                                        <Label htmlFor="fullName">Full Name:</Label>
                                        <Input 
                                        id="fullName" 
                                        value={formData.fullName} 
                                        onChange={(e) => setFormData({...formData, fullName: e.target.value})} 
                                        type='text' name="subject" 
                                        autoCapitalize='true'
                                        />
                                        <PersonIcon fontSize='small' htmlColor='#6c757d' />
                                    </InputContainer>
                                        {errors.fullName && 
                                        <WarningText>
                                            <WarningIcon fontSize='small' htmlColor='#f44336'/>
                                            <span>{errors.fullName}</span>
                                        </WarningText>}
                                    <InputContainer>
                                        <Label htmlFor="email">Email:</Label>
                                        <Input 
                                        id="email" 
                                        value={formData.email} 
                                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                        type='email' 
                                        name="email" 
                                        autoCapitalize='true'
                                        />
                                        <MailOutlineIcon fontSize='small' htmlColor='#6c757d'  />
                                    </InputContainer>
                                        {errors.email && 
                                        <WarningText>
                                            <WarningIcon fontSize='small' htmlColor='#f44336'/>
                                            <span>{errors.email}</span>
                                        </WarningText>}
                                    <InputContainer>
                                        <Label htmlFor="subject">Subject:</Label>
                                        <Input 
                                        id="subject" 
                                        value={formData.subject} 
                                        onChange={(e) => setFormData({...formData, subject: e.target.value})} 
                                        type='text' 
                                        name="subject" 
                                        autoCapitalize='true'
                                        />
                                        <SubjectIcon  fontSize='small' htmlColor='#6c757d'  />
                                    </InputContainer>
                                        {errors.subject && 
                                        <WarningText>
                                            <WarningIcon fontSize='small' htmlColor='#f44336'/>
                                            <span>{errors.subject}</span>
                                        </WarningText>}
                                    <InputContainer>
                                        <Label style={{height: 150}} htmlFor="message">Message:</Label>
                                        <TextArea 
                                        id="message" 
                                        value={formData.message} 
                                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                                        name="message"
                                        />
                                    </InputContainer>
                                        {errors.message && 
                                        <WarningText>
                                            <WarningIcon fontSize='small' htmlColor='#f44336'/>
                                            <span>{errors.message}</span>
                                        </WarningText>}
                                    <ButtonContainer>
                                        <SubmitButton>
                                            <span>Send</span>
                                            <SendIcon fontSize='default' htmlColor='#fff' />
                                        </SubmitButton>
                                    </ButtonContainer>
                                </Form>
                            </Column>
                        </InnerContainer>
                    </FormArea>
                </ SplitWindow>
            </Container>
        </motion.main>

    )
}



export default ContactForm
