import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useHistory } from 'react-router-dom';

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

export default function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory()
    const { open, handleDrawerClose } = props

    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                onClose={handleDrawerClose}
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                תפריט
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => {
                        history.push('/')
                        handleDrawerClose()
                    }}>
                        <ListItemText primary='סידור עבודה' />
                    </ListItem>


                    <ListItem button onClick={() => {
                        history.push('/reports')
                        handleDrawerClose()
                    }}>
                        <ListItemText primary='דוחות אירוע' />
                    </ListItem>
                    <ListItem button onClick={() => {
                        history.push('/gards')
                        handleDrawerClose()
                    }
                    }>
                        <ListItemText primary='מאבטחים' />
                    </ListItem>
                    <ListItem button onClick={() => {
                        history.push('/pressure')
                        handleDrawerClose()
                    }
                    }>
                        <ListItemText primary='רשימת לחץ' />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}