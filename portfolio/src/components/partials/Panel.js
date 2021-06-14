import React, {Fragment} from 'react'
import {makeStyles} from '@material-ui/core/'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { motion } from 'framer-motion'
import CloseIcon from '@material-ui/icons/Close'


const useStyles = makeStyles({
    "panel-body" : {
        height: '100vh', 
        width: 0, 
        backgroundColor: 'black',
        transition: '.2s ease-in-out',
        zIndex: 999,
    },
    innerWrapper:{
        display: "flex",
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        "& > div" : {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    expanded: {
        width: props => `${props.width}%`,
        transition: '.2s ease-in-out'
    },
    panelright: {
        position: 'fixed', 
        top: 0,
        right: 0
    },
    panelleft: {
        position: 'fixed', 
        top: 0,
        left: 0
    },
    beforeAnim :{
        transform: 'translateY(-50px)',
        opacity: '0',
        flexGrow: 1
    },
    avatar: {
        position: 'relative',
        '&::after':{
            position: 'absolute',
            content: "''",
            width: "105%", 
            height: '105%',
            borderRadius: '100%',
            border: "2px solid coral",
            top: '50%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            animation: '$ripple 1.1s infinite ease-in',
            transformOrigin: 'center',
            opacity: .7
        }
    },
    '@keyframes ripple' : {
        '0%' : {
            transform: 'translate(-50%, -50%) scale(0.9)'
        },
        '100%' : {
            transform: 'translate(-50%, -50%) scale(1.0)'
        }
    },
    buttonPlaceholder: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        opacity: 0
    },
    closebutton : {
        backgroundColor: '#fff'
    },
    listFlex :{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        listStyleType: 'none',
        alignItems: 'center',
    },
    link :{
        marginTop : 15,
        padding: '.4em 2em',
        textDecoration: 'none',
        transition: 'background .1s ease-in-out',
        background: `none`,
        color: '#fff',
        fontSize: `1.1em`,
        "&:hover" : {
            transition: 'background .1s ease-in-out',
            background: `rgb(255,255,255)`,
            color: '#323232',
            fontWeight: 'bold',
            backgroundColor: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 34%, rgba(255,255,255,1) 66%, rgba(255,255,255,0) 100%)`
        }
    }
})

const Panel = ({isActive, close, ...props}) => {

    const classes = useStyles(props)



    return (
        <Fragment>
                <div 
                    className={
                    `${classes['panel-body']} 
                    ${isActive ? classes.expanded : ''}
                    ${props.swipe ==="right" ? classes.panelright : classes.panelleft}
                    `}
                >
                {isActive && 
                    <div className={classes.innerWrapper}>

                        <motion.div
                            animate={{opacity: 1}}
                            transition = {{delay: 0.3, duration: .3}}
                            className={classes.buttonPlaceholder}
                        >
                            <Button 
                                className={classes.closebutton}
                                onClick={() => close(false)}
                                variant="contained"
                            >
                                <CloseIcon style={{color: '#323232'}}/>
                            </Button>
                        </motion.div>

                        <motion.div
                            animate={{y: -50, opacity: 1}}
                            transition = {{delay: 0.3, duration: .5}}
                            className={classes.beforeAnim}
                        >
                            <motion.div
                                className={classes.avatar} 
                                whileHover={{scale: 1.1}}
                            >
                                <Avatar src="/johndoe.jpg" style={{height: 150, width: 150}}/>
                            </motion.div>
                            <ul className={classes.listFlex}>
                                <Link className={classes.link} onClick={() => close(false)} to="/">
                                    <li>
                                        Home
                                    </li>
                                </Link>  
                                <Link className={classes.link} onClick={() => close(false)} to="/contact">
                                    <li>
                                        Portfolio
                                    </li>
                                </Link>
                                <Link className={classes.link} onClick={() => close(false)} to="/">
                                    <li>
                                        Home
                                    </li>
                                </Link> 
                            </ul>
                        </motion.div>
                    </div>
                }
                </div>
        </Fragment>
    )
}

Panel.defaultProps = {
    swipe : "left",
    isActive: null,
    close: null
}

export default Panel
