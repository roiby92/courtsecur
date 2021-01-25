import React, { useEffect, useState } from 'react';
import { Button, Grid, MenuItem, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'


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

const AddNewReport = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    
    const [report, setReport] = useState({
        name: '',
        location: '',
        date: new Date(),
        shiftHead: '',
        participants: [],
        discription: '',
        summary: ''
    })
    const gards = useSelector(state => state.gards.gards)
    const headShift = gards.filter(g => g.type === '2')
    const secGards = gards.filter(g => g.type === '3')

    const handleChange = (event) => {
        setReport({ ...report, [event.target.name]: event.target.value })
        console.log(report);
    };

    const handleDateChange = (date) => {
        setReport({ ...report, date: date });
    };

    return (
        <Grid container
            direction="column"
            justify="space-evenly"
            alignItems="center">
            <Grid item>
                <h3>דו"ח אירוע</h3>
            </Grid>
            <Grid item>
                <TextField
                    id="standard"
                    label="שם אירוע"
                    name='name'
                    value={report.name}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="standard-basic"
                    label="מיקום האירוע"
                    name="location"
                    value={report.location}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="תאריך האירוע"
                        format="MM/dd/yyyy"
                        value={report.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item>
                <TextField
                    id="standard-select-currency"
                    select
                    label="אחראי משמרת"
                    name='shiftHead'
                    value={report.shiftHead}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {headShift.map((option) => (
                        <MenuItem key={option} value={option.name}>
                            {option.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item>
                <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    className={classes.select}
                    multiple
                    name='מאבטחים משתתפים'
                    value={report.participants}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {secGards.map((gard) => (
                        <MenuItem key={gard.id} value={gard.name}>
                            <Checkbox checked={report.participants.indexOf(gard) > -1} />
                            <ListItemText primary={gard.name} />
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-multiline-static"
                    label="תיאור האירוע"
                    multiline
                    name='discription'
                    valie={report.discription}
                    rows={4}
                    variant="outlined"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-multiline-static"
                    label="סיכום האירוע ומסקנות"
                    name='summary'
                    value={report.summary}
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(actions.insertReport(report))}>
                    Primary
                </Button>
            </Grid>
        </Grid >
    )
}

export default AddNewReport;






