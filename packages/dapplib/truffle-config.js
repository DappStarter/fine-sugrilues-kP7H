require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off foot dance recipe situate collect install clog slot gesture'; 
let testAccounts = [
"0x579fbcf46c279cd8e40659bd3241c03d1421f98302bb451f0cae01a7da67f35e",
"0x82e49f0263b61287d14b5b60426a5a922652ee438370b49077778440e8616047",
"0x3cba44555ce939114dc0dd9d88c3deee6f715dc5398fb54ec6924df61b8fdad9",
"0x42bf243052f916e2788b0c4e050669ade51c181a2c948345cc24f57d6a644719",
"0xdcffd5483db982cbaa4cab3b58179917b6ec1c9d4d611e20d99eecd77e110874",
"0x6ccfc65da3ebb6e6b818a456f4c6ff2e9b8907700efa50d149028e0c2f44f4c2",
"0x66d7715d88a55a91b216eb72d2f41d5e80afd3a08f6367df0ddf9ce7c388739e",
"0x177bf759f045f9927e79c55847f4a36c435337fa8941aa764142188710b27404",
"0xd3baab736c1d488b3cd65abbc48dbf91b4bf2bd472b93b7fc3e264f076871279",
"0x12e7cf1ac5886aac75e8f786057e00b6aec89c2474ef7ce7964d5c6c66543c51"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

