import React from 'react'
import {makeStyles} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Skeleton from '@material-ui/lab/Skeleton'


const useStyles = makeStyles({
    outerlayouter: {
    },
    cardLayout: {
        overflow: 'hidden',
        width: 290,
        height: 600,
        borderRadius: '45px',
        boxShadow: '0em .5em 3em rgba(0, 0, 0,.2),inset 0 .2em 1em rgba(0, 0, 0,.2),inset 0 .1em .5em rgba(0, 0, 0,.4)',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    innerLayover :{
        height: '98%',
        width: '97%',
        borderRadius: '45px',
        display: 'grid',
        gridTemplateColumns: `repeat(2, 1fr)`,
        gridTemplateRows: `repeat(3, auto)`,
        border: '1px solid rgba(55,55, 55,.1)',
        alignItems: 'center',
        justifyItems: 'center'
    },
    skeleton :{
        width: '90%'
    },
    image:{
        gridColumnEnd : 'span 3',
        height: '100%',
        width: '100%',
        border: '1px solid rgba(55,55, 55,.1)',
        background: '50% no-repeat url("buildings.jpeg")'
    }

})


const Card = () => {

    const classes = useStyles()

    return (
        <div className={classes.outerlayouter}>
            <div className={classes.cardLayout}> 
                <div className={classes.innerLayover}>
                    <Avatar style={{height: 70, width: 70}}/>
                    <div className={classes.skeleton}>
                        <Skeleton />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                    </div>
                    <div className={classes.image}></div>
                </div>
            </div>
        </div>
    )
}

export default Card
