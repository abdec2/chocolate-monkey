import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Coin from './../images/TokenImage1.png';

import "./token.css";
export const Token = () => {
    return (
        <>
            <Hero />
            <section className="token-area">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-10">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: 'easeIn', duration: 1 }}
                            >
                                <div className="intro ">
                                    
                                    <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap flex-md-nowrap flex-md-row-reverse">
                                        <div className="ml-5 mb-5 mb-md-0 coinImage">
                                            <img className="mw-100" src={Coin} alt="" />
                                        </div>
                                        <div className="text-justify">
                                            <h3 className="mt-3 mb-3 text-center text-md-left">CHOCO COIN</h3>
                                            <p>We are also introducing the new Chocolate Coin (CHOCO) which helps to grow the Chocolate Monkeys ecosystem.  This will be available both online and offline if we do our jobs well and you embrace our Chocolate Monkeys!  Become an owner and help us create something super exciting!</p>
                                            
                                            <div className="">
                                                <a href="#" className="d-flex align-items-center coinLink" >
                                                    <div className="mr-2 exchangeIcon"></div>
                                                    Buy Choco coin
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
