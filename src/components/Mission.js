import { motion } from "framer-motion";

import "./mission.css";
const Mission = () => {
    return (
        <section className="mission-area ">

            <div className="container">
                <div className="bg__nftspecs"></div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-8">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            viewport={{ once: true }}
                            transition={{ ease:'easeIn', duration: 1}}
                        >
                            <div className="intro text-center">
                                <h3 className="mt-3 mb-0">NFT Specs</h3>
                                <p>Every Chocolate Monkey is unique and specially generated from over 80 possible traits, including expressions, clothing, and more. All our Chocolate Monkeys come in 6 unique flavors: Dark Chocolate, Milk Chocolate, White Chocolate, Ruby Chocolate, Carmel and Cookies and Cream. Chocolate Monkeys are super unique and special in their own way, but some are special and super rare. We have also kept hold of 20 very special Chocolate Monkeys that we plan to use in very special ways for those of you that purchase one of these tasty Monkeys.</p>
                                <p>The Chocolate Monkeys are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (See Record and Proof.) Purchasing a Monkey costs 0.07 ETH. To access owners only areas such as The Candy Shop, our owners will need to be signed into their Crypto Wallet such as Metamask or TrustWallet.</p>

                                <h3 className="mt-3 mb-0">Chocolate Monkeys Owner Benefits and Rights</h3>
                                <p>Being a Chocolate Monkeys owner is more than a donation to charity. You own full rights to your NFT and can use it as you wish. You will also be eligible for airdrops, cool merchandise and unlocking all new digital products. Unlike some NFTs that stick to the virtual world, our plans are to take Chocolate Monkeys to the real world. Our plan includes tying real candy to the metaverse. As Chocolate Monkey owners, you will be the first to know our plans and have early access to everything we are working on.  Once the DOA is up and running you will also have a say on what we do next.  Membership has its Priv…. I mean, you want to be part of something special!</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>

            <div className="custom-shape-divider-top-1650843368">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1650844859">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>




        </section>
    )
}

export default Mission