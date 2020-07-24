import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './style';

export default function DefaultButton({ label, onClick }) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.root} onClick={onClick}>{label}</Button>
  );
}

DefaultButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
