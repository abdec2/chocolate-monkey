import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveMenu = () => {

    const closeModal = () => {
       document.querySelector('#menu').classList.remove('show')
       document.querySelector('#menu').style.display = 'none'
       document.querySelector('body').classList.remove('modal-open')
       document.querySelector('.modal-backdrop').remove()
    }
    return (
        <div id="menu" className="modal fade p-0">
            <div className="modal-dialog dialog-animated">
                <div className="modal-content h-100">
                    <div className="modal-header" data-dismiss="modal">
                        Menu <i className="far fa-times-circle icon-close"></i>
                    </div>
                    <div className="menu modal-body">
                        <div className="row w-100">
                            <div className="items p-0 col-12 text-center">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/" onClick={() => closeModal()}>About</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="team" className="nav-link" onClick={() => closeModal()}>Team</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="mint" className="nav-link" onClick={() => closeModal()}>Mint</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="token" className="nav-link" onClick={() => closeModal()}>Token</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="#mint" className="nav-link" onClick={() => closeModal()}>The Charity</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="exteam" className="nav-link" onClick={() => closeModal()}>Executive Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="contact" className="nav-link" onClick={() => closeModal()}>Contact</Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu