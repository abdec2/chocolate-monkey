
const Member = ({name, designation, image }) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4 item">
            <div className="card text-center team-card-box-shadow">
                <div className="image-over">
                        <img className="card-img-top" src={image} alt="" />
                    {/* <!-- Seller --> */}
                    <span className="seller">
                        <div className="seller-thumb avatar-lg">
                            <img className="rounded-circle" src={image} alt="" />
                        </div>
                    </span>
                </div>
                {/* <!-- Card Caption --> */}
                <div className="card-caption col-12 p-0">
                    {/* <!-- Card Body --> */}
                    <div className="card-body mt-4">
                            <h5>{name}</h5>
                            <p>{designation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member