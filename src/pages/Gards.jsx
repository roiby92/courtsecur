import { Grid } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddNewGard from '../components/Gards/AddNewGard'
import GardCard from '../components/Gards/GardCard';

const Gards = () => {
    const gards = useSelector(state => state.gards.gards)

    const [open,setOpen] = useState(false)
    
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
        >
            {gards.map(g => <GardCard gard={g} />)}
            <AddNewGard />
        </Grid>
    )
}

export default Gards
