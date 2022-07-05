# IotxDomainJS SDK

JavaScript SDK for integrating iotxdomainjs

Npm: https://www.npmjs.com/package/iotxdomainjs

Github: https://github.com/Iotex-Name-Service/IotxDomain-JS/

Install Package

```
npm i iotxdomainjs
```

Call 
```
const iotxdomainjs = require('iotxdomainjs');
```

Set config
```
const config = 
{
	testnet:{
		rpcUrl: "",
		contractAddress: ""
	},
	mainnet:{ 
		rpcUrl: "https://babel-api.mainnet.iotex.io/",
		contractAddress: "0x4608eF714C8047771054757409c1A451CEf8d69f"
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

const _address = "xxx";
	
// resolve .iotx domain to get the address of the owner.
const owner = await sdk.getOwner(_domain);

console.log(owner);

// get a domain default from a user's address, requiring the user to set the default domain name initially.
const domain = await sdk.getDomain(_address);
```
Pls update test.js for specific instructions

Thanks!



