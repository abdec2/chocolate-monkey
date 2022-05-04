import { motion } from "framer-motion";
import Coin from './../images/TokenImage1.png';

import "./token.css";
export const Token = () => {
    return (
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id egestas metus. Fusce lacus magna, rhoncus at nisl a, ultrices lacinia nibh. Nunc congue, velit sit amet iaculis lobortis, augue velit interdum ex, eu fringilla ante velit lobortis enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        <p>
                                            We are also introducing the new Chocolate Token (CHOCO) which helps to grow the Chocolate Monkeys Metaverse.
                                        </p>
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
    )
}
