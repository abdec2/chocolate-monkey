import { motion } from "framer-motion";
import "./story.css"

const Story = () => {
    return (
        <section className="story-area " id="about">
            <div className="container">
                <div className="row justify-content-center position-relative">
                    <div className="col-12 col-md-8 col-lg-7">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0}}
                            viewport={{ once: true }}
                            transition={{ease:'easeIn', duration: 1}}
                        >
                            <div className="intro text-center">

                                <h3 className="mt-3 mb-0">THE CHOCOLATE MONKEYS</h3>
                                <p>Chocolate Monkeys is a collection of 10,000 NFTs—unique digital collectibles tied to the Ethereum blockchain. Your Chocolate Monkey doubles as your key to the Candy Shop, and grants access to owner benefits and surprises. As a bonus, when you purchase a Chocolate Monkey NFT, 15% of your purchase goes to charity.
                                </p>
                                <p>
                                We are also introducing the new Chocolate Coin (CHOCO) which helps to grow the Chocolate Monkeys ecosystem.
                                </p>
                                <h3 className="mt-3 mb-0">VISION</h3>
                                <p>We are looking to grow the entire Chocolate Monkeys brand. Along with our NFT and token, we are also looking to bridge the digital with the real world by connecting real world candy to the Metaverse. This will allow you to purchase candy in the store and earn CHOCO, special Chocolate Monkeys and access to games and features.  We believe that if we can bridge the Metaverse with the real world seamlessly, we can create something amazing.  With your help and your purchase of a Chocolate Monkey NFT not only will that help us achieve our vision, but also give a percentage of that purchase to a charity close to our heart.</p>
                                <p>
                                You are very important to making this happen.  Without you, we can not achieve our goals so we want you to share with us your ideas and thoughts toward making this happen.  We are currently setting up a DAO called The Chocolate Syndicate which you can join and have a say on what we do and the direction we take.  We are firm believers in the decentralized economy and want to prove this can work in the real world.  Plus, who doesn’t love candy!
                                </p>

                            </div>
                        </motion.div>
                    </div>
                    <div className="monkeyImage"></div>
                </div>
            </div>


        </section>
    )
}

export default Story