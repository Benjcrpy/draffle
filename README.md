This steps are might be help you in deploy in devnet, testnet or mainnet.

1. Forked new draffle 
2. Created id.json
For me I used a json I have in hands, and make a copy inside /draffle -> wallet = "./DWoSTuBwY2io8q2LdmeUBJbXJGByXiGUasPp141Rry82.json"
Also I created one more keygen for the raffle program inside /draffle
3. Took the pub key and put it into draffle lib.rs
In this step I made edits to these files:
1- /draffle/anchor.toml
anchor_version = "0.17.0"

[provider]
cluster = "mainnet"
wallet = "./DWoSTuBwY2io8q2LdmeUBJbXJGByXiGUasPp141Rry82.json"

[programs.mainnet]
draffle = "RFHiAdhEKVXQhTDJrG2WS2MsFBREqWEyNw3Qct2rCuT"

[scripts]
test = "mocha -t 1000000 tests"

2- /draffle/programs/draffle/src/lib.rs
#[cfg(not(feature = "production"))]
declare_id!("RFHiAdhEKVXQhTDJrG2WS2MsFBREqWEyNw3Qct2rCuT");

#[cfg(feature = "production")]
declare_id!("RFHiAdhEKVXQhTDJrG2WS2MsFBREqWEyNw3Qct2rCuT");

3- /draffle/cli/entrypoints.rs even though I believe that I am overriding this file with my commands, I did the edits anyways
long = "program-id",
default_value = "RFHiAdhEKVXQhTDJrG2WS2MsFBREqWEyNw3Qct2rCuT"

Some(wallet) => wallet,
None => shellexpand::tilde("./DWoSTuBwY2io8q2LdmeUBJbXJGByXiGUasPp141Rry82.json").to_string(),

4- After anchor build.. /draffle/target/deploy/draffle-keypair.json
I added the private key of the keygen I created for the raffle program in here

4. Ran anchor build
4.1. Edit ( 4 )
5. Deployed draffle
5.1. Run cargo build Am not sure where did I run this command, to make sure run it twice in /draffle/cli and /draffle
6. Changed env on front end repo
Let's keep the FE for later
7. Tried to create raffle


Program pubkey
rafQbXM9VpPV9hr9NqNHuGECBhwNkbLvXt8VS31zbp4.json < This is the Program ID of the draffle i deplyoed manually in devnet so this is working for devnet only.

Deploy pubkey
DePSWB4sds9fprQHDA5Mnn6LGkYH4p329FRNKrZd1DMJ.json < So this is my wallet using this raffles.

Program Id: rafQbXM9VpPV9hr9NqNHuGECBhwNkbLvXt8VS31zbp4 < PROGRAM ID of this raffle

solana program deploy --program-id rafQbXM9VpPV9hr9NqNHuGECBhwNkbLvXt8VS31zbp4.json target/deploy/draffle.so < this command is deploying.


All commands to be run from the project root after a `cargo build`


HERE'S THE COMMAND OF CREATING A RAFFLES!

Create a raffle, with proceeds mint, amount, end date, max-entrants and a specific wallet

(CREATING RAFFLE)
target/debug/draffle create-raffle \
    So11111111111111111111111111111111111111112 \ 
    0.1 \ 
    "2022-06-11 23:59" \
    --max-entrants 20 \
    --provider.cluster https://api.devnet.solana.com/  \
    --provider.wallet DePSWB4sds9fprQHDA5Mnn6LGkYH4p329FRNKrZd1DMJ.json \
    --program-id rafQbXM9VpPV9hr9NqNHuGECBhwNkbLvXt8VS31zbp4

(EXPLAINATION)
target/debug/draffle create-raffle \
    So11111111111111111111111111111111111111112 \ # SPL token mint address that can be used to buy tickets, this is USDC
    1000000 \ # Cost per ticket in given token, this is given cause solana has 9 decimals
    "2022-04-22 14:55" \ # Raffle end date in UTC timezone. Double check this if you encounter a 0x1771 error.
    --max-entrants 420 \ # Max tickets available for given raffle
    --provider.cluster devnet \ # Cluster
    --provider.wallet operations/keypair.json # Keypair to execute command with
    --program-id <program-id> # Deployed raffle program

(OUTPUT)
5tA54UMYd1tBSJ2VTaUBFE7mWZsM3n1pPucMyzvguQU1 # Program ID
Raffle address: CGraPGpJhZ9M35weYyQgnVVnBeyv1btyMsp8eAdD6Kr1 # Raffle address. Note this down.
Cluster clock unix_timestamp: 1649035423, raffle end_timestamp: 1649036100

Add a prize to the raffle, 1 NFT of mint 7d3gKBqFeA4KpUwC6uYexK6LPTmzeUP7tHV1KEiFmZUa, add prize index 0


(ADDING PRIZE)
target/debug/draffle add-prize \
    CGraPGpJhZ9M35weYyQgnVVnBeyv1btyMsp8eAdD6Kr1 \
    9h6J7E3B7S6Cfji1LthS9gBVBXNK82soYL78ztkKf2tc \
    5 \
    0 \
    --provider.cluster https://api.devnet.solana.com/ \
    --provider.wallet DePSWB4sds9fprQHDA5Mnn6LGkYH4p329FRNKrZd1DMJ.json \
    --program-id rafQbXM9VpPV9hr9NqNHuGECBhwNkbLvXt8VS31zbp4

(EXPLANATION)
target/debug/draffle add-prize \
    CGraPGpJhZ9M35weYyQgnVVnBeyv1btyMsp8eAdD6Kr1 \ # Raffle address (pubkey)
    9h6J7E3B7S6Cfji1LthS9gBVBXNK82soYL78ztkKf2tc \ # Token (pubkey) of the prize to be added. Mint address in case of fungible tokens.
    1 \ # How many of the token should be added as prize. Use 1 for NFTs
    0 \ # Position in the array of prizes. Starting at 0, 1, 2...
    --provider.cluster https://api.devnet.solana.com/
    --provider.wallet operations/operator-keypair.json
    --program-id --program-id rafQbXM9VpPV9hr9NqNHuGECBhwNkbLvXt8VS31zbp4


(NO OUTPUT THIS ONE)

(SHOW RAFFLE)
target/debug/draffle show-raffle \
rafQbXM9VpPV9hr9NqNHuGECBhwNkbLvXt8VS31zbp4 \
--provider.cluster https://api.devnet.solana.com/

(EXPLAINATION)
target/debug/draffle show-raffle \
<raffle-address> \
--provider.cluster devnet

(OUTPUT)
5tA54UMYd1tBSJ2VTaUBFE7mWZsM3n1pPucMyzvguQU1 # Raffle program ID
Raffle {
    creator: 3Xaq71yEsJzyXmvwPf3fd7DywMULQvc2zYcRejDsdfQ8, # Should be your operator-keypair address
    total_prizes: 1,
    claimed_prizes: 0,
    randomness: None,
    end_timestamp: 1649036100, # End timestamp in UNIX time
    ticket_price: 1,
    entrants: H8p1wcT3aZ8h9Q9x9w95VPqGedYjWKHFSsRvxvDVzJWT, # Account storing entrants
}


Reveal Winners This can only be done after a raffle has ended and the buffer period has completed. If you get an error executing this, try again later.

(REVEAL WINNERS)
target/debug/draffle reveal-winners \
    <raffle-address> \
    --provider.cluster devnet \
    --provider.wallet operations/operator-keypair.json \
    --program-id <program-id>

(COLLECT PROCEEDS)
target/debug/draffle collect-proceeds \
    <raffle-address> \
    <target-token-account> \
    --provider.cluster devnet \
    --provider.wallet scripts/operator-keypair.json \
    --program-id <program-id>

# EXPLANATION
target/debug/draffle collect-proceeds \
    <raffle-address> \ # Raffle address
    <target-token-account> \ # The token account matching the token used to pay for tickets, where the proceeds will be deposited.
    --provider.cluster devnet \
    --provider.wallet scripts/operator-keypair.json \
    --program-id <program-id>

Tken for buying tickets
Any SPL token can be used to buy tickets for the raffle. Note that after a raffle has been created, you're not able to change which token will be used for buying tickets. If you want to use SOL directly, specify the WSOL mint address as the token So11111111111111111111111111111111111111112, otherwise the spl token mint address such as USDC EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v. If you used Wrapped SOL, the buyer can pay with SOL directly and it will automatically be converted to wrapped sol when you withdraw the proceeds.

Collecting proceeds
SPL You need to specify an ATA (associated token address) for the target token when withdrawing. Make sure you have at least a little bit of the token that was used for buying tickets for the given raffle in the target wallet, and copy the ATA of the token as the target. You can also run spl-token account-info EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v to see the ATA. You can also run spl-token accounts to get a list of all SPL token accounts your wallet has.


spl-token account-info 29a6AWBP44QUnfZKNpWSU7tkfrfDBym94EtCZBPvJ2ao # SPL Token mint

# OUTPUT
Address: Xqxcg3VxxcwD3iz3JYKq4CGUwu6vMsNebEmcwA1HFgw # ATA, this is what you need as target
Balance: 1
Mint: 29a6AWBP44QUnfZKNpWSU7tkfrfDBym94EtCZBPvJ2ao # SPL Token mint
Owner: PerrXcLkieKrGRuodwhYikfnYJi9cTNiRyK5hrufjXy
State: Initialized
Delegation: (not set)
Close authority: (not set)


SOL Proceeds will be withdrawn to WSOL after the raffle has finished. For this you will need an ATA for WSOL. The easiest way to create it is to wrap some SOL into WSOL, as this will create the token account for it automatically. Run the command spl-token wrap 0.01 to wrap 0.01 SOL into WSOL. This will output Wrapping 0.1 SOL into Czt28u7gMKPy2924adLsCiL9Hg65XqS2GDjDTQuCGNMf where Czt2...GNMf is the token account address. Use this address for the collect-proceeds command as target when withdrawing proceeeds.


SPL Token
You must specify all custom SPL tokens used for your raffles within the app/src/config/tokenRegistry.ts file as seen in previous examples.

Raffles view
The .env file contains a REACT_APP_TESTING variable. This influences if the testWhitelist or prodWhitelist will be used in the app/src/config/raffleWhitelist.ts file. This defines which raffles show up on the public raffle list screen. Each raffle's picture and name can be customized through the frontend as seen in the examples within the file.






# dRaffle

dRaffle is a decentralized raffle protocol on Solana, which creates the necessary technical foundation to the dRaffle Luck Club. dRaffle is the first of its kind open-source transparent system to allow raffling of any token, in any amount, any mint, unlimited number of participants or number of prizes.

[dRaffle dApp](https://www.draffle.io/)

[Litepaper](https://www.draffle.io/dRaffle-litepaper.pdf)

[Solana ignition hackathon entry](https://devpost.com/software/draffle-luck-club)

[Discord](https://discord.com/invite/BwPsaDzbNR)

The dRaffle program has been deployed and is a verifiable build https://anchor.projectserum.com/program/dRafA7ymQiLKjR5dmmdZC9RPX4EQUjqYFB3mWokRuDs

## Components

- The dRaffle program, to create raffles
- The dRaffle cli, to be able to interact with all the draffle commands to create raffle and add prizes
- The community staking program, to allow user to stake and earn rewards on the dRaffle community token, which is a free gift for early adopters and will give access to raffles

## Localnet usage

`scripts/start_dev.sh` sets up an entire environment with the program raffles and NFTs in order to functionaly test the app

Before running it make sure the programs are built with `anchor build`

When `start_dev.sh` is running the react app will show a set of test raffles with various prizes and raffle end times

## Notes

- metaplex-token-metadata-test-client needs to be executable chmod +x scripts/metaplex-token-metadata-test-client, build it from source for other OSes than linux with [metaplex-program-library](https://github.com/metaplex-foundation/metaplex-program-library) using `cargo build --release`
- install gdata on MacOS in order to be able to run start_dev.sh https://www.shell-tips.com/linux/how-to-format-date-and-time-in-linux-macos-and-bash/
- To use your own deployment, create a new program keypair, update declare_id! in [programs/draffle/src/lib.rs](programs/draffle/src/lib.rs) and use the (cli commands)[cli/README.md] with your program id! Run the react app with `REACT_APP_DRAFFLE_PROGRAM_ID` set to your new program id.
