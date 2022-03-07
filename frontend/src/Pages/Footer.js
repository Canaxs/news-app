import React from 'react'

const Footer = () => {
  return (
    <div>
                <footer className="text-center text-lg-start bg-dark text-muted text-white">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-2"
                >
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5  text-white">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>Technologies used
                        </h6>
                        <p>
                        Spring Boot , ReactJs, Redux , MySQL , Bootstrap , Material-ui , Html , Css
                        </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <a href="/#/technology" className="text-reset">Technology</a>
                        </p>
                        <p>
                            <a href="/#/game" className="text-reset">Game</a>
                        </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="/#/technology" className="text-reset">Technology</a>
                        </p>
                        <p>
                            <a href="/#/game" className="text-reset">Game</a>
                        </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Contact
                        </h6>
                        <p><i className="fas fa-home me-3"></i> İzmir / Turkey</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            mmericcana@gmail.com
                        </p>
                        <p><i className="fab fa-github me-3"></i> github/Canaxs</p>
                        <p><i className="fab fa-github me-3"></i> Linkedin/mericcana</p>
                        </div>
                    </div>
                    </div>
                </section>

                <div className="text-center p-4">
                    © 2022 Copyright:
                    <a className="text-reset fw-bold"> CanaXs</a>
                </div>
                </footer>
    </div>
  )
}

export default Footer