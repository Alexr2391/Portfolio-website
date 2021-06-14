import React, {Fragment, useState, useEffect} from 'react'
import {BrowserRouter as Routing, Switch, Route} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import AppBar from './components/AppBar'
import HamburgerMenu from './components/partials/HamburgerMenu'
import Panel from './components/partials/Panel'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'





const useStyles = makeStyles({
    root: {
        height : '100vh',
        width: '100%'
    },
    square : {
        height : 100, 
        width: 100, 
        backgroundColor: '#fff',
    },
    display: {
        display: 'none'
    }

})

const App = () => {

    const [viewport, setViewport] = useState(false)
    const classes = useStyles()

    const mediaScreens = () => {
        const viewportWidth = window.innerWidth
        viewportWidth < 1000 ? setViewport(true) : setViewport(false)
    }


    useEffect(() => {
        window.addEventListener('resize', mediaScreens)
        window.addEventListener('load', mediaScreens)
    }, [])

    return (
        <Fragment>
            <div className={classes.root}>
                <Routing>
                    <AppBar viewport={viewport}>
                        {
                            viewport && <HamburgerMenu
                                size="40"
                                variant="#323232"
                            >
                                <Panel 
                                    width="100"
                                    swipe="left"
                                />
                            </HamburgerMenu>
                        }
                    </AppBar>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={ContactForm} />
                    </Switch>
                </Routing>
            </div>
        </Fragment>
    )
}

export default App
