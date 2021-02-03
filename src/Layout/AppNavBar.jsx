import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Drawer from './Drawer'

const useStyles = makeStyles(() => ({
  navBar: {
    position: "fixed",
    height: '110px',
    textAlign: 'center',
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
      <AppBar className={classes.navBar}>
        <h2>משמר בתי המשפט - חדרה</h2>
        <h3 onClick={handleDrawerOpen}>לחץ כאן לתפריט</h3>
      </AppBar>
      <Drawer
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  );
}