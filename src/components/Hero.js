import { motion } from "framer-motion"
import "./hero.css"

const Hero = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transitionDuration: '1s' }}
        viewport={{ once: true }}
        >


            <section className="hero-section" id="home">
                <div className="hero-wrapper">
                    <div className="overlay">
                        <div className="hero-content">
                            <h1>The Chocolate Monkeys</h1>
                            <p>Chocolate Monkeys is a collection of 10,000 NFTs—unique digital collectibles tied to the Ethereum
                                blockchain.</p>
                            <div className="btns">
                                <a href="/#about">Read more...</a>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </motion.div>
    )
}

export default Hero