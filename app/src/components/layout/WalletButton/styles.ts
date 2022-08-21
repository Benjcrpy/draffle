import { Theme, alpha } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  walletConnectButton: {
    width: '100%',
    backgroundColor: 'Cyan',
    borderColor: '#f8d091',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
      borderColor: theme.palette.common.white,
    },
  },
  walletDisconnectButton: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: '#f8d091',
    color: '#f8d091',
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.2),
      borderColor: theme.palette.common.white,
    },
  },
}));
