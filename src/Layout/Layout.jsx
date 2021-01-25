import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index'
import AppNavBar from './AppNavBar'
import Auth from '../components/Auth/Auth';
import { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(actions.fetchGards())
    }, [])

    if (auth.email === null) {
        return (
            <Auth />
        )

    }
    else if (auth.loading === true) {
        <CircularProgress size={100} />
    }
    else {
        return (
            <div className={classes.root}>
                <AppNavBar />
                <main className={classes.content}>
                    {props.children}
                </main>
            </div>
        )
    }
}

export default Layout
