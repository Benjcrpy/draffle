import { createTheme } from '@material-ui/core/styles';
import { DeviceType } from '../providers/ViewportProvider';

const PRIMARY_COLOR = '#e2e8ef';

const theme = ({ device }: { device: DeviceType }) =>
  createTheme({
    typography: {
      allVariants: { color: '#e2e8ef', fontFamily: 'Inter,sans-serif', fontWeight: 'bold' },
      h1: {
        color: '#e2e8ef',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: device === DeviceType.Phone ? '20px' : '40px',
      },
      h2: {
        color: '#e2e8ef',
        fontWeight: 'bold',
        fontSize: device === DeviceType.Phone ? '18px' : '25px',
      },
      h3: {
        color: '#e2e8ef',
        fontWeight: 'bold',
        fontSize: device === DeviceType.Phone ? '15px' : '16px',
      },
      h4: {
        color: '#e2e8ef',
        fontSize: device === DeviceType.Phone ? '20px' : '20px',
      },
      body1: {
        fontSize: device === DeviceType.Phone ? '14px' : '14px',
      },
      overline: {
        color: '#e2e8ef',
        fontSize: device === DeviceType.Phone ? '12px' : '13px',
      },
      caption: {
        fontSize: device === DeviceType.Phone ? '16x' : '16px',
      },
    },
    palette: {
      type: 'dark',
      background: {
        paper: '#212225',
        default:
          'linear-gradient(0deg, rgba(15,23,74,1) 0%, rgba(6,18,98,1) 100%, rgba(57,9,74,1) 100%);',
      },
      primary: {
        main: PRIMARY_COLOR,
      },
      grey: { 400: '#e2e8ef' },
    },
  });

export default theme;
