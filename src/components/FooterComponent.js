import { Link } from "react-router-dom"
const FooterComponent = () => {
    return (
        <footer className="footer-area p-4">
            <div className="container">

                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="">
                            <div className="">
                                <p className='text-md-left text-center'>Copyright &copy; {new Date().getFullYear()} - Chocolate Monkeys</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <ul className="social-icon-list d-flex pl-0 align-items-center justify-content-center" >
                            <li className='social-icons1'><a href="https://www.facebook.com" target='blank'><em className="fab fa-facebook-f"></em></a></li>
                            <li className='social-icons1'><a href="https://twitter.com/" target='blank'><em className="fab fa-twitter"></em></a></li>
                            <li className='social-icons1'><a href="https://instagram.com/" target='blank'><em className="fab fa-instagram"></em></a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-4 poweredby'>
                        <p className="text-md-right text-center">Powered by:&nbsp;
                            <a href="http://www.brdigitech.com" target="blank" className=""><i>Button R Digitech (bRd)</i></a>
                        </p>
                    </div>
                </div>
                <div className='row align-items-center justify-content-end'>
                    <div className='col-12 text-md-right text-center tnc'>
                        <Link to="/terms" >Terms and Conditions</Link>
                    </div>
                </div>


            </div>
        </footer>
    )
}

export default FooterComponent