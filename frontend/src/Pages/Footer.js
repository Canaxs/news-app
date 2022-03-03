import React from 'react'

const Footer = () => {
  return (
    <div>
                <footer class="text-center text-lg-start bg-dark text-muted text-white">
                <section
                    class="d-flex justify-content-center justify-content-lg-between p-2"
                >
                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5  text-white">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>Technologies used
                        </h6>
                        <p>
                        Spring Boot , ReactJs, Redux , MySQL , Bootstrap , Material-ui , Html , Css
                        </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <a href="/#/technology" class="text-reset">Technology</a>
                        </p>
                        <p>
                            <a href="/#/game" class="text-reset">Game</a>
                        </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="/#/technology" class="text-reset">Technology</a>
                        </p>
                        <p>
                            <a href="/#/game" class="text-reset">Game</a>
                        </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            Contact
                        </h6>
                        <p><i class="fas fa-home me-3"></i> İzmir / Turkey</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            mmericcana@gmail.com
                        </p>
                        <p><i class="fab fa-github me-3"></i> github/Canaxs</p>
                        <p><i class="fab fa-github me-3"></i> Linkedin/mericcana</p>
                        </div>
                    </div>
                    </div>
                </section>

                <div class="text-center p-4">
                    © 2022 Copyright:
                    <a class="text-reset fw-bold"> CanaXs</a>
                </div>
                </footer>
    </div>
  )
}

export default Footer