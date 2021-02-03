import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'
import { Grid, TextField, Button } from '@material-ui/core'

const Auth = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleChange = event => {
        const key = event.target.name
        const value = event.target.value
        setUser({ ...user, [key]: value })
    };

    return (
        <Grid container justify='center' alignContent='center'>
            <Grid item>
                <TextField
                    id="standard"
                    type='text'
                    label="שם משתמש"
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="standard"
                    type='password'
                    label="סיסמא"
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <Button onClick={() => dispatch(actions.auth(user.email, user.password))}>
                    התחבר למערכת
                </Button>
            </Grid>
        </Grid>
    )
}

export default Auth
