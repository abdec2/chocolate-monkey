import { motion } from "framer-motion";
import "./team.css";
import Brian from './../images/brian.jpg'
import Hero from "../components/Hero";


const Team = () => {
    return (
        <>
            <Hero />
            <section className="team-area " id="team">
                <div className="container">
                    <div className="row justify-content-center position-relative">
                        <div className="col-12 col-sm-10 ">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ ease: 'easeIn', duration: 1 }}
                            >
                                <div className="intro ">

                                    <h3 className="mt-3 mb-3 text-center">TEAM</h3>
                                    {/* <div className="text-justify">
                                        <p>Our team has over 25 years of digital and product experience including toy, virtual world and gaming experience.  The team has been pushing technology since 1983!</p>
                                        <p>
                                            We are also introducing the new Chocolate Token (CHOCO) which helps to grow the Chocolate Monkeys Metaverse.
                                        </p>
                                    </div> */}

                                    <h4>Brian Rubash</h4>
                                    <div className="text-justify brian d-flex align-items-start justify-content-center flex-wrap flex-md-nowrap flex-row-reverse">
                                        <img className="ml-0 ml-sm-5 mb-3 mb-md-0" src={Brian} alt="" />
                                        <div>
                                            <p>Brian combined his Marketing and Computer Science degrees and started developing websites way back in 1996.  Brian was there for the birth of digital marketing and has worked for and built digital experiences for: Make-a-Wish, MS Society, Hasbro, Lucasfilm, Disney, Cartoon Network, McDonalds, Mattel and more. He was also part of the digital team that launched the original Furby toy in 1998.</p>

                                            <p>Brian has started and raised venture capital for multiple companies in the gaming and entertainment space and launched and worked on some of the early virtual worlds such as Shining Stars, SeaPals World, and Mattel’s American Girl World.</p>
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

export default Team