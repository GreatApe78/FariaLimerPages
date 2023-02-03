
//Contracts Data
const web3 = new Web3(ethereum);

const fariaLimerAbi = [
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
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
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
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
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
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
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
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
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
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
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
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "readId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
            }
        ],
        "name": "awardFariaLimer",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const fariaLimerAddress = "0xaaD51c90bac71d4f75B1311142c1A2dcBDafe995"
const auctionAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_bidder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "Bid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_stopTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_currentWinner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "highestBid",
                "type": "uint256"
            }
        ],
        "name": "NewAuction",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "BiddersOfAuctionAtTokenId",
        "outputs": [
            {
                "internalType": "address",
                "name": "bidderAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "valueBidded",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "currentWinner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "endTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "fariaLimer",
        "outputs": [
            {
                "internalType": "contract FariaLimer",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "highestBidder",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "imageAddress",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "minimumBid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "winners",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "currentMoment",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "timeLeft",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "isThereTime",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "amountOfWinners",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "bid",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [],
        "name": "newAuction",
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
                "internalType": "uint256",
                "name": "_auctionOftokenId",
                "type": "uint256"
            }
        ],
        "name": "getBiddersInfoAtId",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "bidderAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "valueBidded",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Auction.BiddersInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]
const auctionAddress = "0x2e27CAAEa178D118D9E876112bbf6554DcEC1904"
//\Contracts Data

//elementos html
const caixaListaBidders = document.getElementById("caixaListaBidders")

const token_id = document.getElementById("token_id")
const token_image = document.getElementById('token_image');
const pinata_uri = `https://gateway.pinata.cloud/ipfs/QmXQqzRiLjutSQME3USvgHJsNEJ972hHou8AcqQsUbeGjz/`;
const bid_button = document.getElementById('bid_button');
const bid_input = document.getElementById('bid_input');
const new_auction_button = document.getElementById('new_auction_button');
const countdown_clock = document.getElementById('countdown_clock');
const connectWalletBtn = document.getElementById("connectWalletBtn")
const linkOPenSea = document.getElementById("linkOPenSea")
//\elementos html

//Async functions
const timeLeft = async () => {
    if (ethereum) {
        try {
            let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
            let sendCall = await auctionContract.methods.timeLeft().call();
            return sendCall;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("There is something wrong here!");
    }

}
const getBiddersInfoAtId = async (_tokenId) => {
    if (ethereum) {
        try {
            let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress)
            let biddersInfo = await auctionContract.methods.getBiddersInfoAtId(_tokenId).call()
            return biddersInfo

        } catch (error) {
            console.log(error);
        }
    } else {
        alert("please Install Metamask!")
    }
}
const readId = async () => {
    if (ethereum) {
        try {
            let faria_limerContract = new web3.eth.Contract(fariaLimerAbi, fariaLimerAddress);
            let sendCall = await faria_limerContract.methods.readId().call();
            return sendCall;
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Connect to goerli")
    }

}

const highestBidder = async () => {
    if (ethereum) {
        try {
            let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
            let sendCall = await auctionContract.methods.highestBidder().call();
            return sendCall;
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Something came up!");
    }

}
const highestBid = async () => {
    if (ethereum) {
        try {
            let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
            let sendCall = await auctionContract.methods.minimumBid().call();
            return sendCall;
        } catch (error) {
            console.log(error);
        }
    }
    else {
        alert("Something came up again");
    }
}
const bid = async (_amount) => {
    if (ethereum) {
        try {
            let accounts = await web3.eth.getAccounts();
            let account = accounts[0];
            let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
            let sendCall = await auctionContract.methods.bid().send({ from: account, value: _amount });
            return sendCall;
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Something is wrong!");
    }

}
const newAuction = async (_amount) => {
    if (ethereum) {
        try {
            let accounts = await web3.eth.getAccounts();
            let account = accounts[0];
            let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
            let sendCall = await auctionContract.methods.newAuction().send({ from: account, value: _amount });
            return sendCall;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Something is not working properly");
    }
}
const isThereTime = async () => {
    if (ethereum) {
        try {
            let auctionContract = new web3.eth.Contract(auctionAbi, auctionAddress);
            let sendCall = await auctionContract.methods.isThereTime().call();
            return sendCall;
        } catch (error) {
            console.log(error);
        }
    }
    else {
        alert("Some mistake happened here");
    }
}
const connectWallet = async () => {
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            return accounts[0]
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!")
    }
}
//\Async functions



//Getting Data From Contracts
readId().then((faria_limerId) => {
    token_image.setAttribute('src', pinata_uri + `${Number(faria_limerId) + 1}.svg`);
    token_id.innerHTML = Number(faria_limerId) + 1
    getBiddersInfoAtId(Number(faria_limerId) + 1).then((biddersInfo) => {

        for (let i = 0; i < biddersInfo.length; i++) {
            let newBidBox = document.createElement("li");
            let newBidderAddress = document.createElement("h2")
            let newBidValue = document.createElement("h2")
            newBidBox.className = "bidderInfo"
            newBidderAddress.innerHTML = biddersInfo[i].bidderAddress
            newBidValue.innerHTML = biddersInfo[i].valueBidded / 10 ** 18 + " ETH"
            newBidBox.appendChild(newBidderAddress)
            newBidBox.appendChild(newBidValue)
            caixaListaBidders.appendChild(newBidBox)
        }

    }).catch((error) => {
        console.log(error);
    })
}).catch((err) => {
    alert("There was an error!", err);
});

isThereTime().then((is_there_time) => {
    console.log(is_there_time)
    if (is_there_time) {
        new_auction_button.style.display = 'none';
        bid_button.style.display = 'inline';
        bid_input.style.display = 'inline';
    } else {
        new_auction_button.style.display = 'block';
        bid_button.style.display = 'none';
        bid_input.style.display = 'none';
    }
}).catch((error) => {
    console.log(error)
});
timeLeft().then((time_left) => {
    let seconds = time_left;
    const countdown = () => {
        if (seconds > 0) {
            countdown_clock.innerHTML = `${seconds} seconds left`;
            seconds--;
        } else {
            countdown_clock.innerHTML = 'Time is over';
        }
    }
    let interval = setInterval(countdown, 1000);
}).catch((error) => {
    console.log(error)
});
highestBid().then((highest_bid) => {
    let bigNumber = Number(highest_bid) / (10 ** 18);
    document.getElementById('highest_bid').innerHTML = bigNumber;
}).catch((error) => {
    console.log(error)
});
highestBidder().then((highest_bidder) => {
    document.getElementById('highest_bidder').innerHTML = highest_bidder;
}).catch((error) => {
    console.log(error)
});
//\Getting Data From Contracts

//CLICK OF BUtTONS

connectWalletBtn.addEventListener("click", () => {
    connectWallet().then((conta) => {
        alert(`you are conneted as: \n ${conta}`)
    }).catch((error) => {
        console.log(error)
    })



})

new_auction_button.addEventListener("click", () => {
    newAuction().then((novoLeilaoCriado) => {

        if (novoLeilaoCriado) {
            alert("novo leilao iniciado")
        }
    }).catch((error) => {
        console.log(error)
    })
})
bid_button.addEventListener("click", () => {

    let _amount = bid_input.value

    _amount = _amount * 10 ** 18

    _amount = _amount.toString()

    bid(_amount).then((apostado) => {
        if (apostado) {
            alert("Bid success!")
        }
    }).catch((error) => {
        console.log(error)
    })

})


//\CLICK OF BUTTONS
//front end oiperations below
console.log("fariaLimerAddress: " + fariaLimerAddress)
console.log("auctionAddress: " + auctionAddress)
linkOPenSea.href = linkOPenSea.href + fariaLimerAddress
