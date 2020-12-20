import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppNavBar from './AppNavBar'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 0.5,
        marginTop: '50px',
    }
}));
const Layout = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppNavBar/>
            <main className={classes.content }>
                {props.children}
            </main>
        </div>
    )
}

export default Layout
