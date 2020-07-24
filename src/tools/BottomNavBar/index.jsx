import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import useStyles from './style';

export default function BottomNavBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    />
  );
}
