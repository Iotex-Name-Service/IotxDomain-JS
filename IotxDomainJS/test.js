const iotxdomainjs = require('iotxdomainjs');

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

call();

async function call(){
	
	// setup
	const sdk = iotxdomainjs.SDK(config);

	// your domains
	const _domain = "iotexdomains.iotx";
	
	// get owner of domain
	const owner = await sdk.getOwner(_domain, true);

	console.log(owner);

	// get owner of domain
	const _address = "xxx";
	
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
	const _avatar = await sdk.getMetadata("avatar", _domain);

	console.log(_avatar);
	
	const _values = await sdk.getMetadatas(["avatar", "website", "twitter"], _domain);

	console.log(_values);
	
		
	const hashname = await sdk.hashname(_domain);

	console.log(hashname);
}

