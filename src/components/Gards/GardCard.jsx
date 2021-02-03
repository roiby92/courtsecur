import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        width: "333px",
        height: '150px'
    },
    title: {
        fontSize: 25,
    },
    pos: {
        marginBottom: 12,
    },
});
const GardCard = (props) => {
    const classes = useStyles();

    const { gard } = props
    return (
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {gard.name}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        {gard.email}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {gard.phone}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default GardCard;