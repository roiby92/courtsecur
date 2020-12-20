import React, { useState } from 'react';
import { Grid, MenuItem, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'

const AddNewReport = () => {

    const headShift = ['Niv', 'Shahar', 'Avishai', 'Asi']
    const secGards = ['Itai', 'Natali', 'Orel', 'Ori', 'Daniel', 'Almog', 'Ami', 'Yosi', 'DODI', 'olol']

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [head, setHead] = useState('')
    const [gards, setGards] = useState([])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleChange = (event) => {
        setHead(event.target.value);
    };
    const handleGards = (event) => {

    }
    return (
        <Grid container
            direction="column"
            justify="space-between"
            alignItems="center">
            <Grid item>
                <h3>Report Form</h3>
            </Grid>
            <Grid item>
                <TextField id="standard-basic" label="Event Report Name" />
            </Grid>
            <Grid item>
                <TextField id="standard-basic" label="Event Location" />
            </Grid>
            <Grid item>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        value={selectedDate}
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
                    label="Select"
                    value={gards}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {headShift.map((option) => (
                        <MenuItem key={option.value} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={head}
                    onChange={handleChange}
                    helperText="Please select your currency"
                >
                    {secGards.map((option) => (
                        <MenuItem key={option.value} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-multiline-static"
                    label="Event Ditails"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined"
                />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-multiline-static"
                    label="Event Summary"
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="outlined"
                />
            </Grid>
        </Grid>
    )
}

export default AddNewReport;
