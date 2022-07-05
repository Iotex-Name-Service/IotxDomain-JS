const iotxdomainjs = require('iotxdomainjs');

// set config
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

call();

async function call(){
	
	// install
	const sdk = iotxdomainjs.SDK(config);

	// your domains
	const _domain = "iotexdomains.iotx";
	
	// resolve .iotx domain to get the address of the owner. metadata: true // false default return metadata along with domain information
	const owner = await sdk.getOwner(_domain, true);

	console.log(owner);

	// your domains
	const _address = "0xbb48801EAF9947db8b49a96DEA231C5893125B9c";
	
	// get total domains
	const balance = await sdk.balanceOf(_address);

	console.log(balance);

	// get a domain default from a user's address, requiring the user to set the default domain name initially.
	const domain = await sdk.getDomain(_address);

	console.log(domain);
	
	// gets all the domains owned by an wallet address.
	const domains = await sdk.getDomains(_address);

	console.log(domains);
	
	//Get a value of metadata from the domain name
	
	const _avatar = await sdk.getMetadata("avatar", _domain);

	console.log(_avatar);
	
	//Get values of metadata from the domain name
	
	const _values = await sdk.getMetadatas(["avatar", "website", "twitter"], _domain);

	console.log(_values);
	
	// Namehash is a recursive process that can generate a unique hash for any valid domain name.
	const hashname = await sdk.hashname(_domain);

	console.log(hashname);
}

