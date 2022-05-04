import { Link } from "react-router-dom"
const FooterComponent = () => {
    return (
        <footer className="footer-area p-4">
            <div className="container">

                <div className="row align-items-start justify-content-start">
                    <div className="col-12 col-md-6">
                        <div className="">
                            <div className="">
                                <p className='text-md-left text-center'>Copyright &copy; {new Date().getFullYear()} - Chocolate Monkeys</p>
                            </div>
                            <div className="text-md-left text-center">
                                <Link to="/terms" className="text-white">Terms and Conditions</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <ul className="social-icon-list d-flex pl-0 align-items-center justify-content-center justify-content-md-end" >
                            <li className='social-icons1'><a href="https://discord.gg/MKYFkDh6yw" target='blank'><em className="fab fa-discord"></em></a></li>
                            <li className='social-icons1'><a href="https://twitter.com/ChocoMonkeys" target='blank'><em className="fab fa-twitter"></em></a></li>
                            <li className='social-icons1'><a href="https://www.instagram.com/RealChocoMonkeys/" target='blank'><em className="fab fa-instagram"></em></a></li>
                        </ul>
                    </div>
                    {/* <div className='col-12 col-md-4 poweredby'>
                        <p className="text-md-right text-center">Powered by:&nbsp;
                            <a href="http://www.brdigitech.com" target="blank" className=""><i>Button R Digitech (bRd)</i></a>
                        </p>
                    </div> */}
                </div>
                {/* <div className='row align-items-center justify-content-start'>

                </div> */}


            </div>
        </footer>
    )
}

export default FooterComponent