import { colors, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Opacity } from '@material-ui/icons';

export const useStyles = makeStyles((theme: Theme) => ({
  background: {
    width: '100vw',
    height: '100vh',
    Opacity: 1,
    backgroundColor: '#0f172b',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));
