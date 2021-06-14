import React, {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'


const Layout = styled('section')`
    background-color: black;
    width: 100%;
    height: 100vh; 
    position: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 99;
`

const loading = keyframes`
    0% {transform: translate(-50%, -50%) rotate(0deg)}
    100% {transform: translate(-50%, -50%) rotate(360deg)}
`

const Loader = styled('div')`
    position: relative;
    width: 120px;
    height: 120px;
    &:after{
        content: 'Loading...';
        color: #fff;
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    &:before{
        content: '';
        position: absolute; 
        top: 50%;
        left: 50%;
        width: 120px;
        height: 120px;
        border: 3px solid ${props => props.variant};
        border-color: transparent ${props => props.variant};
        border-radius: 100%;
        transition: all .1s ease-in-out;
        animation: ${loading} .7s cubic-bezier(0,.5,.5,1) infinite;
    }
`

const Spinner = ({variant}) => {
    const [loaded, setLoaded] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoaded(false)
        },500)
    }, [])

    return (
        <>
        {loaded && loaded ? 
            <Layout>
                <Loader variant={variant || `#dee2e6`}>

                </Loader>
            </Layout>
        : ''
        }
        </>
    )
}

export default Spinner
