import React from 'react'
import { makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'

const useStyles = makeStyles({
    root: {
        position: 'relative',
        top: 0, 
        left: 0,
        zIndex: 1,
        height: '100vh',
        width: '100%'
    },
    innerContainer : {
        position: 'relative',
        height: 'inherit',
        width: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow:'hidden',
    },
    background: {
        position:'absolute',
        height: 'inherit',
        width: 'inherit', 
        backgroundImage: props => `url(${props.src})`,
        backgroundPosition: '50%', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transform: 'scale(1.2)',
    },
    sliderWrapper :{
        margin: '0 auto',
        position: 'relative',
        maxWidth: '1200px',
        width: '80%',
        zIndex: 3,
        '@media screen and (max-width:1000px)': {
            textAlign: 'center',
        },
        '& > h2': {
            margin : '60px 15px 20px 0',
            color: '#fff',
            opacity: 0,
            transform : `translateY(-50px)`,
        },
        '& > p': {
            color: '#fff',
            opacity: 0,
            transform : `translateY(-50px)`,
            marginBottom: 50
        },
        '& > div': {
            opacity: 0,
        }
    }
})

const Slider = (props) => {

    const classes = useStyles(props) 

    return (

        <div className={classes.root}>
            <div className={classes.innerContainer}>
                <motion.div className={classes.background}
                    animate={{scale: [1, 1.1,1]}}
                    transition={{duration: 10,times:[0, 0.7, 1], repeat:'Infinity'}}
                >
                </motion.div>
                <div className={classes.sliderWrapper}>
                    <motion.h2
                        animate={{opacity: 1, y: -50}}
                        transition={{duration: 2, delay : .5}}
                    >
                        {props.title}
                    </motion.h2> 
                    <motion.p
                        animate={{opacity: 1, y: -50}}
                        transition={{duration: 2, delay : .7}}
                    >
                        {props.subs}
                    </motion.p>
                    {props.children}
                </div>
            </div> 
        </div>
    )
}

Slider.defaultProps = {
    src : "default.jpg",
    title: 'Your Title',
    subs: `this is a subtitle`,
    children: null
}

export default Slider
