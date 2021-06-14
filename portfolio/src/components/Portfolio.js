import styled from 'styled-components'
import { motion } from 'framer-motion'
import Spinner from './partials/Spinner'



const Main = styled.main`
    width: 100%;
    min-height: 100vh; 
    background: linear-gradient(45deg,20% #361134,#B0228C, #EA3788)

`


const Portfolio = () => {


    return (
        <>
            <motion.div
            initial={{ opacity: 0.7}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0.7}}
                transition={{ duration: 0.5 }}
                >
                
            </motion.div>
            <Main>
                <Spinner />    
            </Main> 
        </>
    )
}

export default Portfolio