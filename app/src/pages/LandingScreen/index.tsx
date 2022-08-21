import { FC } from 'react';
import { Button, Link, Tooltip } from '@material-ui/core';
import { useHistory } from 'react-router';

import mediumLogo from '../../assets/medium-logo.svg';
import discordLogo from '../../assets/discord-logo.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import documentLogo from '../../assets/document-logo.svg';
import Screen from '../../components/layout/Screen';
import { routes } from '../../router/routes';
import useCommonStyles from '../../assets/styles';
import { useStyles } from './styles';
import { useViewport } from '../../hooks/useViewport';
import { DeviceType } from '../../providers/ViewportProvider';
require('./styles.css');

const LandingScreen: FC = () => {
  const { device } = useViewport();
  const classes = { ...useCommonStyles(), ...(useStyles({ device }) as any) };
  const { push } = useHistory();

  return (
    <div className={classes.root}>
      <img
        className={device === DeviceType.Phone ? 'banner-small' : 'banner'}
        src="Hiraeth.jpeg"
        alt={'Site banner'}
        width={device === DeviceType.Phone ? '100px' : '400px'}
        
      />
      <div className={classes.socialLinksContainer}>
        <div className={classes.socialLinkContainer}>
          
          <Tooltip title="Discord" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={`http://discord.gg/hiraethnft`}
            >
              <img src={discordLogo} alt={'disord-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div>
        <div className={classes.socialLinkContainer}>
          <Tooltip title="Twitter" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={'https://twitter.com/Hiraeth_NFT'}
            >
              <img src={twitterLogo} alt={'twitter-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div>
        <div className={classes.socialLinkContainer}>
          <Tooltip title="Website" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={'https://www.hiraethland.xyz/'}
            >
              <img src={documentLogo} alt={'document-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div>
        <div className={classes.socialLinkContainer}>
          <Tooltip title="Medium" placement="top">
            <Link
              className={classes.socialLink}
              target="blank"
              href={'https://medium.com/@hiraethnft'}
            >
               <img src={mediumLogo} alt={'medium-logo'} width="50px" />
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          variant="outlined"
          color="secondary"
          size={'large'}
          onClick={() => push(routes.RAFFLES)}
          className={classes.mainButton}
        >
          Hiraeth Raffles
        </Button>
      </div>
    </div>
  );
};

const LandingScreenWithLayout = () => (
  <Screen>
    <LandingScreen />
  </Screen>
);

export default LandingScreenWithLayout;
