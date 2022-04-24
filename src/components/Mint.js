import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CONFIG from './../abi/config.json'

const Mint = () => {
    const {
        account,
        blockchainData,
        web3 } = useContext(GlobalContext);

    const [mintCount, setMintCount] = useState(1)
    const [loading, setLoading] = useState(false)

    const increment = () => {
        if (mintCount < 10) {
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

            const tx = await contractWithSigner.mint(account, mintCount, { value: totalCost, gasLimit: totalGasLimit })
            const receipt = await tx.wait()
            console.log(receipt)
            setLoading(false)
        } catch (e) {
            setLoading(false)
        }
    }


    return (
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
                                <a href={CONFIG.OPENSEA_URI+(account ? account : '')} target="blank" className="btn ml-lg-auto btn-bordered-white text-white">Opensea</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mint