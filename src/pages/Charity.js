import Hero from "../components/Hero"
import { motion } from "framer-motion";
import "./charity.css"

const Charity = () => {
  return (
      <>
        <Hero />
        <section className="charity-area " id="team">
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

                                    <h3 className="mt-3 mb-3 text-center">CHARITY</h3>

                                    <div className="text-center d-flex align-items-start justify-content-center flex-wrap flex-md-nowrap flex-row-reverse">
                                        <div>
                                            <p>One of the components of Chocolate Monkeys that is super important to us is the charity aspect.  We plan to give 15% of each purchase of a Chocolate Monkey NFT to charity.</p>

                                            <p>When the creator of Chocolate Monkeys was 16 years old, he received his first kidney transplant.  At the age of 18 he was diagnosed with Non-Hodgkin’s Lymphoma and lost his kidney. This is when he was introduced to the Make-a-Wish Foundation where he wished for a Macintosh computer.  Make-a-Wish changed Brian’s life.  The wish itself was amazing, but the real magic was the happiness it gave to everyone involved.  Sometimes people don’t realize that when you are chronically ill, the pain you feel, and fear is shared by everyone around you.  When a wish is granted, for that finite amount of time which can be a month, or a week or even just a day there is a shared moment of happiness or relief.  The wish child and everyone around that child forget everything that is scary in their life.  It does not matter if that wish is a trip to Disneyworld or that Macintosh computer.  It’s that moment of happiness no matter how long it lasts, and the memories one takes from the experience that you remember forever.  This is why Chocolate Monkeys means so much and why charity is such an important aspect of what we are trying to do.</p>
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

export default Charity