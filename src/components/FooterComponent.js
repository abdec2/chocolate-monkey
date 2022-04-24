import nftCalender from './../images/nft-calender.png'

const FooterComponent = () => {
    return (
        <footer className="footer-area p-4">
            <div className="container">
                <div className="row align-items-center justify-content-center mb-5">
                    <div className="col-12 col-sm-6 p-4">
                        <div className="logo-footer">
                            <img src="assets/img/logo/logo.png" alt="" />
                        </div>
                        <p className='my-0'>A world that has been conquered by an evil and villainous wizard. His master plan was to make every newborn baby into spawns of himself with the same evil intentions!</p>

                        <ul className="social-icon-list d-flex pl-0" >
                            <li className='social-icons1'><a href="https://www.facebook.com/profile.php?id=100078709631597" target='blank'><em className="fab fa-facebook-f"></em></a></li>
                            <li className='social-icons1'><a href="https://twitter.com/evilwizardnft" target='blank'><em className="fab fa-twitter"></em></a></li>
                            <li className='social-icons1'><a href="https://instagram.com/evilwizardnft" target='blank'><em className="fab fa-instagram"></em></a></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-6 p-4">
                        <div className="nftCalender mx-auto mx-sm-0 ml-sm-auto">
                            <a href='https://nftcalendar.io/event/the-evil-wizards/' target='blank'> 
                                <img src={nftCalender} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center mb-5">
                    <div className="col-12 col-md-6">
                        <div className="">
                            <div className="">
                                <p className='text-md-left text-center'>Copyright &copy; {new Date().getFullYear()} - Evil Wizards</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 poweredby'>
                        <p className="text-md-right text-center">Powered by:&nbsp;
                            <a href="http://www.brdigitech.com" target="blank" className=""><i>Button R Digitech (bRd)</i></a>
                        </p>
                    </div>
                </div>

               
            </div>
        </footer>
    )
}

export default FooterComponent