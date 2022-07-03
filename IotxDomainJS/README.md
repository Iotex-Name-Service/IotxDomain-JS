# IotxDomainJS SDK

JavaScript SDK for integrating iotxdomainjs

https://www.npmjs.com/package/iotxdomainjs

Before installing the package you need to check and be sure to install the packages below:

```
npm install web3 
npm install @iotexproject/iotex-address-ts
```
Install Package
```
npm install iotxdomainjs
```

Get started 
```
const iotxdomainjs = require('iotxdomainjs');
```

Set config
```
const config = 
{
	testnet:{
		rpcUrl: "",
		contactAddress: ""
	},
	mainnet:{ 
		rpcUrl: "https://babel-api.mainnet.iotex.io/",
		contactAddress: "0x4608eF714C8047771054757409c1A451CEf8d69f"
	},
	defaultNetwork: "mainnet"
}
```
Install
```
const sdk = iotxdomainjs.SDK(config);
```
```
// your domains
const _domain = "iotexdomains.iotx";
	
// resolve .iotx domain to get the address of the owner.
const owner = await sdk.getOwner(_domain);

console.log(owner);
```
Pls update test.js for specific instructions

Thanks!



