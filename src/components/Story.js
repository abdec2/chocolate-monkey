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
                                <p>Chocolate Monkeys is a collection of 10,000 NFTs—unique digital collectibles tied to the Ethereum blockchain. Your Chocolate Monkey doubles as your key to the Candy Shop, and grants access to owner benefits and surprises. As a bonus, when you purchase a Chocolate Monkey NFT, 15% of your purchase goes to the Make-a-Wish Foundation to help children with life threatening health conditions get wishes granted.
                                </p>
                                <p>
                                    We are also introducing the new Chocolate Token (CHOCO) which helps to grow the Chocolate Monkeys Metaverse.
                                </p>
                                <h3 className="mt-3 mb-0">VISION</h3>
                                <p>We are looking to grow the entire Chocolate Monkeys ecosystem. Along with our NFT and token, we are also looking to bridge the digital with the real world by connecting real world candy to the Metaverse. This will allow you to purchase candy in the store and earn CHOCO, special Chocolate Monkeys and access to games and features.</p>

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