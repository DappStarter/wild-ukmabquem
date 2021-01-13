require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil foot find repeat machine evolve install clock equal giant'; 
let testAccounts = [
"0xcf0fd41d835a4cad65aff6a55e26e09d6694e1162e3f87e2aa2d65f30483818f",
"0x5296042cb27878430aee6ab62157a52dce27ce3c39961d752a8bb41981160ef3",
"0x247553982d0789394a382266b3e11aaa4d559c64d295a6cf77e11ef6ef444c41",
"0xdfe6a20590478d2e137a8669d246354d24e4cfabb4cc699768a258074d9cb64f",
"0xb4059178f41513edfa8a6c3f34d64692f13214065fc6baba197cc33e6035e06f",
"0x7281be3c20dd2d775ddd4870b8405f3ac39c57e8c2633d7043856ab42aa5f89d",
"0xdd34573aab453903cb3360f4b3a6fc255b98467e784ade825ffe92ba8ce1f9dc",
"0x2e03e2a05c09b411717707bcab515bee460f96c531b5f471686139efdff0de4a",
"0x4c6630ba5458b33b389ff0efcbd951082496b196a576f74e4deae9141d45bae4",
"0x22e8862e76b9dc82ea855f6c4d583e3fd160d0513171f864b510e855248852aa"
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
            version: '^0.5.11'
        }
    }
};
