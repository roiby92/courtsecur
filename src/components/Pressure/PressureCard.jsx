import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "250px",
        height: '180px'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PressureCard = (props) => {
    const classes = useStyles();
    const { pressure } = props
    return (
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {pressure.gard}
                    </Typography>
                    <Typography variant="h5" >
                        {pressure.date}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        <ul>
                            {pressure.shifts.map(s => <li key={s}>{s}</li>)}
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PressureCard
