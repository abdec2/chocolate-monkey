import React from 'react'

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
                                    <a className="nav-link" href="#about" onClick={() => closeModal()}>About</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#team" className="nav-link" onClick={() => closeModal()}>Team</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#roadmap" className="nav-link" onClick={() => closeModal()}>Mint</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#mint" className="nav-link" onClick={() => closeModal()}>Token</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#mint" className="nav-link" onClick={() => closeModal()}>The Charity</a>
                                </li> */}
                                <li className="nav-item">
                                    <a href="#mint" className="nav-link" onClick={() => closeModal()}>Executive Board</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#mint" className="nav-link" onClick={() => closeModal()}>Contact</a>
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