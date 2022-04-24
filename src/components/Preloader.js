
function Preloader() {
    return (
        <div id="netstorm-preloader" className="netstorm-preloader">
            <div className="preloader-animation">
                <div className="spinner"></div>
                <p className="fw-5 text-center text-uppercase">Loading</p>
            </div>
            <div className="loader-animation">
                <div className="row h-100">
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader