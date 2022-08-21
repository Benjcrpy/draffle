import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';
//change these to add or remove raffles (image uri can be url or local, in public folder)
const testWhitelist = new Map<string, RaffleMetaData>([
  [
    'Raffles Address', 
    { 
      name: 'Testing mythril',
      overviewImageUri: '/Users/anthony/draffle/app/public/resources/solana-logo-x3.gif',
    },
  ],
  [
    'Raffles Address', 
    { 
      name: 'Name of Raffle',
      overviewImageUri: '/resources/Hiraeth.png',
    },
  ],
  [
    'Raffles Address',
    { 
      name: 'Name of Raffle',
      overviewImageUri: '/resources/Hiraeth.png',
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
    [
    'GcwawZBFpHDCbBbKidHWp4w3rmvhuLTms2zLvtggKZEk', 
    { 
      name: 'Name of Raffle',
      overviewImageUri: '/resources/Hiraeth.png',
    },
  ],

]);

export const RAFFLES_WHITELIST = TESTING
  ? testWhitelist
  : prodWhitelist;
