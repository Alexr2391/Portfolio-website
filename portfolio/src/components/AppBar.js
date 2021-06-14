import React, {useState, useEffect, useRef} from 'react'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';


const useStyles = makeStyles({
    navigationBar : {
        position: 'absolute',
        top: 0,
        left:0, 
        width: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', 
        transition: '.3s ease-in-out',
        zIndex: 15,
        '@media screen and (max-width:1000px)': {
            backgroundColor: '#fff',
        }
    },
    initialpos: {
        height: 90,
        '@media screen and (max-width:1000px)': {
            height: 70
        }
    },
    scrollFixed: {
        height: 80,
        position: 'fixed',
        backgroundColor: '#fff',
        boxShadow: '0 .5em 1em rgba(0,0,0, .2)'
    },
    navBar : {
        height: 70,
        width: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media screen (max-width: 1000px)': {
            width: '100%',
        }
    },
    logoContainer: {
        flex: .45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        '@media screen (max-width: 1000px)': {
            flex: .50
        }
    },
    avatarImg: {
        height: 60, 
        width: 60
    },
    menuItems: {
        flex: .55,
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'flex-end',
        
        "& > *": {
            float:"right"
        },
        '@media screen (max-width: 1000px)': {
            flex: .50
        }
    },
    profileName: {
        color: '#fff',
        fontSize: '.9em',
        '@media screen and (max-width:1000px)': {
            fontSize: '.9em',
            color: '#323232'
        }
    },
    scrolledName: {
        color: '#323232',
        fontSize: '.9em'
    },
    scrolledItem: {
        color: '#323232',
        padding: '.7em',
        borderRadius: '5px',
        transition : '.2s ease-in-out',
        fontSize: '.9em',
        '&:hover': {
            backgroundColor: 'purple',
            color: '#fff',
            boxShadow: '0 .5em 1em rgba(0,0,0, .3)',
            transition : '.2s ease-in-out'
        }
    },
    initialItem: {
        color: '#fff',
        fontSize: '.9em'
    },
    menuBar :{
        flex: 1,
        display: 'flex', 
        alignItems: 'center',
        listStyleType: 'none',
        justifyContent: 'space-evenly',
        '& > *' : {
            textDecoration: 'none',
            }
    },
    displayFlexCenter : {
        display: 'flex',
        alignItems: 'center',
        "& > span" : {
            marginLeft: 5
        }
    }
})

const AppBar = ({ children, viewport }) => {


    const classes = useStyles()
    const scrollRef = useRef()

    const [scroll, setScroll] = useState(false)


    const handleScroll = () => {
            const navbarHeight = scrollRef.current.offsetHeight + 10
            const scroll = window.scrollY

            setScroll(scroll > navbarHeight)
        }


    useEffect(() => {
        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll) 
        }
    },[])


    
    return (
        <header 
            ref={scrollRef} 
            className={`${classes.navigationBar} ${scroll ? classes.scrollFixed : classes.initialpos}`}
        >
            <nav className={classes.navBar} >
                <div className={classes.logoContainer}>
                    <Button>
                        <h3 className={`${classes.profileName} ${scroll ? classes.scrolledName : null}`}>Alexis Ritsonis</h3>
                    </Button>
                    {!viewport && <Avatar className={classes.avatarImg} src="/johndoe.jpg" />}
                </div> 
                <div className={classes.menuItems}>
                    {!viewport ?
                        <ul className={classes.menuBar}>
                            <Link to="/">
                                <li key="Home"
                                    className={`${classes.displayFlexCenter} 
                                    ${scroll ? classes.scrolledItem : classes.initialItem}`}>
                                        <HomeIcon />
                                        <span>Home</span>
                                </li>
                            </Link>
                            <Link to="/portfolio">
                                <li key="Portfolio"
                                    className={`${classes.displayFlexCenter} 
                                    ${scroll ? classes.scrolledItem : classes.initialItem}`}>
                                    <AppsIcon />
                                    <span>Portfolio</span>
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li key="Contact"
                                className={`${classes.displayFlexCenter} 
                                    ${scroll ? classes.scrolledItem : classes.initialItem}`}>
                                    <ContactMailIcon />
                                    <span>Contact</span>
                                </li>
                            </Link>
                        </ul>
                        : children
                    }
                </div>
            </nav>
        </header>
    )
}


export default AppBar