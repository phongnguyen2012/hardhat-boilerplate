/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MonoNFT, MonoNFTInterface } from "../../contracts/MonoNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftMarketPlaceAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "giveAway",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620034af380380620034af833981810160405281019062000037919062000239565b6040518060400160405280600781526020017f4d6f6e6f4e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4f4e4f000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb9291906200011f565b508060019080519060200190620000d49291906200011f565b50505080600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620002d0565b8280546200012d906200029a565b90600052602060002090601f0160209004810192826200015157600085556200019d565b82601f106200016c57805160ff19168380011785556200019d565b828001600101855582156200019d579182015b828111156200019c5782518255916020019190600101906200017f565b5b509050620001ac9190620001b0565b5090565b5b80821115620001cb576000816000905550600101620001b1565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200020182620001d4565b9050919050565b6200021381620001f4565b81146200021f57600080fd5b50565b600081519050620002338162000208565b92915050565b600060208284031215620002525762000251620001cf565b5b6000620002628482850162000222565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002b357607f821691505b60208210811415620002ca57620002c96200026b565b5b50919050565b6131cf80620002e06000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80634f6ccce7116100a25780639e240785116100715780639e240785146102de578063a22cb4651461030e578063b88d4fde1461032a578063c87b56dd14610346578063e985e9c5146103765761010b565b80634f6ccce7146102305780636352211e1461026057806370a082311461029057806395d89b41146102c05761010b565b806318160ddd116100de57806318160ddd146101aa57806323b872dd146101c85780632f745c59146101e457806342842e0e146102145761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a600480360381019061012591906120cc565b6103a6565b6040516101379190612114565b60405180910390f35b6101486103b8565b60405161015591906121c8565b60405180910390f35b61017860048036038101906101739190612220565b61044a565b604051610185919061228e565b60405180910390f35b6101a860048036038101906101a391906122d5565b610490565b005b6101b26105a8565b6040516101bf9190612324565b60405180910390f35b6101e260048036038101906101dd919061233f565b6105b5565b005b6101fe60048036038101906101f991906122d5565b610615565b60405161020b9190612324565b60405180910390f35b61022e6004803603810190610229919061233f565b6106ba565b005b61024a60048036038101906102459190612220565b6106da565b6040516102579190612324565b60405180910390f35b61027a60048036038101906102759190612220565b61074b565b604051610287919061228e565b60405180910390f35b6102aa60048036038101906102a59190612392565b6107fd565b6040516102b79190612324565b60405180910390f35b6102c86108b5565b6040516102d591906121c8565b60405180910390f35b6102f860048036038101906102f39190612392565b610947565b6040516103059190612324565b60405180910390f35b610328600480360381019061032391906123eb565b610a08565b005b610344600480360381019061033f9190612560565b610a1e565b005b610360600480360381019061035b9190612220565b610a80565b60405161036d91906121c8565b60405180910390f35b610390600480360381019061038b91906125e3565b610a92565b60405161039d9190612114565b60405180910390f35b60006103b182610b26565b9050919050565b6060600080546103c790612652565b80601f01602080910402602001604051908101604052809291908181526020018280546103f390612652565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b600061045582610ba0565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061049b8261074b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561050c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610503906126f6565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661052b610beb565b73ffffffffffffffffffffffffffffffffffffffff16148061055a575061055981610554610beb565b610a92565b5b610599576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059090612788565b60405180910390fd5b6105a38383610bf3565b505050565b6000600980549050905090565b6105c66105c0610beb565b82610cac565b610605576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fc9061281a565b60405180910390fd5b610610838383610d41565b505050565b6000610620836107fd565b8210610661576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610658906128ac565b60405180910390fd5b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b6106d583838360405180602001604052806000815250610a1e565b505050565b60006106e46105a8565b8210610725576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071c9061293e565b60405180910390fd5b600982815481106107395761073861295e565b5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107eb906129d9565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561086e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086590612a6b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546108c490612652565b80601f01602080910402602001604051908101604052809291908181526020018280546108f090612652565b801561093d5780601f106109125761010080835404028352916020019161093d565b820191906000526020600020905b81548152906001019060200180831161092057829003601f168201915b5050505050905090565b600080610954600b610fa8565b905060006040518060600160405280603f815260200161315b603f9139905061097d8483610fb6565b6109878282610fd4565b6109b4600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001610a08565b6109be600b611048565b6109fe6040518060400160405280601581526020017f4d696e74656420746f6b656e20257320746f2025730000000000000000000000815250838661105e565b8192505050919050565b610a1a610a13610beb565b83836110fd565b5050565b610a2f610a29610beb565b83610cac565b610a6e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a659061281a565b60405180910390fd5b610a7a8484848461126a565b50505050565b6060610a8b826112c6565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610b995750610b98826113d9565b5b9050919050565b610ba9816114bb565b610be8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdf906129d9565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c668361074b565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610cb88361074b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610cfa5750610cf98185610a92565b5b80610d3857508373ffffffffffffffffffffffffffffffffffffffff16610d208461044a565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d618261074b565b73ffffffffffffffffffffffffffffffffffffffff1614610db7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dae90612afd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1e90612b8f565b60405180910390fd5b610e32838383611527565b610e3d600082610bf3565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e8d9190612bde565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ee49190612c12565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610fa3838383611537565b505050565b600081600001549050919050565b610fd082826040518060200160405280600081525061153c565b5050565b610fdd826114bb565b61101c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101390612cda565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611043929190611fbd565b505050565b6001816000016000828254019250508190555050565b6110f883838360405160240161107693929190612cfa565b6040516020818303038152906040527f1c7ec448000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611597565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561116c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161116390612d84565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161125d9190612114565b60405180910390a3505050565b611275848484610d41565b611281848484846115c0565b6112c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b790612e16565b60405180910390fd5b50505050565b60606112d182610ba0565b60006006600084815260200190815260200160002080546112f190612652565b80601f016020809104026020016040519081016040528092919081815260200182805461131d90612652565b801561136a5780601f1061133f5761010080835404028352916020019161136a565b820191906000526020600020905b81548152906001019060200180831161134d57829003601f168201915b50505050509050600061137b611757565b90506000815114156113915781925050506113d4565b6000825111156113c65780826040516020016113ae929190612e72565b604051602081830303815290604052925050506113d4565b6113cf8461176e565b925050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806114a457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806114b457506114b3826117d6565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611532838383611840565b505050565b505050565b6115468383611954565b61155360008484846115c0565b611592576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158990612e16565b60405180910390fd5b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006115e18473ffffffffffffffffffffffffffffffffffffffff16611b2e565b1561174a578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261160a610beb565b8786866040518563ffffffff1660e01b815260040161162c9493929190612eeb565b602060405180830381600087803b15801561164657600080fd5b505af192505050801561167757506040513d601f19601f820116820180604052508101906116749190612f4c565b60015b6116fa573d80600081146116a7576040519150601f19603f3d011682016040523d82523d6000602084013e6116ac565b606091505b506000815114156116f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e990612e16565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061174f565b600190505b949350505050565b606060405180602001604052806000815250905090565b606061177982610ba0565b6000611783611757565b905060008151116117a357604051806020016040528060008152506117ce565b806117ad84611b51565b6040516020016117be929190612e72565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b61184b838383611cb2565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561188e5761188981611cb7565b6118cd565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146118cc576118cb8382611d00565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119105761190b81611e6d565b61194f565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461194e5761194d8282611f3e565b5b5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119bb90612fc5565b60405180910390fd5b6119cd816114bb565b15611a0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0490613031565b60405180910390fd5b611a1960008383611527565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a699190612c12565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611b2a60008383611537565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60606000821415611b99576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611cad565b600082905060005b60008214611bcb578080611bb490613051565b915050600a82611bc491906130c9565b9150611ba1565b60008167ffffffffffffffff811115611be757611be6612435565b5b6040519080825280601f01601f191660200182016040528015611c195781602001600182028036833780820191505090505b5090505b60008514611ca657600182611c329190612bde565b9150600a85611c4191906130fa565b6030611c4d9190612c12565b60f81b818381518110611c6357611c6261295e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611c9f91906130c9565b9450611c1d565b8093505050505b919050565b505050565b600980549050600a600083815260200190815260200160002081905550600981908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611d0d846107fd565b611d179190612bde565b9050600060086000848152602001908152602001600020549050818114611dfc576000600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816008600083815260200190815260200160002081905550505b6008600084815260200190815260200160002060009055600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600980549050611e819190612bde565b90506000600a6000848152602001908152602001600020549050600060098381548110611eb157611eb061295e565b5b906000526020600020015490508060098381548110611ed357611ed261295e565b5b906000526020600020018190555081600a600083815260200190815260200160002081905550600a6000858152602001908152602001600020600090556009805480611f2257611f2161312b565b5b6001900381819060005260206000200160009055905550505050565b6000611f49836107fd565b905081600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806008600084815260200190815260200160002081905550505050565b828054611fc990612652565b90600052602060002090601f016020900481019282611feb5760008555612032565b82601f1061200457805160ff1916838001178555612032565b82800160010185558215612032579182015b82811115612031578251825591602001919060010190612016565b5b50905061203f9190612043565b5090565b5b8082111561205c576000816000905550600101612044565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6120a981612074565b81146120b457600080fd5b50565b6000813590506120c6816120a0565b92915050565b6000602082840312156120e2576120e161206a565b5b60006120f0848285016120b7565b91505092915050565b60008115159050919050565b61210e816120f9565b82525050565b60006020820190506121296000830184612105565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561216957808201518184015260208101905061214e565b83811115612178576000848401525b50505050565b6000601f19601f8301169050919050565b600061219a8261212f565b6121a4818561213a565b93506121b481856020860161214b565b6121bd8161217e565b840191505092915050565b600060208201905081810360008301526121e2818461218f565b905092915050565b6000819050919050565b6121fd816121ea565b811461220857600080fd5b50565b60008135905061221a816121f4565b92915050565b6000602082840312156122365761223561206a565b5b60006122448482850161220b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006122788261224d565b9050919050565b6122888161226d565b82525050565b60006020820190506122a3600083018461227f565b92915050565b6122b28161226d565b81146122bd57600080fd5b50565b6000813590506122cf816122a9565b92915050565b600080604083850312156122ec576122eb61206a565b5b60006122fa858286016122c0565b925050602061230b8582860161220b565b9150509250929050565b61231e816121ea565b82525050565b60006020820190506123396000830184612315565b92915050565b6000806000606084860312156123585761235761206a565b5b6000612366868287016122c0565b9350506020612377868287016122c0565b92505060406123888682870161220b565b9150509250925092565b6000602082840312156123a8576123a761206a565b5b60006123b6848285016122c0565b91505092915050565b6123c8816120f9565b81146123d357600080fd5b50565b6000813590506123e5816123bf565b92915050565b600080604083850312156124025761240161206a565b5b6000612410858286016122c0565b9250506020612421858286016123d6565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61246d8261217e565b810181811067ffffffffffffffff8211171561248c5761248b612435565b5b80604052505050565b600061249f612060565b90506124ab8282612464565b919050565b600067ffffffffffffffff8211156124cb576124ca612435565b5b6124d48261217e565b9050602081019050919050565b82818337600083830152505050565b60006125036124fe846124b0565b612495565b90508281526020810184848401111561251f5761251e612430565b5b61252a8482856124e1565b509392505050565b600082601f8301126125475761254661242b565b5b81356125578482602086016124f0565b91505092915050565b6000806000806080858703121561257a5761257961206a565b5b6000612588878288016122c0565b9450506020612599878288016122c0565b93505060406125aa8782880161220b565b925050606085013567ffffffffffffffff8111156125cb576125ca61206f565b5b6125d787828801612532565b91505092959194509250565b600080604083850312156125fa576125f961206a565b5b6000612608858286016122c0565b9250506020612619858286016122c0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061266a57607f821691505b6020821081141561267e5761267d612623565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006126e060218361213a565b91506126eb82612684565b604082019050919050565b6000602082019050818103600083015261270f816126d3565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612772603e8361213a565b915061277d82612716565b604082019050919050565b600060208201905081810360008301526127a181612765565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612804602e8361213a565b915061280f826127a8565b604082019050919050565b60006020820190508181036000830152612833816127f7565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b6000612896602b8361213a565b91506128a18261283a565b604082019050919050565b600060208201905081810360008301526128c581612889565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b6000612928602c8361213a565b9150612933826128cc565b604082019050919050565b600060208201905081810360008301526129578161291b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006129c360188361213a565b91506129ce8261298d565b602082019050919050565b600060208201905081810360008301526129f2816129b6565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612a5560298361213a565b9150612a60826129f9565b604082019050919050565b60006020820190508181036000830152612a8481612a48565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612ae760258361213a565b9150612af282612a8b565b604082019050919050565b60006020820190508181036000830152612b1681612ada565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612b7960248361213a565b9150612b8482612b1d565b604082019050919050565b60006020820190508181036000830152612ba881612b6c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612be9826121ea565b9150612bf4836121ea565b925082821015612c0757612c06612baf565b5b828203905092915050565b6000612c1d826121ea565b9150612c28836121ea565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612c5d57612c5c612baf565b5b828201905092915050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612cc4602e8361213a565b9150612ccf82612c68565b604082019050919050565b60006020820190508181036000830152612cf381612cb7565b9050919050565b60006060820190508181036000830152612d14818661218f565b9050612d236020830185612315565b612d30604083018461227f565b949350505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612d6e60198361213a565b9150612d7982612d38565b602082019050919050565b60006020820190508181036000830152612d9d81612d61565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612e0060328361213a565b9150612e0b82612da4565b604082019050919050565b60006020820190508181036000830152612e2f81612df3565b9050919050565b600081905092915050565b6000612e4c8261212f565b612e568185612e36565b9350612e6681856020860161214b565b80840191505092915050565b6000612e7e8285612e41565b9150612e8a8284612e41565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000612ebd82612e96565b612ec78185612ea1565b9350612ed781856020860161214b565b612ee08161217e565b840191505092915050565b6000608082019050612f00600083018761227f565b612f0d602083018661227f565b612f1a6040830185612315565b8181036060830152612f2c8184612eb2565b905095945050505050565b600081519050612f46816120a0565b92915050565b600060208284031215612f6257612f6161206a565b5b6000612f7084828501612f37565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612faf60208361213a565b9150612fba82612f79565b602082019050919050565b60006020820190508181036000830152612fde81612fa2565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061301b601c8361213a565b915061302682612fe5565b602082019050919050565b6000602082019050818103600083015261304a8161300e565b9050919050565b600061305c826121ea565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561308f5761308e612baf565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006130d4826121ea565b91506130df836121ea565b9250826130ef576130ee61309a565b5b828204905092915050565b6000613105826121ea565b9150613110836121ea565b9250826131205761311f61309a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfe68747470733a2f2f617277656176652e6e65742f39786371756859674d39334c684251784d45625755744c32305a7a346558594d5037714c47752d59374b38a2646970667358221220f7fc065fbcb0c6cfee81ef4faf5096ca61ace6c4c6404b45542390ba3d6c4fb264736f6c63430008090033";

type MonoNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MonoNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MonoNFT__factory extends ContractFactory {
  constructor(...args: MonoNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _nftMarketPlaceAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MonoNFT> {
    return super.deploy(
      _nftMarketPlaceAddress,
      overrides || {}
    ) as Promise<MonoNFT>;
  }
  override getDeployTransaction(
    _nftMarketPlaceAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_nftMarketPlaceAddress, overrides || {});
  }
  override attach(address: string): MonoNFT {
    return super.attach(address) as MonoNFT;
  }
  override connect(signer: Signer): MonoNFT__factory {
    return super.connect(signer) as MonoNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MonoNFTInterface {
    return new utils.Interface(_abi) as MonoNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MonoNFT {
    return new Contract(address, _abi, signerOrProvider) as MonoNFT;
  }
}
