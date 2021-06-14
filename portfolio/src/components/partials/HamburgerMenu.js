import React, {useState, Fragment} from 'react'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
    'outer-hamburger' : {
        height: 'inherit', 
        width: 'inherit'
    },
    hamburger: {
        width: props => parseInt(props.size), 
        height : props => parseInt(props.size),
        borderRadius : '5px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    invisible: {
        display: 'none'
    },
    stroke: {
        borderRadius: '2px',
        height: props => parseInt(props.size)/20, 
        width: '80%',
        backgroundColor: props => props.variant,
        transition: '.1s ease-in-out', 
    },
    rotateRight: {
        position: 'absolute',
        transform: 'rotate(45deg)',
        transition: ' .1s ease-in-out'
    },
    rotateLeft: {
        position: 'absolute',
        transform: 'rotate(-45deg)',
        transition: ' .1s ease-in-out'
    },
    leaveScreen :{
        transform: props => `translateX(-${parseInt(props.size)}px)`,
        transition: ' .1s ease-in-out'
    }
})


const HamburgerMenu = ({children, ...props}) => {

    const [active, setActive] = useState(false)

    const open = () => {
        active === false ? 
            setActive(true) 
            : setActive(false)
    }

    const classes = useStyles(props)
    const element = React.Children.toArray(children)
    const childWithProps = React.cloneElement(element[0],{isActive: active, close : active => setActive(active)})

    return (
        <Fragment>
            <div>
                <div 
                    className={classes.hamburger}
                    onClick={open}
                >
                    <div 
                        className={`${classes.stroke} 
                        ${active ? classes.rotateRight : ''}`}
                    >
                    </div>
                    <div 
                        className={`${classes.stroke} 
                        ${active ? classes.leaveScreen : ''}`}
                    >
                    </div>
                    <div 
                        className={`${classes.stroke} 
                        ${active ? classes.rotateLeft : ''}`}
                    >
                    </div>
                </div>
            </div>
            {childWithProps}
        </Fragment>
    )
}

HamburgerMenu.defaultProps = {
    variant: '#000',
    size: 45
}

export default HamburgerMenu
