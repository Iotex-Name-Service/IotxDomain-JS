# IotxDomainJS SDK

JavaScript SDK for integrating IotxDomainJS

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
	
// resolve .iotx domain to get the address of the owner. metadata: true // false default return metadata along with domain information
const owner = await sdk.getOwner(_domain);

console.log(owner);
```



