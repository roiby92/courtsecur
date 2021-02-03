import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, MenuItem, TextField, Input, ListItemText, Select, Checkbox } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog'
import * as actions from '../../store/actions/index'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    select: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const AddNewPressure = (props) => {
    const classes = useStyles();
    const days = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת']
    const shifts = ["בוקר", "ערב", "לילה"]
    const { open, handleClose } = props
    const dispatch = useDispatch();

    const user = useSelector(state => state.auth)
    const gards = useSelector(state => state.gards.gards)
    const gard = gards.find(g => g.email === user.email)

    const [pressure, setPressure] = useState({
        gard: gard.name,
        date: '',
        shifts: [],
    });

    const handleChange = (event) => {
        setPressure({ ...pressure, [event.target.name]: event.target.value })
    };

    const submitPressure = () => {
        dispatch(actions.addPressure(pressure))
        setPressure({
            gard: gard.name,
            date: '',
            shifts: [],
        })
        handleClose()
    }
    return (
        <div>
            <Dialog open={open} onClose={() => handleClose()} aria-labelledby="form-dialog-title">
                <Grid container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center">
                    <Grid item>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="בחר יום בשבוע"
                        name='date'
                        value={pressure.date}
                        onChange={handleChange}
                        helperText="Please select your currency"
                    >
                        {days.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    </Grid>
                    <Grid item>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            label="משמרות"
                            className={classes.select}
                            multiple
                            name='shifts'
                            value={pressure.shifts}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {shifts.map((shift) => (
                                <MenuItem key={shift} value={shift}>
                                    <Checkbox checked={pressure.shifts.indexOf(shift) > -1} />
                                    <ListItemText primary={shift} />
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={submitPressure}>
                            הוסף משמרת ללחץ
                    </Button>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    )
}

export default AddNewPressure
