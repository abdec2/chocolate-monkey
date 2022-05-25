import { useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { GlobalContext } from "../context/GlobalContext";
import Web3Modal from 'web3modal';
import CONFIG from './../abi/config.json'
import ABI from './../abi/abi.json';
import Hero from "./Hero";

const contractAddress = CONFIG.CONTRACT_ADDRESS;

const Mint = ({ error, errorMsg, setError, setErrorMsg }) => {
    const {
        account,
        blockchainData,
        network,
        web3,
        delAccount,
        addAccount,
        addNetwork,
        addBlockchain,
        addWeb3 } = useContext(GlobalContext);

    const [mintCount, setMintCount] = useState(1)
    const [loading, setLoading] = useState(false)

    const loadBlockChain = async () => {
        if (web3 && account) {
            try {
                const contract = new ethers.Contract(contractAddress, ABI, web3);
                const cost = await contract.getNFTPrice();
                addBlockchain({
                    'contract': contract,
                    'nftPrice': cost
                })
                console.log('contract', contract)
            } catch (e) {
                setError(true)
                setErrorMsg('Contract not deployed to current network, please change network')
            }
        }
    }

    const connectWallet = async () => {
        if (!window.ethereum) {
            alert('Please install MetaMask');
            return
        }
        const web3modal = new Web3Modal();
        const instance = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        addAccount({ id: address });
        const networkId = await provider.getNetwork();
        console.log(networkId)
        addNetwork(networkId)
        addWeb3(provider)
        if (networkId.chainId == CONFIG.CHAIN_ID) {
            setError(false)
            setErrorMsg('')
        } else {
            setError(true)
            setErrorMsg('Contract not deployed to current network, please change network')
        }

    }

    const disconnectWallet = () => {
        delAccount();
    }

    const increment = () => {
        if (mintCount < 50) {
            setMintCount(mintCount + 1)
        }
    }

    const decrement = () => {
        if (mintCount > 1) {
            setMintCount(mintCount - 1)
            console.log(blockchainData)
        }
    }

    const claimNFT = async () => {
        try {
            setLoading(true)
            let cost = blockchainData.nftPrice;
            let gasLimit = 285000;
            let totalCost = cost.mul(mintCount);
            let totalGasLimit = String(gasLimit * mintCount);

            console.log("Cost: ", totalCost);
            console.log("Gas limit: ", totalGasLimit);


            const signer = web3.getSigner()

            const contractWithSigner = blockchainData.contract.connect(signer)

            const tx = await contractWithSigner.mint(mintCount, { value: totalCost, gasLimit: totalGasLimit })
            const receipt = await tx.wait()
            console.log(receipt)
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadBlockChain();
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', accounts => {
                addAccount({ id: accounts[0] })
            })
            window.ethereum.on('chainChanged', chainId => {
                window.location.reload();
            })
        }
        console.log(error)
        console.log(web3)
        console.log(blockchainData)
    }, [account, web3]);


    return (
        <>
            <Hero />
            <section className="minting-area " id="mint">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            <div className="intro text-center">
                                <h3 className="mt-3 mb-0">MINT YOUR NFTs</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            <div className="intro text-center">
                                <a href={CONFIG.ETHERSCAN_URI + CONFIG.CONTRACT_ADDRESS} target="blank" className="mt-3 mb-0">{CONFIG.CONTRACT_ADDRESS.slice(0, 7) + '.......' + CONFIG.CONTRACT_ADDRESS.slice(35, 42)}</a>
                            </div>
                        </div>
                    </div>

                    {account ? (
                        <>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-12 col-md-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <button className="btn ml-lg-auto btn-bordered-white" onClick={() => decrement()}> - </button>
                                        </div>
                                        <div> {mintCount} </div>
                                        <div>
                                            <button className="btn ml-lg-auto btn-bordered-white" onClick={() => increment()}> + </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-center mt-5">
                                <div className="col-12 col-md-3">

                                    <div className="d-flex align-items-center justify-content-center">
                                        <div>
                                            <button disabled={loading} className="btn ml-lg-auto btn-bordered-white" onClick={() => claimNFT()}> {loading ? "BUSY" : "BUY"} </button>
                                        </div>
                                        <div className="ml-3">
                                            <a href={CONFIG.OPENSEA_URI + (account ? account : '')} target="blank" className="btn ml-lg-auto btn-bordered-white">Opensea</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="btn  btn-bordered-white" onClick={connectWallet}>Connect Wallet</button>
                            
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Mint