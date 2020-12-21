import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
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
    const headShift = ['Niv', 'Shahar', 'Avishai', 'Asi']
    const secGards = ['Itai', 'Natali', 'Orel', 'Ori', 'Daniel', 'Almog', 'Ami', 'Yosi', 'DODI', 'olol']

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
                <h3>Report Form</h3>
            </Grid>
            <Grid item>
                <TextField
                    id="standard"
                    label="Event Report Name"
                    name='name'
                    value={report.name}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="standard-basic"
                    label="Event Location"
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
                        label="Date picker dialog"
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
                    label="Select Shift head"
                    name='shiftHead'
                    value={report.shiftHead}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {headShift.map((option) => (
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
                    className={classes.select}
                    multiple
                    name='participants'
                    value={report.participants}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {secGards.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={report.participants.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-multiline-static"
                    label="Event Discription"
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
                    label="Event Summary"
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






