import React from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import Slider from './Slider'
import { makeStyles } from '@material-ui/core'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link';
import Spinner from './partials/Spinner'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import MobileLayout from './partials/MobileLayout'


const useStyles = makeStyles({
    root: {
        position: 'relative',
        zIndex: 5,
        width: `100%`,
        height: '200vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7'
    },
    overLay :{
        width: `95%`,
        transform: 'translateY(-50px)',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        backgroundColor: '#fff',
        boxShadow: '0 .5em 1em rgba(0,0,0, .3)',
        overflow: `hidden`,
        display: `grid`,
        gridTemplateColumns: `repeat(3, 1fr)`,
        gridTemplateRows: 'repeat(4, 25%)',
        justifyItems: 'center'
    },
    headBanner:{
        height : 500,
        gridColumnEnd: `span 3`,
        width: `100%`,
        borderTop: '1px solid #fff',
        backgroundImage: `url('space3.jpg')`,
        backgroundPosition: `50% 50%`,
        backgroundRepeat : 'no-repeat',
        backgroundSize :'cover',
        boxShadow: '0 .5em 1em rgba(0,0,0, .4)',
        "@media screen and (max-width:1000px)": {
            height : 500,
        }

    },
    indexItem:{
        position: 'relative',
        zIndex: 10
    }

})

const Home = () => {

    const classes= useStyles()
    const {scrollYProgress} = useViewportScroll() 



    return (
        <motion.div
            onScroll={console.log(scrollYProgress)}
            height={'100%'}
            initial={{ opacity: 0.7}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0.7}}
            transition={{ duration: 0.5 }}>
            <Spinner variant='#4d194d'/>
            <Slider 
                src="blackhole.jpg"
                title='Inspired Front end Developer'
                subs='Javascript &#38; React adept'
            >
            <motion.div
                animate={{opacity:1,y: -60}}
                transition={{duration: 2, delay : .9}}
            > 
                <ButtonGroup 
                    size="large"
                    aria-label="large outlined contained primary button group">
                        <Link 
                            href="https://github.com/Alexr2391"
                        >
                        <Button 
                            color="default"
                            variant="contained" 
                        >
                            <GitHubIcon />
                        </Button>
                        </Link>
                        <Link 
                            href="https://www.facebook.com/alex.ritsonis.5"
                        >
                        <Button
                            variant="contained" 
                            color="primary"
                        >
                            <FacebookIcon />
                        </Button>
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/ritsonis-alexis-56722061/"
                        >
                        <Button
                            variant="contained" 
                            color="default"                   
                        >
                        <LinkedInIcon />
                        </Button>
                        </Link>
                </ButtonGroup>
            </motion.div>
            </Slider>
            <div 
            className={classes.root}>
                <div 
                className={classes.overLay}>
                    <div 
                    className={classes.headBanner}
                    >
                    </div>
                        <MobileLayout />
                </div>
            </div>
        </motion.div>

    )
}

export default Home
