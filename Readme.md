# HRC1155 Tradable Smart Contract (Improvement of HRC721)

HRC1155 Tradable smart contract forked by ERC1155 developed by ENJIN team

## Development

- Install [node.js](https://nodejs.org/), npm and truffle
- Install dependencies :
  ```
  npm install
  npm install -g truffle
  ```
- Rename `.env.sample` to `.env` and change information with your own private key
- Compile the contracts:
  ```
  npm run compile
  ```
- Deploy the contracts:

1. Deploy to the testnet

```
npm run deploy:testnet
```

2. Deploy to the mainnet

```
npm run deploy:mainnet
```

HRC1155 is using Solc 0.6.12 as it's a most stable version.

## NFT development quick guide

ERC721 is depreciated and ERC1155 is being used

1. Change the NFT name and symbol with your own in the HarmonyNFT.sol
2. Develop the backend for the contract to serve the tokenURI and contractURI (these are required for NFT marketplace development like Opensea and for dAPP development)

- [Token URI sample response](https://api.dontbuymeme.com/memes/1)
- [Token metadata standard](https://docs.opensea.io/docs/metadata-standards)
- [Contract URI sample response](https://api.dontbuymeme.com/contract/memes-erc1155)

3. Frontend development

To develop the frontend, read about ERC1155 Standard. Here are the relevant links.

- https://github.com/ethereum/EIPs/issues/1155
- https://boxmining.com/erc-1155/
- https://docs.openzeppelin.com/contracts/3.x/api/token/erc1155
- https://kriptomat.io/cryptocurrencies/tokens/what-is-an-nft/
