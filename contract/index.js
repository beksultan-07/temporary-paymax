const TronWeb = require('tronweb');

const tronWeb = new TronWeb({
        fullNode: 'http://127.0.0.1:8090',
        solidityNode: 'http://127.0.0.1:8091',
        privateKey: 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0'
    }
);

//tronWeb.trx.getAccount(tronWeb.address.fromHex("41928c9af0651632157ef27a2cf17ca72c575a4d21")).then(result => console.log(result));

//Example 1
/*async function getContract() {
    let res = await tronWeb.contract().at("41b3a4a865a4a64481e8a6d18e9ce8bcfa25d64899");
    console.log(tronWeb.address.fromHex(res.address));
    tronWeb.trx.getContract(tronWeb.address.fromHex(res.address)).then(console.log);
}

getContract();// Execute the function*/

async function triggercontract() {
    try {
        let instance = await tronWeb.contract().at('TVqZQJSJappKAXSqixcETUpSeBJGrcpDAf');
        let res = await instance.transfer('TRHnDwy6qmnZE3PvPdpuZMN7PqRBk28vGe', 500).send({
            feeLimit:1_00_000_000,
            userFeePercentage:1,
            originEnergyLimit:10_000_000,
            callValue: 0,
            shouldPollResponse: true
        });

        /*let res = await tronWeb.trx.sendTransaction("TRHnDwy6qmnZE3PvPdpuZMN7PqRBk28vGe", tronWeb.toSun(200));*/
        console.log(res);

    } catch (error) {
        console.log(error);
    }
}

triggercontract();


let abi = `[
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "delegate",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegate",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "numTokens",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenOwner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply_",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "numTokens",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "numTokens",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]`;
let bytecode = '608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d2801561002a57600080fd5b5060408051808201909152600b8082526a2a32ba3432b92a37b5b2b760a91b602090920191825261005d916000916100b7565b50604080518082019091526004808252631554d11560e21b6020909201918252610089916001916100b7565b506002805460ff1916600a17905564e8d4a5100060038190553360009081526004602052604090205561018b565b8280546100c390610150565b90600052602060002090601f0160209004810192826100e5576000855561012b565b82601f106100fe57805160ff191683800117855561012b565b8280016001018555821561012b579182015b8281111561012b578251825591602001919060010190610110565b5061013792915061013b565b5090565b5b80821115610137576000815560010161013c565b600181811c9082168061016457607f821691505b6020821081141561018557634e487b7160e01b600052602260045260246000fd5b50919050565b6107148061019a6000396000f3fe608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d2801561002a57600080fd5b50600436106100b85760003560e01c8063324536eb11610080578063324536eb1461014257806370a082311461014b57806395d89b4114610174578063a9059cbb1461017c578063dd62ed3e1461018f57600080fd5b806306fdde03146100bd578063095ea7b3146100db57806318160ddd146100fe57806323b872dd14610110578063313ce56714610123575b600080fd5b6100c56101c8565b6040516100d291906105f3565b60405180910390f35b6100ee6100e93660046105c9565b610256565b60405190151581526020016100d2565b6003545b6040519081526020016100d2565b6100ee61011e36600461058d565b6102c2565b6002546101309060ff1681565b60405160ff90911681526020016100d2565b61010260035481565b61010261015936600461053f565b6001600160a01b031660009081526004602052604090205490565b6100c5610415565b6100ee61018a3660046105c9565b610422565b61010261019d36600461055a565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205490565b600080546101d590610677565b80601f016020809104026020016040519081016040528092919081815260200182805461020190610677565b801561024e5780601f106102235761010080835404028352916020019161024e565b820191906000526020600020905b81548152906001019060200180831161023157829003601f168201915b505050505081565b3360008181526005602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102b19086815260200190565b60405180910390a350600192915050565b6001600160a01b0383166000908152600460205260408120548211156102e757600080fd5b6001600160a01b038416600090815260056020908152604080832033845290915290205482111561031757600080fd5b6001600160a01b03841660009081526004602052604090205461033a90836104d5565b6001600160a01b038516600090815260046020908152604080832093909355600581528282203383529052205461037190836104d5565b6001600160a01b0380861660009081526005602090815260408083203384528252808320949094559186168152600490915220546103af90836104f8565b6001600160a01b0380851660008181526004602052604090819020939093559151908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104039086815260200190565b60405180910390a35060019392505050565b600180546101d590610677565b3360009081526004602052604081205482111561043e57600080fd5b3360009081526004602052604090205461045890836104d5565b33600090815260046020526040808220929092556001600160a01b0385168152205461048490836104f8565b6001600160a01b0384166000818152600460205260409081902092909255905133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906102b19086815260200190565b6000828211156104e7576104e76106b2565b6104f18284610660565b9392505050565b6000806105058385610648565b9050838110156104f1576104f16106b2565b600081356001600160a81b038116811461053057600080fd5b6001600160a01b031692915050565b60006020828403121561055157600080fd5b6104f182610517565b6000806040838503121561056d57600080fd5b61057683610517565b915061058460208401610517565b90509250929050565b6000806000606084860312156105a257600080fd5b6105ab84610517565b92506105b960208501610517565b9150604084013590509250925092565b600080604083850312156105dc57600080fd5b6105e583610517565b946020939093013593505050565b600060208083528351808285015260005b8181101561062057858101830151858201604001528201610604565b81811115610632576000604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561065b5761065b6106c8565b500190565b600082821015610672576106726106c8565b500390565b600181811c9082168061068b57607f821691505b602082108114156106ac57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601160045260246000fdfea26474726f6e582212206c756cffd3c89ea4003f31b5bc14115e57fbe622d2a3f021caff2b4d8113459d64736f6c63430008060033';

/*async function deploy_contract(){
    let contract_instance = await tronWeb.contract().new({
        abi:abi,
        bytecode:bytecode,
        feeLimit:1_00_000_000,
        callValue:0,
        userFeePercentage:1,
        originEnergyLimit:10_000_000
    });
    console.log(contract_instance);
}
deploy_contract().catch((err) => console.log(err));*/