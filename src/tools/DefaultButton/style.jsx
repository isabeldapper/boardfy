import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 'auto',
    color: '#FFFFFF',
    backgroundColor: '#FF6600',
    '&:hover': {
      backgroundColor: '#FF5100',
    },
  },
}));

export default useStyles;
